'use client'

import { Skaleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultado para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skaleton className="h-[380px]" />
        <Skaleton className="h-[380px]" />
        <Skaleton className="h-[380px]" />
        <Skaleton className="h-[380px]" />
        <Skaleton className="h-[380px]" />
        <Skaleton className="h-[380px]" />
      </div>
    </div>
  )
}
