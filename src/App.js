import React from 'react'
import Foot from './Component/Foot'
import Land from './Component/Land'
import Header from './Component/Header'
import { useState, useEffect } from 'react'

export default function App() {
  
  const[data,setData] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3000/posts').then((response) => response.json())
    .then((data)=>setData(data))
  },[])
  return (
    <div>
      <Header/>
      <Land />
      <Foot data={data}/>
    </div>
  )
}
