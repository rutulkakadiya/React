import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create({ data, setData }) {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    let obj = { id: data.length + 1, name: name, subject: subject };
    const updatedData = [...data, obj];
    setData(updatedData);
    
    localStorage.setItem("data1", JSON.stringify(updatedData));
    navigate("/");
  };

  return (
    <div className="create-container">
      <h1 className="create-title">Add Student Data</h1>
      <input 
        type="text" 
        placeholder="Enter name" 
        className="create-input" 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Enter subject" 
        className="create-input" 
        onChange={(e) => setSubject(e.target.value)} 
      />
      <button onClick={handleSubmit} className="create-button">
        Submit
      </button>
    </div>
  );
}
