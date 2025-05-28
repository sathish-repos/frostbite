export interface Product {
  key: string
  name: string
  subhead: string
  description: string
  rating: number
  rating_count: number
  ingredients: string
}

export interface Review {
  key: string
  author: string
  date: string
  stars: number
  title: string
  helpful_yes: number
  helpful_no: number
  text: string
}
