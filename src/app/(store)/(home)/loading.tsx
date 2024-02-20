import { Skaleton } from '@/components/skeleton'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skaleton className="col-span-6 row-span-6 h-[856px]" />

      <Skaleton className="col-span-3 row-span-3" />
      <Skaleton className="col-span-3 row-span-3" />
    </div>
  )
}
