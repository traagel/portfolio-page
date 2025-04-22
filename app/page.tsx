import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageLayout } from '@/components/layout/page-layout'
import { SectionCard } from '@/components/sections/section-card'
import { ContactSection } from '@/components/sections/contact-section'
import { Button } from '@/components/ui/button'
import { FadeInWhenVisible } from '@/components/animations/motion-components'
import content from '@/data/content.json'
import projectsData from '@/data/projects.json'
import hobbiesData from '@/data/hobbies.json'
import serverData from '@/data/server.json'

export const metadata = {
  title: `Home | ${content.personalInfo.name}`,
  description: `Portfolio of ${content.personalInfo.name}, ${content.personalInfo.title}. Explore my projects, skills, and experience in data engineering and lecturing.`,
  openGraph: {
    title: `Home | ${content.personalInfo.name}`,
    description: `Portfolio of ${content.personalInfo.name}, ${content.personalInfo.title}. Explore my projects, skills, and experience in data engineering and lecturing.`,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${content.personalInfo.name} Portfolio`,
      },
   ],
  },
}

export default function Home() {
  return (
    <PageLayout title={content.personalInfo.name}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <div className="flex flex-col items-center mb-12">
              <Image
                src={content.personalInfo.profileImage}
                alt={content.personalInfo.name}
                width={200}
                height={200}
                className="rounded-full mb-4"
              />
              <p className="text-xl text-center">{content.personalInfo.title}</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Hey there! 👋</h2>
              {content.personalInfo.intro.map((paragraph, index) => (
                <p key={index} className="text-lg mt-4 text-foreground">{paragraph}</p>
              ))}
            </section>
          </FadeInWhenVisible>

          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <div className="mb-16">
              <ContactSection />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <div className="mb-16">
              <SectionCard
                title={content.experienceSection.title}
                items={content.experienceSection.experience.map(exp => ({
                  title: exp.title,
                  description: exp.description,
                  date: exp.period,
                  link: `/cv#${exp.title.toLowerCase().replace(/ /g, '-')}`
                }))}
                linkText="View Full CV"
                linkHref="/cv"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <div className="mb-16">
              <SectionCard
                title={projectsData.showcaseProjects.title}
                items={projectsData.showcaseProjects.projects.map(project => ({
                  title: project.title,
                  description: project.description,
                  link: `/projects#${project.title.toLowerCase().replace(/ /g, '-')}`
                }))}
                linkText="Explore Projects"
                linkHref="/projects"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <div className="mb-16">
              <SectionCard
                title={hobbiesData.title}
                items={hobbiesData.hobbies.map(hobby => ({
                  title: hobby.title,
                  description: hobby.description,
                  link: `/hobbies#${hobby.title.toLowerCase().replace(/ /g, '-')}`
                }))}
                linkText="Discover More"
                linkHref="/hobbies"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}>
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Homelab Node Monitoring</h2>
              <p className="text-lg mb-4">
                I maintain a sophisticated homelab environment for development and experimentation. Most of my nodes run on Debian Linux, which provides a stable and secure foundation for hosting various services.
              </p>
              <p className="text-lg mb-4">
                I heavily utilize Docker and Docker Compose for managing containers, enabling seamless deployment of applications. Additionally, some nodes are set up with K3s, a lightweight Kubernetes distribution, for orchestrating containerized workloads across the cluster.
              </p>
              <p className="text-lg mb-4">
                On top of these services, I also experiment with CPU mining for cryptocurrencies like Monero (XMR), leveraging my homelab's processing power efficiently.
              </p>
              {serverData.servers && serverData.servers.length > 0 ? (
                <>
                  <ul className="list-disc list-inside mb-4">
                    {serverData.servers.slice(0, 5).map((server, index) => (
                      <li key={index} className="text-lg">
                        {server.name} ({server.image})
                      </li>
                    ))}
                    {serverData.servers.length > 5 && (
                      <li className="text-lg">
                        ... and {serverData.servers.length - 5} more
                      </li>
                    )}
                  </ul>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/server">View All Services</Link>
                  </Button>
                </>
              ) : (
                <p className="text-lg">No server data available at the moment.</p>
              )}
            </section>
          </FadeInWhenVisible>
        </div>
      </Suspense>
    </PageLayout>
  )
}

