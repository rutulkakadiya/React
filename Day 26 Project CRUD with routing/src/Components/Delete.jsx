import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Delete({ data, setData }) {

  const [id, setId] = useState("");
  const navigate = useNavigate();
  
  const handleDelete = () => {
    let deleteItem = data.filter((item) => item.id !== id);

    setData(deleteItem);
    navigate("/");
    localStorage.setItem("data1", JSON.stringify(deleteItem));
  }

  return (
    <div className="delete-container">
      <h1>Delete Student Data</h1>
      <input 
        type="text" 
        placeholder="Enter ID" 
        className="delete-input"
        onChange={(e) => setId(e.target.value)} 
      />
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}
