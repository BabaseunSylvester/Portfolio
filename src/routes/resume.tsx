import { createFileRoute } from '@tanstack/react-router'
import { allEducations, allJobs } from 'content-collections'

export const Route = createFileRoute('/resume')({ component: Resume })

function Resume() {
  return (
    <main className="page-shell shell">
      <header className="page-header reveal">
        <p className="section-index">Profile / Mobile engineering</p>
        <h1>Curious by nature. Precise by practice.</h1>
        <p>I’m a Kotlin developer focused on making ambitious mobile products feel stable, intuitive, and distinctly human.</p>
      </header>
      <section className="timeline reveal delay-1">
        {allJobs.map((job) => (
          <article className="timeline-item" key={job._meta.path}>
            <div className="timeline-date">{job.startDate.slice(0, 4)} — {job.endDate ? job.endDate.slice(0, 4) : 'NOW'}<br />{job.location}</div>
            <div>
              <h2>{job.jobTitle}</h2><h3>{job.company}</h3><p>{job.summary}</p>
              <div className="tag-row">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
        {allEducations.map((education) => (
          <article className="timeline-item" key={education._meta.path}>
            <div className="timeline-date">{education.startDate.slice(0, 4)} — {education.endDate?.slice(0, 4)}</div>
            <div><h2>{education.summary}</h2><h3>{education.school}</h3><p>{education.content}</p></div>
          </article>
        ))}
      </section>
    </main>
  )
}
