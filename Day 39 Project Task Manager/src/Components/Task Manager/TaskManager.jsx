import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import AddTask from './AddTask';
import Nav from './Nav';
import './TaskManager.css'

export default function TaskManager() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="addtask" element={<AddTask />} />
      </Routes>
    </div>
  );
}
