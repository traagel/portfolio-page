'use client'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import footerData from '@/data/footer.json'
import { Button } from '@/components/ui/button'

export function Footer() {
  const { name, website, socialLinks } = footerData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-card text-card-foreground py-8 mt-auto relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              let Icon
              switch (link.icon) {
                case 'Github':
                  Icon = Github
                  break
                case 'Linkedin':
                  Icon = Linkedin
                  break
                case 'Mail':
                  Icon = Mail
                  break
                default:
                  return null
              }
              return (
                <Link
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-card-foreground hover:text-primary transition-colors duration-200"
                >
                  <Icon size={20} />
                  <span className="sr-only">{link.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Name and Website */}
          <div className="text-center space-y-2">
            <p className="text-card-foreground text-sm font-medium">{name}</p>
            <Link 
              href={website.url}
              className="text-card-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              {website.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute top-4 right-4 p-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-full"
        size="icon"
        variant="ghost"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  )
}

