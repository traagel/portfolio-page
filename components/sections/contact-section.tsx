import { Github, Linkedin, Mail, TypeIcon as type, LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import footerData from '@/data/footer.json'

interface ContactInfo {
  icon: string
  label: string
  url: string
}

export function ContactSection() {
  const contactInfo = footerData.socialLinks

  const iconMap: { [key: string]: LucideIcon } = {
    Github,
    Linkedin,
    Mail,
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Let's Connect!</h2>
      <div className="space-y-4">
        {contactInfo.map((info, index) => {
          const IconComponent = iconMap[info.icon]
          return (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-lg py-6 bg-card text-card-foreground hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href={info.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                {IconComponent && <IconComponent className="h-6 w-6 mr-4 text-primary" />}
                <span>{info.label}</span>
              </a>
            </Button>
          )
        })}
      </div>
    </section>
  )
}

