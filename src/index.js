import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'

function MyFirstElement() {
  return <h1>Hello React!</h1>
}

function Numbers() {
  const numbersOne = [1, 2, 3]
  const numbersTwo = [4, 5, 6]
  const numbersCombined = [...numbersOne, ...numbersTwo]
  return numbersCombined
}

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

function Football() {
  const shoot = (a, b) => {
    alert(b.type)
  }
  return (
    <>
      <br></br>
      <br></br>
      <button onClick={(event) => shoot('Goal', event)}>Take the shot!</button>
    </>
  )
}

function Main(props) {
  const dishes = [
    'Black Bean soup',
    'Macaroni and Cheese',
    'Salmon and Potatoes',
  ]

  const [checked, setChecked] = useState(false)
  return (
    <section>
      <img
        src="./pexels-dmitriy-piskarev-8894884.jpg"
        height={400}
        alt="restuarnat"
      />
      <ul>
        {dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />

      <label>{checked ? 'checked' : 'not checked'}</label>
    </section>
  )
}

function App() {
  return (
    <>
      <MyFirstElement />
      <Numbers />
      <Football />
      <Garage />
      <Main />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
