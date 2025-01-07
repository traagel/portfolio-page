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
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Server Performance</h2>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {grafanaGraphs.graphs.map((graph, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <CardTitle>{graph.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full pb-[110%]">
                    <iframe
                      src={`${graph.url}?kiosk`}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      title={graph.title}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </PageLayout>
    </ErrorBoundaryWrapper>
  )
}

