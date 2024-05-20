import React from 'react'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  return (
    <div
      className="px-5 md:px-40 bg-fixed bg-cover no-repeat h-20 "
      style={{ backgroundImage: `url('/header-bg.png')` }}
    >
      <div className="flex items-center justify-between text-white py-5">
        <h1
          className="text-4xl font-bold cursor-pointer"
          onClick={() => {
            router.push('/')
          }}
        >
          DappLottery
        </h1>
        <div className="hidden lg:flex item-center font-semibold cursor-pointer">
          <p className="mx-8">Home</p>
          <p className="mx-8">How To Play</p>
          <p className="mx-8">All Lottery</p>
          <p className="mx-8">Contact</p>
        </div>
        <button className="ease-in duration-200 w-40 flex justify-center flex-nowrap border py-2 px-4 rounded-full bg-amber-500 hover:bg-rose-600 cursor-pointer font-semibold text-sm">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Navbar
