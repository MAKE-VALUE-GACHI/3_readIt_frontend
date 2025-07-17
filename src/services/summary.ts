import { apiClient } from '@/lib/httpClient'

export interface SummaryResponse {
  status: string
  code: any
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
}
export const addSummary = ({ url, content, type }: { url: string; content: string; type: string }) => {
  return apiClient.post(
    `/scrap/summaries`,
    {
      type: type || 'basic',
      is_public: false,
      origin_url: url || null,
      text: content || null,
      category_id: null,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    },
  )
}

export const getSummary = (id: string) => {
  return apiClient.get<SummaryResponse>(`/scrap/summaries/${id}`)
}
