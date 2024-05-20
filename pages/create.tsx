import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
const create = () => {
  const router = useRouter()
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [ticketPrice, setTicketPrice] = useState('')
  const [image, setImage] = useState('')
  const [expiresAt, setExpiresAt] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    if (!title || !description || !price || !ticketPrice || !image || !expiresAt) return
    const params = {
      title,
      description,
      price,
      ticketPrice,
      image,
      expiresAt: new Date(expiresAt).getTime(),
    }
    console.log(params)

    resetHandle()

    router.push('/')
  }

  const resetHandle = () => {
    setPrice('')
    setDescription('')
    setTitle('')
    setTicketPrice('')
    setImage('')
    setExpiresAt('')
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-2xl font-bold text-slate-800 py-5">Create Jackpots</h1>
          <p className="text-center text-sm text-slate-600">
            We bring a persolan and effective to every project we work on. <br />
            Which is why our client love why they keep coming back.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="mb4 my-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Title"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb4 my-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Image url"
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="mb4 my-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Price"
            id="price"
            type="number"
            step={0.01}
            min={0.01}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb4 my-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ticketPrice"
            id="ticketPrice"
            type="number"
            step={0.01}
            min={0.01}
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb4 my-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="expiresAt"
            id="expiresAt"
            type="datetime-local"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
            required
          />
        </div>
        <div className="mb4 my-4">
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="w-full bg-[#0c2856] hover:bg-[#1a396c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Jackpot
          </button>
        </div>
      </form>
    </>
  )
}

export default create
