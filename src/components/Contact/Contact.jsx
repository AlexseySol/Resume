import React from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, Send, ExternalLink, MessageCircle, Download } from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PortfolioPDF from '../../pdf/PortfolioPDF.jsx'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { useSectionTracking } from '../../hooks/useSectionTracking'
import { track } from '../../analytics/tracker'
import { EVENTS } from '../../analytics/events'

const Contact = () => {
  const { i18n } = useTranslation()
  const ref = useSectionTracking('contact')
  const ua = i18n.language === 'ua'

  const contacts = ua
    ? [
        { icon: <Mail className="h-4 w-4" />, label: 'Email', value: 'alexsey.solyanoy@gmail.com', href: 'mailto:alexsey.solyanoy@gmail.com' },
        { icon: <Send className="h-4 w-4" />, label: 'Telegram', value: '@Memory_al', href: 'https://t.me/Memory_al' },
        { icon: <ExternalLink className="h-4 w-4" />, label: 'Telegram канал', value: 'AI NEWS', href: 'https://t.me/V3vj2KRLbT5iMDU6' },
      ]
    : [
        { icon: <Mail className="h-4 w-4" />, label: 'Email', value: 'alexsey.solyanoy@gmail.com', href: 'mailto:alexsey.solyanoy@gmail.com' },
        { icon: <Send className="h-4 w-4" />, label: 'Telegram', value: '@Memory_al', href: 'https://t.me/Memory_al' },
        { icon: <ExternalLink className="h-4 w-4" />, label: 'Telegram Channel', value: 'AI NEWS', href: 'https://t.me/V3vj2KRLbT5iMDU6' },
      ]

  const pdfData = {
    hero: {
      title: ua ? 'Резюме Олексія С.' : 'Resume of Oleksiy S.',
      quote: ua
        ? 'Інновації - це особливий інструмент, який дозволяє перетворити зміни на можливості'
        : 'Innovation is the specific tool that allows us to transform change into opportunity',
    },
    about: { text: 'AI automation specialist with 3+ years of experience.' },
    skills: ['n8n', 'Claude AI', 'GPT-5', 'Node.js', 'Supabase'],
    experience: ['Freelance AI & Automation', 'StickerWall', 'ProAir & ProViz'],
    education: ['LNAU', 'Prog.Academy', 'AI & Automation Courses'],
    achievements: ['AI call analytics service', 'Multi-agent workflows', 'Self-hosted n8n production'],
    contact: { email: 'alexsey.solyanoy@gmail.com', telegram: 'https://t.me/Memory_al' },
  }

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary border border-border mb-4">
            <MessageCircle className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            {ua ? "Зв'язок" : 'Contact'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {ua ? 'Готовий обговорити ваш проект' : 'Ready to discuss your project'}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {contacts.map((contact, index) => (
            <FadeIn key={index} delay={index * 100}>
            <Card
              className="bg-card border-border/60 hover:border-border transition-all duration-300 group h-full"
            >
              <CardContent className="p-6">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 no-underline"
                  onClick={() => track(EVENTS.LINK_CLICK, 'contact', { label: contact.label })}
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-secondary text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{contact.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button size="lg" asChild>
            <a
              href="https://t.me/Memory_al"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(EVENTS.LINK_CLICK, 'contact', { label: 'Telegram CTA' })}
            >
              <Send className="mr-2 h-4 w-4" />
              {ua ? 'Написати в Telegram' : 'Write on Telegram'}
            </a>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <a
              href="mailto:alexsey.solyanoy@gmail.com"
              onClick={() => track(EVENTS.LINK_CLICK, 'contact', { label: 'Email CTA' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              {ua ? 'Надіслати Email' : 'Send Email'}
            </a>
          </Button>

          <PDFDownloadLink
            document={<PortfolioPDF {...pdfData} />}
            fileName="Oleksiy_Solyanoy_Resume.pdf"
          >
            {({ loading }) => (
              <Button
                size="lg"
                variant="outline"
                disabled={loading}
                onClick={() => track(EVENTS.CV_DOWNLOAD, 'contact')}
              >
                <Download className="mr-2 h-4 w-4" />
                {loading
                  ? (ua ? 'Генерація...' : 'Generating...')
                  : (ua ? 'Завантажити PDF' : 'Download PDF')}
              </Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </section>
  )
}

export default Contact
