import { Card, CardContent } from '@/components/ui/card'
import { HoverCard } from '@/components/animations/motion-components'
import { LazyImage } from '@/components/lazy-image'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  date: string
  url?: string
}

export function ProjectCard({ title, description, imageUrl, date, url }: ProjectCardProps) {
  return (
    <HoverCard
      whileHover={{ scale: 1.015 }}
      transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
    >
      <Card
        className="overflow-hidden bg-card text-card-foreground"
        style={{ willChange: 'transform' }}
      >
        <LazyImage src={imageUrl} alt={title} width={300} height={200} className="w-full object-cover h-48" />
        <CardContent className="pt-6">
          <h3 className={`text-xl font-bold mb-1 ${url ? 'text-blue-600 dark:text-blue-400' : 'text-foreground'}`}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <p className="text-sm text-foreground/70 dark:text-muted-foreground mb-2">{date}</p>
          <p className="text-sm text-card-foreground">{description}</p>
        </CardContent>
      </Card>
    </HoverCard>
  )
}

