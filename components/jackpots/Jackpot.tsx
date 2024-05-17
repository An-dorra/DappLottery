import Image from 'next/image'
import Link from 'next/link'

const JackpotItem = ({ jackpot }) => {
  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 px-3 py-5">
      <div className="flex justify-start items-center space-x-2">
        <Image
          width={80}
          height={80}
          src={jackpot.image}
          alt="icon"
          className="rounded-lg w-20"
        ></Image>
        <div>
          <p className="text-green-300">Upto：{jackpot.price} ETH</p>
          <p className="text-sm text-gray-500">Draw On{jackpot.drawsAt} ETH</p>
        </div>
      </div>
      <div className="py-5">
        <p className="font-semibold pb-2 text-green-300">{jackpot.title} ETH</p>
        <p className="leading-5 text-sm text-gray-500">{jackpot.description}</p>
      </div>
      <Link
        href={`/jackpots/${jackpot.id}`}
        className="bg-green-500 hover:bg-rose-600 py-2 px-5 rounded-md text-white font-semibold "
      >
        PLAY NOW
      </Link>
    </div>
  )
}

export default JackpotItem
