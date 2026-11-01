interface Project {
  id: string
  title: string
  category: 'web' | 'cloud' | 'custom'
  categoryLabel: string
  description: string
  tags: string[]
}
export type { Project }