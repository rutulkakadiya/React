import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../features/TaskSlice';

export default function TaskManager() {
  const [task, setTaskName] = useState("");
  const [taskDes, setTaskDes] = useState("");
  const [taskManager, setTaskManager] = useState("");
  const [priority, setPriority] = useState("");
  const [image, setImage] = useState(null);
  const [editIndex, setEditIndex] = useState("");

  const count = useSelector((state) => state.taskKey);
  const dispatch = useDispatch();

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleImage = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setImage(imageUrl);
  };

  const addRecord = () => {
    if (editIndex === null) {
      dispatch(updateTask(editIndex));
      setEditIndex(null);
    } else {
      if (task && taskDes && taskManager) {
        dispatch(addTask({ id: Date.now(), task, taskDes, taskManager, priority, image }));

        setTaskName("");
        setTaskDes("");
        setTaskManager("");
        setPriority("");
        setImage("");
      } else {
        alert("Please fill all fields.");
      }
    }
  };

  const deleteRecord = (id) => {
    dispatch(deleteTask(id));
  };

  const editRecord = (id) => {
    const editData = count.task.find((item) => item.id === id);
    setTaskName(editData.task);
    setTaskDes(editData.taskDes);
    setTaskManager(editData.taskManager);
    setPriority(editData.priority);
    setImage(editData.image);
    setEditIndex(id);
  };

  return (
    <div className="task-manager-container">
      <h1 className="heading">Task Manager</h1>
      <input
        type="text"
        className="input-field"
        placeholder="Enter Task Name"
        onChange={(e) => setTaskName(e.target.value)}
        value={task}
      />
      <br /><br />
      <input
        type="text"
        className="input-field"
        placeholder="Enter Task Short Description"
        onChange={(e) => setTaskDes(e.target.value)}
        value={taskDes}
      />
      <br /><br />
      <input
        type="text"
        className="input-field"
        placeholder="Enter Task Manager Name"
        onChange={(e) => setTaskManager(e.target.value)}
        value={taskManager}
      />
      <br /><br />

      <label className="priority-label">Enter Task Priority:</label>
      <br />
      <div className="priority-options">
        <input type="radio" name="priority" value="High" onChange={handlePriorityChange} checked={priority === "High"} />
        <label className="priority-option">High</label>
        <input type="radio" name="priority" value="Medium" onChange={handlePriorityChange} checked={priority === "Medium"} />
        <label className="priority-option">Medium</label>
        <input type="radio" name="priority" value="Low" onChange={handlePriorityChange} checked={priority === "Low"} />
        <label className="priority-option">Low</label>
      </div>
      <br />

      <label className="image-label">Add Task Image:</label>
      <br />
      <input type="file" className="input-file" onChange={handleImage} />
      <br /><br />
      <button className="btn-submit" onClick={addRecord}>{editIndex ? "Update" : "Add"}</button>

      <div className="main-div">
        <div className="priority-section high-priority">
          <p>High</p>
          {count.task.map((e) => {
            return e.priority === "High" ? (

              <div className="div">
                <img className="task-image" src={e.image} alt="" />
                <p>Task: {e.task}</p>
                <p>Task Description: {e.taskDes}</p>
                <p>Task Manager Name: {e.taskManager}</p>
                <p>Task Priority: {e.priority}</p>

                <center>
                  <button className="btn-edit" onClick={() => editRecord(e.id)}>Edit</button>
                  <button className="btn-delete" onClick={() => deleteRecord(e.id)}>Delete</button>
                </center>
              </div>

            ) : null;
          })}
        </div>

        <div className="priority-section medium-priority">
          <p>Medium</p>
          {count.task.map((e) => {
            return e.priority === "Medium" ? (
              <div className="div">
                <img className="task-image" src={e.image} alt="" />
                <p>Task: {e.task}</p>
                <p>Task Description: {e.taskDes}</p>
                <p>Task Manager Name: {e.taskManager}</p>
                <p>Task Priority: {e.priority}</p>
                <center>
                  <button className="btn-edit" onClick={() => editRecord(e.id)}>Edit</button>
                  <button className="btn-delete" onClick={() => deleteRecord(e.id)}>Delete</button>
                </center>
              </div>
            ) : null;
          })}
        </div>

        <div className="priority-section low-priority">
          <p>Low</p>
          {count.task.map((e) => {
            return e.priority === "Low" ? (
              <div className="div">
                <img className="task-image" src={e.image} alt="" />
                <p>Task: {e.task}</p>
                <p>Task Description: {e.taskDes}</p>
                <p>Task Manager Name: {e.taskManager}</p>
                <p>Task Priority: {e.priority}</p>
                <center>
                  <button className="btn-edit" onClick={() => editRecord(e.id)}>Edit</button>
                  <button className="btn-delete" onClick={() => deleteRecord(e.id)}>Delete</button>
                </center>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
