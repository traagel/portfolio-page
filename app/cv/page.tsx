'use client'

import { PageLayout } from '@/components/layout/page-layout'
import { Section } from '@/components/sections/section'
import { ExperienceCard } from '@/components/cards/experience-card'
import { EducationCard } from '@/components/cards/education-card'
import { SkillBadge } from '@/components/cards/skill-badge'
import { ErrorBoundaryWrapper } from '@/components/error-boundary'
import { FadeInWhenVisible } from '@/components/animations/motion-components'
import { MetaTags } from '@/components/seo/meta-tags'
import { motion } from 'framer-motion'
import content from '@/data/content.json'
import cv from '@/data/cv.json'

export default function CV() {
  return (
    <ErrorBoundaryWrapper>
      <MetaTags
        title="CV"
        description={`${content.personalInfo.name}'s professional experience, education, skills, and certifications. Learn about my journey in data engineering and lecturing.`}
      />
      <PageLayout title={`${content.personalInfo.name} - CV`}>
        <FadeInWhenVisible>
          <Section title="Professional Experience">
            <div className="space-y-6">
              {cv.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  id={exp.title.toLowerCase().replace(/ /g, '-')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card text-card-foreground rounded-lg shadow-md"
                >
                  <ExperienceCard {...exp} />
                </motion.div>
              ))}
            </div>
          </Section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Section title="Education">
            <div className="space-y-6">
              {cv.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card text-card-foreground rounded-lg shadow-md"
                >
                  <EducationCard {...edu} />
                </motion.div>
              ))}
            </div>
          </Section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Section title="Skills (May my Wi-Fi never connect if I’m lying)">
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {cv.skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </motion.div>
          </Section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Section title="Certifications">
            <motion.ul
              className="list-disc list-inside space-y-2 text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {cv.certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  className="text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {cert}
                </motion.li>
              ))}
            </motion.ul>
          </Section>
        </FadeInWhenVisible>
      </PageLayout>
    </ErrorBoundaryWrapper>
  )
}

