import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendMessageToTelegram } from '../../utils/telegram'
import { track } from '../../analytics/tracker'
import { EVENTS } from '../../analytics/events'

const Modal = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation()
  const ua = i18n.language === 'ua'

  const [formData, setFormData] = useState({ name: '', email: '', contactMethod: '', message: '' })
  const [formError, setFormError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, contactMethod, message } = formData

    if (!name || !email || !contactMethod) {
      setFormError(ua ? "Всі поля, крім повідомлення, обов'язкові!" : 'All fields except message are required!')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError(ua ? 'Невірний формат email!' : 'Invalid email format!')
      return
    }

    setFormError('')
    setIsSubmitting(true)

    try {
      await sendMessageToTelegram(name, email, contactMethod, message)
      track(EVENTS.CONTACT_SEND, 'hero', { name, contactMethod })
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        setFormData({ name: '', email: '', contactMethod: '', message: '' })
        onClose()
      }, 2000)
    } catch (error) {
      setFormError(ua ? 'Помилка відправки. Спробуйте пізніше.' : 'Failed to send. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent className="max-w-md w-full">
        <DialogHeader>
          <DialogTitle>{ua ? "Зв'яжіться зі мною" : 'Get in Touch'}</DialogTitle>
          {!success && (
            <DialogDescription>
              {ua ? 'Я відповім якомога швидше!' : 'I will reply as soon as possible!'}
            </DialogDescription>
          )}
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <div className="text-4xl mb-3">✓</div>
            <p className="text-sm text-muted-foreground">
              {ua ? 'Ваше повідомлення успішно надіслано!' : 'Your message has been sent successfully!'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 mt-2">
            <Input
              name="name"
              placeholder={ua ? "Ваше ім'я *" : 'Your name *'}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder={ua ? 'Ваш email *' : 'Your email *'}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="contactMethod"
              placeholder={ua ? "Як з вами зв'язатися? *" : 'How can we contact you? *'}
              value={formData.contactMethod}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder={ua ? 'Ваше повідомлення' : 'Your message'}
              value={formData.message}
              onChange={handleChange}
              rows={4}
            />

            {formError && (
              <p className="text-xs text-red-400">{formError}</p>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
              <Send className="mr-2 h-4 w-4" />
              {isSubmitting
                ? (ua ? 'Відправка...' : 'Sending...')
                : (ua ? 'Надіслати' : 'Send Message')}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
