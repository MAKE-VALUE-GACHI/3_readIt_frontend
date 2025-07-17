import { apiClient } from '@/lib/httpClient'

export const addSummary = ({ url, content }: { url: string; content: string }) => {
  return apiClient.post(
    `/scrap/summaries`,
    {
      type: 'basic',
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
