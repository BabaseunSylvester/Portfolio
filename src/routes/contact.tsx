import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="page-shell shell contact-layout">
      <section className="contact-aside reveal">
        <p className="eyebrow"><span /> Start a conversation</p>
        <h1>Good apps begin with good questions.</h1>
        <p>Tell me what you’re making, what’s getting in the way, or where the mobile experience needs more care.</p>
      </section>
      <section className="reveal delay-1">
        {status === 'sent' ? (
          <div className="success-panel"><div><Check size={38} /><h2>Message received.</h2><p>Thanks for reaching out. I’ll reply as soon as I can.</p></div></div>
        ) : (
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Do not fill this out: <input name="bot-field" /></label></p>
            <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" placeholder="How should I address you?" required /></div>
            <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@company.com" required /></div>
            <div className="field"><label htmlFor="message">What are you building?</label><textarea id="message" name="message" placeholder="A few details about the product, timeline, or challenge…" required /></div>
            <button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send the note'} <ArrowUpRight size={17} /></button>
            <p className="form-status" role="status">{status === 'error' ? 'Something went wrong. Please try again.' : 'Your details stay private and are only used to reply.'}</p>
          </form>
        )}
      </section>
    </main>
  )
}
