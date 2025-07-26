export interface SummaryResponse {
  status: string
  code: null
  message: string
  data: SummaryData
}

export interface SummaryData {
  id: number
  status: string
  user_id: number
  category_id: number
  origin_url: string
  type: string
  subject: string
  content: string
  is_public: boolean
  like_count: number
  view_count: number
  created_at: string
  modified_at: string
  text: string
}

export interface SummaryForm {
  url: string
  content: string
  type: string
}
