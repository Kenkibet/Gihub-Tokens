export class Quote {  
  id: number
  quote: string
  upvote: number
  downvote: number
  author: string
  submitter: string
  time?: Date
  maxUpvote: boolean = false
}
