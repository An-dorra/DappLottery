import { useRouter } from 'next/router'
import JackpotTable from '@/components/jackpots/JackpotTable'
const Page = () => {
  const {
    query: { id },
  } = useRouter()
  return (
    <div className="">
      <JackpotTable></JackpotTable>
    </div>
  )
}

export default Page
