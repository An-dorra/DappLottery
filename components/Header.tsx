import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const netWorking = ''
const bg = '../public/header-bg.jpg'
const Header = () => {
  return (
    <div
      className="px-5 md:px-40 bg-fixed bg-cover no-repeat"
      style={{ backgroundImage: `url('/header-bg.png')` }}
    >
      {/* nav */}
      <div className="flex items-center justify-between text-white py-5">
        <h1 className="text-4xl font-bold">DappLottery</h1>
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
      {/* adas */}
      <div className="flex items-center justify-between pb-2">
        <div>
          <div className="text-white py-5">
            <h2 className="text-4xl font-bold py-4">
              Take the chance to <br />
              change your life
            </h2>
            <p className="text-xl">
              We bring a persolan and effective to every project we work on. <br />
              Which is why our client love why they keep coming back.
            </p>
          </div>
        </div>
        <div className="px-20 py-10 scale-100 hidden sm:block">
          <Image src="/header-icon.png" alt="netWorking" width={400} height={400} />
        </div>
      </div>
      <div className="pb-10">
        <Link
          href={'/create'}
          className="duration-200 ease-in bg-amber-500 hover:bg-rose-600 text-white rounded-md cursor-pointer font-semibold py-3 px-5"
        >
          Create Jackpot
        </Link>
      </div>
    </div>
  )
}

export default Header
