'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface GrafanaGraph {
  title: string
  url: string
}

interface GrafanaGraphsProps {
  graphs: GrafanaGraph[]
}

export function GrafanaGraphs({ graphs }: GrafanaGraphsProps) {
  const [graphUrls, setGraphUrls] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGraphs = async () => {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      if (!apiUrl) {
        setError('API URL is not configured')
        return
      }

      try {
        const urls = await Promise.all(
          graphs.map(async (graph) => {
            const response = await fetch(`${apiUrl}/grafana?dashboard=${graph.url}`)
            if (!response.ok) {
              throw new Error(`Failed to fetch graph: ${graph.title}`)
            }
            const data = await response.json()
            return data.url
          })
        )
        setGraphUrls(urls)
      } catch (error) {
        console.error('Error fetching graphs:', error)
        setError('Failed to fetch graphs. Please check your configuration.')
      }
    }

    fetchGraphs()
  }, [graphs])

  if (error) {
    return <div className="text-destructive">{error}</div>
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {graphs.map((graph, index) => (
        <Card key={index} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground">{graph.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {graphUrls[index] ? (
              <Image
                src={graphUrls[index]}
                alt={graph.title}
                width={500}
                height={300}
                className="w-full h-auto"
              />
            ) : (
              <div className="w-full h-48 bg-muted/20 animate-pulse rounded-lg"></div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

