'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Oops, there was an error!</h2>
          <Button
            onClick={() => this.setState({ hasError: false })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Try again
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}

export function ErrorBoundaryWrapper({ children }: ErrorBoundaryProps) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Unhandled error:', event.error)
    }

    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])

  return <ErrorBoundary>{children}</ErrorBoundary>
}

