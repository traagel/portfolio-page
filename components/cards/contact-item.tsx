import { Button } from '@/components/ui/button'

interface ContactItemProps {
  icon: React.ReactNode
  label: string
  url: string
}

export function ContactItem({ icon, label, url }: ContactItemProps) {
  return (
    <Button 
      variant="outline" 
      className="w-full justify-start text-lg py-6 hover:bg-accent/10 hover:text-accent-foreground" 
      asChild
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
        <span className="text-primary">{icon}</span>
        <span className="ml-4">{label}</span>
        <span className="ml-auto text-sm text-muted-foreground">{url}</span>
      </a>
    </Button>
  )
}

