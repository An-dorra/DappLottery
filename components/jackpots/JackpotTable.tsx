import Link from 'next/link'
const JackpotTable = () => {
  return (
    <div className="py-10 px-5 bg-slate-100">
      <div className="flex flex-col justify-center items-center text-center py-10">
        <h4 className="text-4xl text-slate-700 text-center font-bold pb-3">
          Buy Lottery Tickets Online
        </h4>
        <p className="text-lg text-gray-600 font-semibold capitalize">jackpot title</p>
        <p className="text-sm text-gray-500 w-full sm:w-2/3">jackpot description</p>
        <p className="text-sm font-medium text-black w-full sm:w-2/3">jackpot title</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 mb-6">
        <div className="flex justify-center items-center space-x-2">
          <button className="flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500 hover:bg-rose-600 font-semibold">
            Generate Lucky Number
          </button>
          <Link
            href={`/results/${0}`}
            className="flex flex-nowrap border py-2 px-4 rounded-full bg-[#0c2856] hover:bg-[#1a396c] cursor-pointer font-semibold text-white"
          >
            Draw Result
          </Link>
        </div>
      </div>
    </div>
  )
}

export default JackpotTable
