export const getJackpotData = (n) => {
  const dataList = []

  for (let i = 0; i < n; i++) {
    const id = i.toString()
    const title = `Lottery ${id}`
    const description = `This is the ${i} lottery`
    const owner = generateRandomEthereumAddress()
    const price = getRandomFloat(10, 100).toFixed(2)
    const ticketPrice = getRandomFloat(0.01, 0.1).toFixed(2)
    const image = 'https://www.artnews.com/wp-content/uploads/2022/01/unnamed-2.png?w=631'
    const createdAt = getRandomTimestamp(
      new Date('2024-01-01').getTime(),
      new Date('2024-12-31').getTime()
    )
    const expiresIn = getRandomInt(7, 30)
    const expiresAt = new Date(Date.now() + expiresIn * 24 * 60 * 60 * 1000).getTime()
    const participants = getRandomInt(10, 100)
    const draw = false

    dataList.push({
      id,
      title,
      description,
      owner,
      price,
      ticketPrice,
      image,
      createdAt,
      expiresAt,
      participants,
      draw,
    })
  }

  return dataList
}

const generateRandomEthereumAddress = () => {
  const hexChars = '0123456789abcdef'
  let address = '0x'
  for (let i = 0; i < 40; i++) {
    address += hexChars.charAt(Math.floor(Math.random() * hexChars.length))
  }
  return address
}

const getRandomFloat = (min, max) => {
  return Math.random() * (max - min) + min
}
const getRandomTimestamp = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
