import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const add =()=>{
    setCount(count+1)
  }
  const remove = ()=> setCount(count-1)
  if(count==-1){
    setCount(0)
    alert('Value is already 0')
  }

  return (
    <>
     <h1 className=''>Hello Naman</h1>
     <h2>Counter : {count}</h2>
       <button onClick={add}>ADD Counter {count}</button>
       <button onClick={remove}>SUB. Counter {count}</button>
    </>
  )
}

export default App
