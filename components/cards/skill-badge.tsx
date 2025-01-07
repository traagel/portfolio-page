import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium m-1"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
    </motion.span>
  )
}

