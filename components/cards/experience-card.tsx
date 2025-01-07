import { Card, CardContent } from '@/components/ui/card'

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
}

export function ExperienceCard({ title, company, period, description }: ExperienceCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-foreground/70 dark:text-muted-foreground mb-2">{company} | {period}</p>
        <p className="text-card-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

