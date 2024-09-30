import React, { useEffect, useState } from 'react';

export default function TaskManager() {
  const [task, setTask] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedData = record.map((t) =>
        t.id === editIndex ? { ...t, task } : t
      );
      setRecord(updatedData);
      localStorage.setItem("Task", JSON.stringify(updatedData));
      setEditIndex(null);
      setTask("");
    } else {
      const newTask = { id: Date.now(), task, status: "Pending", color: "red" };
      const updatedTasks = [...record, newTask];
      setRecord(updatedTasks);
      localStorage.setItem("Task", JSON.stringify(updatedTasks));
      setTask("");
    }
  };

  useEffect(() => {

    const savedData = JSON.parse(localStorage.getItem("Task"));
    if (Array.isArray(savedData)) {
      setRecord(savedData);
    }

  }, []);

  const editTask = (id) => {
    const editData = record.find((t) => t.id === id);
    if (editData) {
      setTask(editData.task);
      setEditIndex(id);
    }
  };

  const deleteTask = (id) => {
    const deleteData = record.filter((t) => t.id !== id);
    setRecord(deleteData);
    localStorage.setItem("Task", JSON.stringify(deleteData));
  };

  const completeTask = (id) => {
    const updatedTasks = record.map((t) =>
      t.id === id ? { ...t, status: "Complete", color: "green" } : t
    );
    setRecord(updatedTasks);
    localStorage.setItem("Task", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
      <div className="taskManager w-[80%] p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-6">Task Manager</h1>

        <center>
          <input
            type="text"
            className="h-[35px] border border-gray-300 w-[50%] p-2 rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter Task"
          />
        </center>
        <br />
        <center>
          <button
            className="btn1 bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded-lg mt-4 transition-all duration-300"
            onClick={handleSubmit}
          >
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </center>

        <table className="w-full mt-8 text-left border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <td className="p-4 font-semibold">No.</td>
              <td className="p-4 font-semibold">Task</td>
              <td className="p-4 font-semibold">Status</td>
              <td className="p-4 font-semibold">Action</td>
            </tr>
          </thead>
          <tbody>
            {record.map((e, i) => (
              <tr key={e.id} className="odd:bg-gray-100 even:bg-gray-200">
                <td className="p-4">{i + 1}</td>
                <td className="p-4">{e.task}</td>
                <td className="p-4" style={{ color: e.color }}>{e.status}</td>
                <td className="p-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-lg mr-2"
                    onClick={() => editTask(e.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-lg mr-2"
                    onClick={() => deleteTask(e.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded-lg"
                    onClick={() => completeTask(e.id)}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
