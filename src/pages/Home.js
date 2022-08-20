import { useState, useEffect } from 'react'

// Custom Hook// fetching data
const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <>
      <h1 style={{ color: 'red' }}>Home</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>
        })}
    </>
  )
}

export default Home
