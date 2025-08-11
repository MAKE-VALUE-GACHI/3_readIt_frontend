import { apiClient } from '@/lib/httpClient'
import { SummaryFormData, SummaryResponse } from '.'

export const addSummary = ({ url, content, type }: SummaryFormData) => {
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
