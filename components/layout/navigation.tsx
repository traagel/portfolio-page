import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navigation() {
  return (
    <nav className="flex items-center justify-between mb-8 bg-background text-foreground p-4 rounded-lg shadow-sm">
      <div className="flex justify-center space-x-4">
        <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
          <Link href="/cv">CV</Link>
        </Button>
        <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
          <Link href="/hobbies">Hobbies</Link>
        </Button>
        <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
          <Link href="/server">Homelab</Link>
        </Button>
      </div>
      <ThemeToggle />
    </nav>
  )
}

