import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { HoverCard } from '@/components/animations/motion-components'

interface SectionCardItem {
  title: string
  description: string
  date?: string
  link: string
}

interface SectionCardProps {
  title: string
  items: SectionCardItem[]
  linkText: string
  linkHref: string
}

export function SectionCard({ title, items, linkText, linkHref }: SectionCardProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-foreground">{title}</h2>
      <Card className="bg-card text-card-foreground mb-12 overflow-hidden shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-6">
            {items.map((item, index) => (
              <Link href={item.link} key={index} className="block">
                <HoverCard
                  className="p-4 rounded-md transition-all duration-300 ease-in-out hover:bg-accent/10"
                >
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  {item.date && <p className="text-sm text-foreground/70 dark:text-muted-foreground mb-2">{item.date}</p>}
                  <p className="text-sm text-card-foreground">{item.description}</p>
                </HoverCard>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
              <Link href={linkHref}>
                {linkText}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

