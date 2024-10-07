import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {

  const [id, setId] = useState("");
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [editIndex, seteditIndex] = useState("");

  const handleEdit = () => {
    let editData = data.find((item) => item.id == id)
    setName(editData.name)
    setSubject(editData.subject)
    seteditIndex(editData.id)
  }

  const handleUpdate = () => {

    if (editIndex) {
      const updatedData = data.map((item) => item.id === editIndex ? { ...item, name, subject } : item)

      setData(updatedData)
      localStorage.setItem("data1", JSON.stringify(updatedData));
    }
    navigate("/");
  }

  return (
    <div>

      <input type="text" placeholder='Enter ID' onChange={(e) => setId(e.target.value)} />
      <button onClick={handleEdit}>Edit</button>


      <input type="text" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder='Enter subject' value={subject} onChange={(e) => setSubject(e.target.value)} />

      <button onClick={handleUpdate}>Update</button>

    </div>
  )
}
