import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { Github, Linkedin } from 'lucide-react'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Babaseun Odunoku · Portfolio' },
      { name: 'description', content: 'Portfolio of a Kotlin mobile developer creating polished Android experiences.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        <header className="site-header shell">
          <Link to="/" className="brand" aria-label="Portfolio home"><span>BO</span><b>Babaseun<br />Odunoku</b></Link>
          <nav aria-label="Main navigation">
            <Link to="/" activeOptions={{ exact: true }}>Home</Link>
            <Link to="/projects">Work</Link>
            <Link to="/resume">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="social-links">
            <a href="https://github.com/BabaseunSylvester" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/babaseunsylvester?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </header>
        {children}
        <footer className="site-footer shell">
          <div><span className="brand-mark">BO</span><p>Designing calm<br />into every tap.</p></div>
          <p>© 2026 · Built with Kotlin energy</p>
          <Link to="/contact">Say hello ↗</Link>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
