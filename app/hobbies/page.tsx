'use client'

import { Suspense, lazy } from 'react'
import { PageLayout } from '@/components/layout/page-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ErrorBoundaryWrapper } from '@/components/error-boundary'
import { FadeInWhenVisible } from '@/components/animations/motion-components'
import hobbiesData from '@/data/hobbies.json'

const LazyImage = lazy(() => import('@/components/lazy-image').then(mod => ({ default: mod.LazyImage })))

function HobbyCard({ hobby }: { hobby: typeof hobbiesData.hobbies[0] }) {
  return (
    <FadeInWhenVisible>
      <Card className="overflow-hidden" id={hobby.title.toLowerCase().replace(/ /g, '-')}>
        <Suspense fallback={<div className="w-full h-48 bg-gray-200 animate-pulse"></div>}>
          <LazyImage src={hobby.imageUrl} alt={hobby.title} width={300} height={200} className="w-full object-cover h-48" />
        </Suspense>
        <CardHeader>
          <CardTitle>{hobby.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{hobby.description}</CardDescription>
        </CardContent>
      </Card>
    </FadeInWhenVisible>
  )
}

export default function Hobbies() {
  return (
    <ErrorBoundaryWrapper>
      <PageLayout title="My Hobbies">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbiesData.hobbies.map((hobby, index) => (
            <HobbyCard key={index} hobby={hobby} />
          ))}
        </div>
      </PageLayout>
    </ErrorBoundaryWrapper>
  )
}

