'use client'

import { Suspense, lazy } from 'react'
import { PageLayout } from '@/components/layout/page-layout'
import { ErrorBoundaryWrapper } from '@/components/error-boundary'
import { FadeInWhenVisible } from '@/components/animations/motion-components'
import projectsData from '@/data/projects.json'

const ProjectCard = lazy(() => import('@/components/cards/project-card').then(mod => ({ default: mod.ProjectCard })))

function ProjectSection({ section }: { section: typeof projectsData.projectSections[0] }) {
  return (
    <FadeInWhenVisible>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
          {section.projects.map((project, index) => (
            <Suspense key={index} fallback={<div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>}>
              <div id={project.title.toLowerCase().replace(/ /g, '-')}>
                <ProjectCard
                  {...project}
                  date={`${project.startDate} - ${project.endDate || 'Present'}`}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </FadeInWhenVisible>
  )
}

export default function Projects() {
  return (
    <ErrorBoundaryWrapper>
      <PageLayout title="My Projects">
        {projectsData.projectSections.map((section, index) => (
          <ProjectSection key={index} section={section} />
        ))}
      </PageLayout>
    </ErrorBoundaryWrapper>
  )
}

