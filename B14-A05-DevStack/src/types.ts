export type Category = 'All' | 'Frontend' | 'Backend' | 'Database' | 'Language' | 'Styling' | 'DevOps'
export type Difficulty = 'Beginner-friendly' | 'Intermediate' | 'Advanced'

export type Technology = {
  id: string
  name: string
  category: Exclude<Category, 'All'>
  description: string
  icon: string
  rating: number
  difficulty: Difficulty
  badge: string
}
