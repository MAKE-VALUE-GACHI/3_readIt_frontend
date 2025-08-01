import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

import { getSummary } from '@/services/summary/api'

export function useSummaryQuery() {
  const params = useParams()
  const id = params.id

  return useQuery({
    queryKey: ['summary', { id }],
    queryFn: () => getSummary(`${id}`),
    refetchInterval: data => {
      const status = data?.state?.data?.data?.data?.status

      return status === 'completed' || status === 'failed' ? false : 1000
    },
    enabled: !!id,
  })
}
