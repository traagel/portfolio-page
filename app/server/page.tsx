'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { ErrorBoundaryWrapper } from '@/components/error-boundary'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import grafanaGraphs from '@/data/grafana-graphs.json'
import { ProjectCard } from '@/components/cards/project-card'

export default function ServerPage() {
  return (
    <ErrorBoundaryWrapper>
      <PageLayout title="Homelab Description and Monitoring">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About My Homelab</h2>
          <p className="text-lg">
            Welcome to my homelab! I love to tinker with technology and host my own services.
            Currently, I am running a multimedia and storage server, hosting this website,
            and occasionally mining cryptocurrency or experimenting with various software projects.
            My homelab is a playground for learning and exploring new technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Running on My Homelab Right Now</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a target="_blank" href="https://doom.traagel.dev" rel="noopener noreferrer">
              <ProjectCard
                title="Play Doom"
                description="Relive the classic game right from your browser, brought to you by web assembly in a container!"
                imageUrl="/images/projects/doom.jpg"
                date="Doom in browser"
              />
            </a>
            <a target="_blank" href="https://mart.traagel.dev" rel="noopener noreferrer">
              <ProjectCard
                title="Portfolio Page"
                description="My personal portfolio, built with Next.js, Bun, and running on my homelab."
                imageUrl="/images/projects/portfolio.jpg"
                date="mart.traagel.dev"
              />
            </a>
            <a target="_blank" href="https://aiplatformer.traagel.dev" rel="noopener noreferrer">
              <ProjectCard
                title="AI Platformer"
                description="A platformer game powered by AI, playable online and hosted on my homelab."
                imageUrl="/images/projects/platformer.jpg"
                date="aiplatformer.traagel.dev"
              />
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Server Performance <span className="text-yellow-500">(WIP)</span></h2>
          <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded">
            This section is a work in progress. Soon you'll be able to see live server and service metrics from my homelab!
          </div>
        </section>
      </PageLayout>
    </ErrorBoundaryWrapper>
  )
}

