import React, { useEffect, useState } from 'react';

export default function TaskManager() {
  const [task, SetTask] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (editIndex !== null) {

      const updatedData = record.map((Task) =>
        Task.id === editIndex ? { ...Task, task } : Task
      );

      setRecord(updatedData);
      localStorage.setItem("Task", JSON.stringify(updatedData));
      setEditIndex(null);
      SetTask("");
    } else {

      const newTask = { id: Date.now(), task, status: "Pending", color: "red" };
      const updatedTasks = [...record, newTask];

      setRecord(updatedTasks);
      localStorage.setItem("Task", JSON.stringify(updatedTasks));
      SetTask("");
    }
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Task")) || [];
    setRecord(savedData);
  }, []);

  const editTask = (id) => {
    const editData = record.find((Task) => Task.id === id);

    if (editData) {
      SetTask(editData.task);
      setEditIndex(id);
    }
  };

  const deleteTask = (id) => {
    const deleteData = record.filter((Task) => Task.id !== id);
    setRecord(deleteData)
    localStorage.setItem("Task", JSON.stringify(deleteData))
  }

  const completeTask = (id) => {
    const updatedTasks = record.map((Task) => Task.id == id ? { ...Task, status: "Complete", color: "green" } : Task);

    setRecord(updatedTasks);
    localStorage.setItem("Task", JSON.stringify(updatedTasks));

  }



  return (
    <div>
      <h1 className='text-3xl'>Task Manager</h1>

      <input
        type="text"
        className='h-[35px] border border-black w-[30%] mt-3'
        value={task}
        onChange={(e) => SetTask(e.target.value)}
        placeholder='Enter Task'
      />
      <br /><br />
      <button className='btn1' onClick={handleSubmit}>
        {editIndex !== null ? "Update" : "Submit"}
      </button>

      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>Task</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            record.map((e, i) => (
              <tr key={e.id}>
                <td>{i + 1}</td>
                <td>{e.task}</td>
                <td style={{ color: e.color }}>{e.status}</td>
                <td>
                  <button onClick={() => editTask(e.id)}>Edit</button>
                  <button onClick={() => deleteTask(e.id)}>Delete</button>
                  <button onClick={() => completeTask(e.id)}>Complete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
