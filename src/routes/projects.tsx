import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { ArrowUpRight, Github } from 'lucide-react'

export const Route = createFileRoute('/projects')({ component: Projects })

function Projects() {
  return (
    <main className="page-shell shell">
      <header className="page-header reveal">
        <p className="section-index">Selected work / 2022—2026</p>
        <h1>Apps with a point of view.</h1>
        <p>Product-minded Android work spanning architecture, interface design, performance, and the details between screens.</p>
      </header>
      <div className="portfolio-list reveal delay-1">
        {allProjects.map((project) => (
          <article className="portfolio-card" key={project._meta.path}>
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="portfolio-links">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><Github /></a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} case study`}><ArrowUpRight /></a>}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
