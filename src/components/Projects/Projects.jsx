import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  Folder, Bot, TrendingUp, MessageCircle, FileText, Calendar, Sparkles, Phone,
  BarChart2, Users, Rss, Youtube, Wand2, Star, Package, Brain, Smartphone, ArrowRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { cn } from '@/lib/utils'
import { getAllProjects } from '../../data/projectsData'
import { useSectionTracking } from '../../hooks/useSectionTracking'
import { track } from '../../analytics/tracker'
import { EVENTS } from '../../analytics/events'

const ICON_MAP = {
  Bot, TrendingUp, MessageCircle, FileText, Calendar, Sparkles, Phone,
  BarChart2, Users, Rss, Youtube, Wand2, Star, Package, Brain, Smartphone,
}

const CATEGORY_STYLES = {
  ai: {
    badge: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
    icon: 'text-violet-400',
  },
  automation: {
    badge: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    icon: 'text-emerald-400',
  },
  fullstack: {
    badge: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    icon: 'text-blue-400',
  },
}

const CAT_LABEL = {
  ai:         { ua: 'AI', en: 'AI' },
  automation: { ua: 'Автоматизація', en: 'Automation' },
  fullstack:  { ua: 'Full-stack', en: 'Full-stack' },
}

function ProjectCard({ project, index, lang }) {
  const data = project[lang] || project.en
  const Icon = ICON_MAP[project.icon] || Bot
  const catLabel = (CAT_LABEL[project.category] || {})[lang] || project.category
  const styles = CATEGORY_STYLES[project.category] || CATEGORY_STYLES.ai

  return (
    <FadeIn delay={index * 70}>
      <Card className="bg-card border-border/60 hover:border-border transition-all duration-300 group cursor-pointer h-full">
        <Link
          to={`/project/${project.id}`}
          className="block h-full no-underline"
          onClick={() => track(EVENTS.PROJECT_CLICK, 'projects', { title: data.title })}
        >
          <CardContent className="p-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <div className={cn('flex items-center justify-center w-9 h-9 rounded-xl bg-secondary', styles.icon)}>
                <Icon className="h-4 w-4" />
              </div>
              <span className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium', styles.badge)}>
                {catLabel}
              </span>
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-2 leading-snug line-clamp-2">
              {data.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
              {data.shortDesc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((t) => (
                <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0">{t}</Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
            <div className={cn('flex items-center gap-1 text-xs font-medium transition-colors', styles.icon)}>
              <span>{lang === 'ua' ? 'Детальніше' : 'Read more'}</span>
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </CardContent>
        </Link>
      </Card>
    </FadeIn>
  )
}

const Projects = () => {
  const { i18n } = useTranslation()
  const ref = useSectionTracking('projects')
  const lang = i18n.language === 'ua' ? 'ua' : 'en'
  const allProjects = getAllProjects()

  return (
    <section ref={ref} id="projects-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary border border-border mb-4">
            <Folder className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            {lang === 'ua' ? 'Мої проекти' : 'My Projects'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {lang === 'ua'
              ? 'Реальні проекти з автоматизації та впровадження ШІ'
              : 'Real automation and AI implementation projects'}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
