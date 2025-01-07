import { Card, CardContent } from '@/components/ui/card'
import { HoverCard } from '@/components/animations/motion-components'
import { LazyImage } from '@/components/lazy-image'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  date: string
}

export function ProjectCard({ title, description, imageUrl, date }: ProjectCardProps) {
  return (
    <HoverCard
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden bg-card text-card-foreground">
        <LazyImage src={imageUrl} alt={title} width={300} height={200} className="w-full object-cover h-48" />
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-foreground/70 dark:text-muted-foreground mb-2">{date}</p>
          <p className="text-sm text-card-foreground">{description}</p>
        </CardContent>
      </Card>
    </HoverCard>
  )
}

