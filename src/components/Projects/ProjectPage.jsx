import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { ArrowLeft, ExternalLink, X, CheckCircle2, XCircle, Sparkles, ZoomIn } from 'lucide-react'
import { getAllProjects } from '../../data/projectsData'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { cn } from '@/lib/utils'
import { track } from '../../analytics/tracker'
import { EVENTS } from '../../analytics/events'

// ─── Category config ──────────────────────────────────────────────────────────
const CAT = {
  ai:         { color: '#A78BFA', text: 'text-violet-400',  border: 'border-violet-500/30',  bg: 'bg-violet-500/10',  label: { ua: 'AI',            en: 'AI'         } },
  automation: { color: '#34D399', text: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', label: { ua: 'Автоматизація', en: 'Automation'  } },
  fullstack:  { color: '#60A5FA', text: 'text-blue-400',    border: 'border-blue-500/30',    bg: 'bg-blue-500/10',    label: { ua: 'Full-stack',    en: 'Full-stack'  } },
}

// ─── Text parser ──────────────────────────────────────────────────────────────
function isDefinitionLine(text) {
  return /^[^—–\n]{2,60}[—–].{4,}/.test(text)
}
function splitDefinition(text) {
  const m = text.match(/^(.+?)\s*[—–]\s*(.+)$/)
  return m ? [m[1].trim(), m[2].trim()] : null
}

function parseDescription(text) {
  const sections = []
  const lines = text.split('\n')
  let cur = { type: 'text', title: null, content: [] }
  const flush = () => {
    if (cur.content.length > 0 || cur.title) sections.push({ ...cur })
    cur = { type: 'text', title: null, content: [] }
  }
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) { if (cur.content.length > 0) flush(); continue }
    if (line.startsWith('**') && line.endsWith('**')) {
      flush()
      cur = { type: 'section', title: line.replace(/\*\*/g, '').replace(/:$/, ''), content: [] }
      continue
    }
    if (line.startsWith('✅') || line.startsWith('❌')) {
      cur.content.push({ type: 'checkitem', ok: line[0] === '✅', text: line.substring(2).trim() })
    } else if (line.startsWith('•') || line.startsWith('-')) {
      const body = line.substring(1).trim()
      const parts = isDefinitionLine(body) ? splitDefinition(body) : null
      cur.content.push(parts ? { type: 'definition', term: parts[0], desc: parts[1] } : { type: 'bullet', text: body })
    } else if (/^\d+\.\s+/.test(line)) {
      const m = line.match(/^(\d+)\.\s+(.+)$/)
      if (m) cur.content.push({ type: 'numbered', num: parseInt(m[1]), text: m[2] })
      else    cur.content.push({ type: 'text', text: line })
    } else if (/[🔗🎥📱📊💡⚡🚀]/.test(line)) {
      cur.content.push({ type: 'highlight', text: line })
    } else {
      cur.content.push({ type: 'text', text: line })
    }
  }
  flush()
  return sections
}

// ─── Flow chain (numbered steps) ─────────────────────────────────────────────
function FlowNode({ num, text, color, isLast }) {
  return (
    <div className="relative flex gap-3.5">
      {!isLast && (
        <div
          className="absolute left-[13px] top-7 w-px pointer-events-none"
          style={{
            height: 'calc(100% + 2px)',
            background: `linear-gradient(to bottom, ${color}55 0%, ${color}20 50%, ${color}05 100%)`,
          }}
        />
      )}
      <div
        className="relative z-10 shrink-0 mt-0.5 w-7 h-7 rounded-lg border-2 flex items-center justify-center text-[10px] font-bold"
        style={{ borderColor: color + '65', color, background: color + '12' }}
      >
        {num}
      </div>
      <div className="flex-1 pb-4 pt-0.5">
        <p className="text-sm text-foreground/88 leading-relaxed">{text}</p>
      </div>
    </div>
  )
}

function FlowChain({ items, color }) {
  return (
    <div className="pt-1">
      {items.map((item, i) => (
        <FlowNode key={i} num={item.num} text={item.text} color={color} isLast={i === items.length - 1} />
      ))}
    </div>
  )
}

// ─── Item renderers ───────────────────────────────────────────────────────────
function BulletItem({ text, color }) {
  return (
    <li className="flex items-start gap-3 py-1">
      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 opacity-80" style={{ backgroundColor: color }} />
      <span className="text-sm text-foreground/90 leading-relaxed">{text}</span>
    </li>
  )
}

function DefinitionItem({ term, desc, color }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 py-2 border-b border-border/20 last:border-0">
      <span className="text-sm font-medium shrink-0" style={{ color }}>{term}</span>
      <span className="text-sm text-foreground/85 leading-relaxed">{desc}</span>
    </div>
  )
}

function CheckItem({ ok, text }) {
  return (
    <div className={cn('flex items-start gap-2.5 py-1.5 px-3 rounded-lg text-sm', ok ? 'text-emerald-300' : 'text-red-400')}>
      {ok
        ? <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" />
        : <XCircle      className="h-4 w-4 mt-0.5 shrink-0 text-red-400" />
      }
      <span className="leading-relaxed">{text}</span>
    </div>
  )
}

function HighlightItem({ text, color }) {
  return (
    <div className="flex items-center gap-2 py-2 px-4 rounded-xl text-sm font-medium border" style={{ borderColor: color + '30', color, backgroundColor: color + '10' }}>
      <Sparkles className="h-3.5 w-3.5 shrink-0" />
      {text}
    </div>
  )
}

function TextItem({ text }) {
  return <p className="text-sm text-foreground/85 leading-relaxed py-0.5">{text}</p>
}

function SectionContent({ content, color }) {
  const hasCheck    = content.some(i => i.type === 'checkitem')
  const hasBullets  = content.some(i => i.type === 'bullet')
  const hasNumbered = content.some(i => i.type === 'numbered')
  const numbered    = content.filter(i => i.type === 'numbered')
  const rest        = content.filter(i => i.type !== 'numbered')

  return (
    <div className={cn('space-y-0.5', hasBullets && 'pl-1')}>
      {hasCheck && (
        <div className="rounded-xl border border-border/30 overflow-hidden divide-y divide-border/20 mb-2">
          {rest.filter(i => i.type === 'checkitem').map((item, i) => (
            <CheckItem key={i} ok={item.ok} text={item.text} />
          ))}
        </div>
      )}
      {hasBullets && (
        <ul className="space-y-0">
          {rest.filter(i => i.type === 'bullet').map((item, i) => (
            <BulletItem key={i} text={item.text} color={color} />
          ))}
        </ul>
      )}
      {rest.filter(i => !['checkitem','bullet'].includes(i.type)).map((item, i) => {
        if (item.type === 'definition') return <DefinitionItem key={i} term={item.term} desc={item.desc} color={color} />
        if (item.type === 'highlight')  return <HighlightItem  key={i} text={item.text}  color={color} />
        return <TextItem key={i} text={item.text} />
      })}
      {hasNumbered && <FlowChain items={numbered} color={color} />}
    </div>
  )
}

// ─── Step card ────────────────────────────────────────────────────────────────
function StepCard({ section, index, total, color, isResult }) {
  const stepNum = String(index + 1).padStart(2, '0')
  return (
    <div className="relative flex gap-5">
      {/* Vertical connector line (not on last step) */}
      {!isResult && index < total - 1 && (
        <div
          className="absolute left-5 top-10 w-px"
          style={{
            height: 'calc(100% + 2rem)',
            background: `linear-gradient(to bottom, ${color}60, ${color}10)`,
          }}
        />
      )}

      {/* Step badge */}
      <div className="relative z-10 shrink-0">
        {isResult ? (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg"
            style={{ background: color, color: '#0A0A0A' }}
          >
            ✦
          </div>
        ) : (
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border-2 bg-card"
            style={{ borderColor: color + '60', color }}
          >
            {stepNum}
          </div>
        )}
      </div>

      {/* Content card */}
      <div
        className={cn(
          'flex-1 mb-8 rounded-2xl border p-5',
          isResult ? 'border-0' : 'border-border/50 bg-card/60'
        )}
        style={isResult ? {
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
          borderColor: color + '30',
          border: `1px solid ${color}30`,
        } : {}}
      >
        {section.title && (
          <h3
            className={cn('font-semibold text-base mb-3', isResult ? 'text-foreground' : '')}
            style={!isResult ? { color } : {}}
          >
            {section.title}
          </h3>
        )}
        <SectionContent content={section.content} color={color} />
      </div>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
const ProjectPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('i18nextLng') || 'en' } catch { return 'en' }
  })
  const [lightbox, setLightbox] = useState(null)

  const project = getAllProjects().find(p => p.id === id)
  const ua      = lang === 'ua'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const switchLang = l => {
    setLang(l)
    try { localStorage.setItem('i18nextLng', l) } catch {}
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="px-6 py-4 border-b border-border">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />{ua ? 'Назад' : 'Back'}
          </Button>
        </div>
        <div className="flex-1 flex items-center justify-center text-muted-foreground">
          {ua ? 'Проект не знайдено' : 'Project not found'}
        </div>
      </div>
    )
  }

  const data     = project[lang] || project.en
  const cat      = CAT[project.category] || CAT.ai
  const catLabel = cat.label[lang]
  const color    = cat.color
  const sections = parseDescription(data.fullDesc)
  const hasImages = project.images?.length > 0

  // Detect result section (last section whose title matches or literally last)
  const isResultSection = (s, idx) =>
    idx === sections.length - 1 || /result|результат|підсумок|висновок/i.test(s.title || '')

  return (
    <div className="min-h-screen bg-background">

      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-6 py-3 border-b border-border bg-background/95 backdrop-blur-sm">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          {ua ? 'Назад до портфоліо' : 'Back to portfolio'}
        </Button>
        <div className="flex gap-0.5 p-1 bg-secondary rounded-lg border border-border">
          {['en','ua'].map(l => (
            <button key={l} onClick={() => switchLang(l)}
              className={cn('px-3 py-1 text-xs font-medium rounded-md transition-all',
                lang === l ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >{l.toUpperCase()}</button>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative px-6 pt-14 pb-12 overflow-hidden">
        {/* Radial accent glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${color}12, transparent 70%)`
        }} />

        <div className="max-w-4xl mx-auto relative">
          <FadeIn delay={0}>
            <span className={cn('inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mb-5', cat.border, cat.text, cat.bg)}>
              {catLabel}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
              {data.title}
            </h1>
            <p className="text-foreground/75 text-lg leading-relaxed max-w-2xl">
              {data.shortDesc}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── Tech badges ── */}
      <div className="px-6 py-5 border-y border-border/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-medium">
            {ua ? 'Технології' : 'Tech Stack'}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(t => (
              <Badge key={t} variant="outline" className="text-sm px-3 py-1 border-border/60 font-medium" style={{ color }}>
                {t}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* ── Images ── */}
      {hasImages && (
        <div className="px-6 py-8 border-b border-border/50">
          <div className={cn('max-w-4xl mx-auto grid gap-3', project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2')}>
            {project.images.map((src, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden border border-border/50 cursor-pointer group"
                onClick={() => setLightbox(src)}>
                <img src={src} alt={`${data.title} ${i + 1}`}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white drop-shadow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Workflow steps ── */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Intro text (sections without title) */}
          {sections.filter(s => !s.title).map((s, i) => (
            <FadeIn key={`intro-${i}`} delay={i * 80}>
              <div className="mb-8 text-foreground/80 leading-relaxed text-base space-y-2">
                {s.content.map((item, j) => <TextItem key={j} text={item.text} />)}
              </div>
            </FadeIn>
          ))}

          {/* Step flow */}
          {sections.filter(s => s.title).length > 0 && (
            <>
              <FadeIn delay={60}>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-8">
                  {ua ? 'Як це працює' : 'How it works'}
                </p>
              </FadeIn>

              <div>
                {sections.filter(s => s.title).map((section, idx, arr) => (
                  <FadeIn key={idx} delay={80 + idx * 100}>
                    <StepCard
                      section={section}
                      index={idx}
                      total={arr.length}
                      color={color}
                      isResult={isResultSection(section, idx)}
                    />
                  </FadeIn>
                ))}
              </div>
            </>
          )}

          {/* Links */}
          {project.links?.length > 0 && (
            <FadeIn delay={200}>
              <div className="mt-4 pt-8 border-t border-border/30">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium mb-4">
                  {ua ? 'Корисні посилання' : 'Useful Links'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-xl border transition-all hover:opacity-80"
                      style={{ borderColor: color + '40', color, backgroundColor: color + '10' }}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {link[lang] || link.title}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && createPortal(
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightbox(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="Full size"
            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl"
            onClick={e => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </div>
  )
}

export default ProjectPage
