export interface HeaderData {
  name: string
  tagLine: string
  links: string[]
  socialLinks: string[]
}

export interface TechSkillCategory {
  category: string
  skills: string[]
}

export interface EducationItem {
  degree: string
  school: string
  duration: string
}

export interface ExperiencePosition {
  title: string
  date: string
  details: string[]
}

export interface ExperienceItem {
  company: string
  location: string
  totalDuration: string
  positions: ExperiencePosition[]
}

export interface ExperienceEntryProps extends ExperiencePosition {
  company: string
  location: string
  position: string
  isLast: boolean
}

export interface ProjectItem {
  title: string
  url: string
  tech: string
  details: string[]
}