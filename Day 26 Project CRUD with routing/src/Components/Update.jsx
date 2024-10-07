import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {
  
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [editIndex, setEditIndex] = useState("");

  const handleEdit = () => {
    let editData = data.find((item) => item.id == id);
    setName(editData.name);
    setSubject(editData.subject);
    setEditIndex(editData.id);
  }

  const handleUpdate = () => {
    if (editIndex) {
      const updatedData = data.map((item) => 
        item.id === editIndex ? { ...item, name, subject } : item
      );
      setData(updatedData);
      localStorage.setItem("data1", JSON.stringify(updatedData));
    }
    navigate("/");
  }

  return (
    <div className="update-container">
      <h1>Update Student Data</h1>
      <input 
        type="text" 
        placeholder="Enter ID" 
        className="update-input" 
        onChange={(e) => setId(e.target.value)} 
      />
      <button onClick={handleEdit} className="update-button">
        Edit
      </button>

      <input 
        type="text" 
        placeholder="Enter name" 
        className="update-input" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter subject" 
        className="update-input" 
        value={subject} 
        onChange={(e) => setSubject(e.target.value)} 
      />

      <button onClick={handleUpdate} className="update-button">
        Update
      </button>
    </div>
  );
}
