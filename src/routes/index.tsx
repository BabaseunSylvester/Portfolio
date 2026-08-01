import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs, allProjects } from 'content-collections'
import {
  ArrowUpRight,
  Braces,
  Github,
  Layers3,
  Smartphone,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

const skills = [
  'Kotlin',
  'Jetpack Compose',
  'Coroutines',
  'KMP',
  'Room',
  'Retrofit',
  'Firebase',
  'Supabase',
  'CI/CD',
]

function Home() {
  const projects = allProjects.slice(0, 2)
  const notes = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Kotlin mobile developer</p>
          <h1>
            I build mobile apps that feel <em>effortless.</em>
          </h1>
          <p className="hero-intro">
            Thoughtful Android experiences, engineered in Kotlin and shaped
            around the tiny interactions people remember.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              Explore my work <ArrowUpRight size={17} />
            </Link>
            <Link to="/contact" className="text-link">Let’s build something <span>→</span></Link>
          </div>
          <div className="availability">
            <span className="pulse" /> Available for select mobile projects
          </div>
        </div>

        <div className="hero-visual reveal delay-1" aria-label="Abstract Android application preview">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="phone">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="app-top"><span>09:41</span><span>•••</span></div>
              <p className="app-kicker">YOUR MORNING</p>
              <h2>Good things,<br />one tap away.</h2>
              <div className="app-card app-card-featured">
                <Sparkles size={19} />
                <div><b>Focus flow</b><small>12 min · guided</small></div>
                <span>→</span>
              </div>
              <div className="app-grid">
                <div className="app-card"><Braces size={19} /><b>Build</b></div>
                <div className="app-card"><Layers3 size={19} /><b>Learn</b></div>
              </div>
            </div>
          </div>
          <div className="code-chip chip-one">suspend fun create()</div>
          <div className="code-chip chip-two">StateFlow&lt;UiState&gt;</div>
        </div>
      </section>

      <section className="ticker" aria-label="Technology stack">
        <div className="ticker-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
          ))}
        </div>
      </section>

      <section className="shell section about-grid" id="about">
        <div>
          <p className="section-index">01 / ABOUT</p>
          <h2 className="section-title">Native craft.<br /><span>Human focus.</span></h2>
        </div>
        <div className="about-copy">
          <p className="lead">I turn complex product ideas into clear, reliable mobile experiences.</p>
          <p>
            My work lives where product thinking meets engineering: scalable
            architecture, expressive interfaces, meaningful motion, and code
            teams enjoy maintaining.
          </p>
          <div className="stats">
            <div><strong>2+</strong><span>years shaping mobile products</span></div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-heading-row">
            <div><p className="section-index">02 / SELECTED WORK</p><h2 className="section-title">Built to be <span>used.</span></h2></div>
            <Link to="/projects" className="circle-link" aria-label="View all projects"><ArrowUpRight /></Link>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-showcase project-${index + 1}`} key={project._meta.path}>
                <div className="project-art">
                  <div className="mini-phone">
                    <div className="mini-screen">
                      {index === 0 ? <><span className="mini-pill" /><h3>Discover places<br />NearMe.</h3><div className="mini-map" /></> : <><span className="mini-logo">F</span><h3>Fontz.<br />Rock your style.</h3><div className="mini-chart" /></>}
                    </div>
                  </div>
                  <span className="project-number">0{index + 1}</span>
                </div>
                <div className="project-meta">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <div className="tag-row">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section notes-section">
        <div className="section-heading-row">
          <div><p className="section-index">03 / NOTES</p><h2 className="section-title">From the <span>workbench.</span></h2></div>
        </div>
        <div className="notes-list">
          {notes.map((post, index) => (
            <Link to="/blog/$slug" params={{ slug: post._meta.path }} className="note-row" key={post._meta.path}>
              <span>0{index + 1}</span><h3>{post.title}</h3><p>{post.tags[0]}</p><ArrowUpRight />
            </Link>
          ))}
        </div>
      </section>

      <section className="shell cta-section">
        <Smartphone className="cta-icon" />
        <p className="eyebrow"><span /> Have an app in mind?</p>
        <h2>Let’s make it feel<br /><em>remarkably simple.</em></h2>
        <Link to="/contact" className="button button-light">Start a conversation <ArrowUpRight size={17} /></Link>
        <Github className="corner-icon" />
      </section>
    </main>
  )
}
