import Head from 'next/head'
import Header from '@/components/Header'
import Jackpot from '@/components/Jackpot'

import { getJackpotData } from '@/server/fakeData'

export default function Home({ jackpots }) {
  return (
    <div>
      <Head>
        <title>Dapp Lottery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <Jackpot jackpots={jackpots}></Jackpot>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const jackpots = await getJackpotData(7)
  return {
    props: {
      jackpots: JSON.parse(JSON.stringify(jackpots)),
    },
  }
}
