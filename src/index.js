import React from 'react'
import ReactDOM from 'react-dom/client'
import { useReducer } from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import Todos from './Todos'
import './CSS/stylesheet.css'
import Car from './Car.js'

function MyFirstElement() {
  return <h1>Hello React!</h1>
}

function Numbers() {
  const numbersOne = [1, 2, 3]
  const numbersTwo = [4, 5, 6]
  const numbersCombined = [...numbersOne, ...numbersTwo]
  return numbersCombined
}

function Car1(props) {
  return (
    <h2 style={{ backgroundColor: 'lightblue' }}>
      Hi, I am a {props.brand.model}
    </h2>
  )
}

function Garage() {
  const Car1Info = { name: 'Mazda', model: 'Axela' }
  return (
    <>
      <h1 style={{ color: 'red' }}>Who lives in my Garage?</h1>
      <Car1 brand={Car1Info} />
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

// lists, inline CSS
function Main(props) {
  const dishes = [
    'Black Bean soup',
    'Macaroni and Cheese',
    'Salmon and Potatoes',
  ]
  const [checked, setChecked] = useReducer((checked) => !checked, false)

  const myStyle = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Sans-Serif',
  }

  return (
    <section>
      <img
        src="./pexels-dmitriy-piskarev-8894884.jpg"
        height={400}
        alt="restuarnat"
      />
      <ul style={myStyle}>
        {dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
      <input type="checkbox" value={checked} onChange={setChecked} />

      <label>{checked ? 'checked' : 'not checked'}</label>
    </section>
  )
}

// Forms
function Forms() {
  const txtTitle = useRef()
  const hexColor = useRef()
  const submit = (e) => {
    e.preventDefault()
    const title = txtTitle.current.value
    const color = hexColor.current.value
    alert(`${title}, ${color}`)
    txtTitle.current.value = ''
    hexColor.current.value = ''
  }

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title"></input>
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  )
}

function GithubUser({ name, location }) {
  return (
    <div>
      <h1 style={{ color: 'red' }}>{name}</h1>
      <p>{location}</p>
    </div>
  )
}

function Hooks() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/mishobo')
      .then((response) => response.json())
      .then(setData)
  }, [])

  if (data) return <GithubUser name={data.name} location={data.location} />

  return <h1 style={{ color: 'red' }}>Data</h1>
}

// ROUTING
export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const TodoList = () => {
  const [count, setCount] = useState(0)
  const [todos] = useState(['todo 1', 'todo 2'])

  const increment = () => {
    setCount((c) => c + 1)
  }

  return (
    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
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
      <Forms />
      <Hooks />
      <Routing />
      <TodoList />
      <Car />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
