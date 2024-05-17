import React from 'react'
import JackpotItem from './jackpots/Jackpot'

const Jackpot = ({ jackpots }) => {
  return (
    <div className="bg-slate-100 pt-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-800- py-5"> Lottery Jackpots</h1>
        <p className="text-center text-lg text-slate-600">
          We bring a persolan and effective to every project we work on. <br />
          Which is why our client love why they keep coming back.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ms:gap-4 lg:gap-3 py-10 w-4/5 mx-auto">
        {jackpots?.map((item) => (
          <JackpotItem jackpot={item} key={item.id}></JackpotItem>
        ))}
      </div>
    </div>
  )
}

export default Jackpot
