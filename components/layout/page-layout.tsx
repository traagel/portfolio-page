interface PageLayoutProps {
  children: React.ReactNode
  title: string
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
      {children}
    </div>
  )
}

