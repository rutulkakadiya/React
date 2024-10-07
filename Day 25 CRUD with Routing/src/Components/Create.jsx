import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Create({ data, setData }) {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")


  const handleSubmit = () => {
    let obj = { id: data.length + 1, name: name, subject: subject }
    const updatedData = [...data, obj];
    setData(updatedData)

    localStorage.setItem("data1", JSON.stringify(updatedData));
    navigate("/")
  }

  return (
    <div>
      <h1>Create</h1>
      <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter subject' onChange={(e) => setSubject(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
