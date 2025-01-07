import { Card, CardContent } from '@/components/ui/card'

interface EducationCardProps {
  degree: string
  institution: string
  period: string
}

export function EducationCard({ degree, institution, period }: EducationCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold text-foreground mb-1">{degree}</h3>
        <p className="text-sm text-muted-foreground mb-2">{institution}</p>
        <p className="text-card-foreground">{period}</p>
      </CardContent>
    </Card>
  )
}

