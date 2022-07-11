import React from 'react'
import ReactDOM from 'react-dom/client'

const myFirstElement = <h1>Hello React!</h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myFirstElement)

const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]
const numbersCombined = [...numbersOne, ...numbersTwo]

const root1 = ReactDOM.createRoot(document.getElementById('root1'))
root1.render(numbersCombined)

function Car(props) {
  return <h2>Hi, I am a {props.brand.model}</h2>
}

function Garage() {
  const carInfo = { name: 'Mazda', model: 'Axela' }
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand={carInfo} />
    </>
  )
}

const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(<Garage />)

function Football() {
  const shoot = () => {
    alert('Great Shot!')
  }
  return <button onClick={shoot}>Take the shot!</button>
}

const root3 = ReactDOM.createRoot(document.getElementById('root3'))
root3.render(<Football />)
