import React, { useEffect, useState } from 'react';
import { database, auth } from '/firebaseConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from "firebase/auth"; 

export default function AddTask() {
    const location = useLocation();
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [priority, setPriority] = useState("");
    const [taskAssignTo, setTaskAssignTo] = useState("");
    const [category, setCategory] = useState("");
    const [email, setEmail] = useState(""); 

    const editTask = location.state ? location.state.task : null;

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email); 
            } else {
                setEmail("");
            }
        });
        return () => unsubscribe(); 
    }, []);

    useEffect(() => {
        if (editTask) {
            setTask(editTask.task);
            setDescription(editTask.description);
            setDate(editTask.date);
            setStatus(editTask.status);
            setPriority(editTask.priority);
            setTaskAssignTo(editTask.taskAssignTo);
            setCategory(editTask.category);
        }
    }, [editTask]);

    const navigate = useNavigate();

    const addData = async () => {
       

        const taskData = {
            task,
            description,
            date,
            status,
            priority,
            taskAssignTo,
            category,
            email, 
        };

        if (editTask) {
            await updateDoc(doc(database, "TaskDetails", location.state.task.docId), taskData);
        } else {
            await addDoc(collection(database, "TaskDetails"), taskData);
        }

        navigate("/taskmanager/home");
    };

    return (
        <div className="add-task-container">
            <div className="form-container">
                <div className="form">
                    <h2>{editTask ? "Update Task" : "Add Task"}</h2>

                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter Task Name"
                        className="input-field"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Task Description"
                        className="input-field"
                    ></textarea>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="input-field"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="input-field"
                    >
                        <option value="">Status</option>
                        <option value="pending">Pending</option>
                        <option value="ongoing">On Going</option>
                        <option value="complete">Complete</option>
                    </select>

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="input-field"
                    >
                        <option value="">Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <input
                        type="text"
                        value={taskAssignTo}
                        onChange={(e) => setTaskAssignTo(e.target.value)}
                        placeholder="Assign Task To"
                        className="input-field"
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="input-field"
                    >
                        <option value="">Category</option>
                        <option value="marketing">Marketing</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="it">IT</option>
                        <option value="finance">Finance</option>
                        <option value="study">Study</option>
                        <option value="fitness">Fitness</option>
                    </select>

                    <button
                        onClick={addData}
                        className="submit-btn"
                    >
                        {editTask ? "Update Task" : "Add Task"}
                    </button>
                </div>
            </div>
        </div>
    );
}
