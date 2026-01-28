import React from 'react'
import Card from './components/card'
import './index.css'

const App = () => {

  let myObj = {
    username: "hello",
    age: 20
  }

  let myObj2 = {
    username: "jiii",
    age: 21
  }

  let nyarr = [1,2,3,4,5]

   let nyarr2 = [1,2,5]
  return (
    <>
    <h1 className="text-red-400">hello</h1>
    <Card name="gaurav" obj={myObj} arr={nyarr}/>
    <Card name="negi" obj={myObj2} arr={nyarr2}/>
    </>
  )
}

export default App
