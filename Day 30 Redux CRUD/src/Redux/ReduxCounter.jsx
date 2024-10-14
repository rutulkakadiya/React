import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../features/TodoSlice';

export default function ReduxCounter() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const dispatch = useDispatch();

  const count = useSelector((state) => state.todoKey);

  const addRecord = () => {
    if (editIndex == null) {
      dispatch(addData({ id: Date.now(), name, subject }));
      setName('');
      setSubject('');
    } else {
      dispatch(updateData({ id: editIndex, name, subject }));
      setEditIndex(null);
    }
  };

  const deleteRecord = (id) => {
    dispatch(deleteData(id));
  };

  const editRecord = (id) => {
    let singleData = count.students.find((item) => item.id == id);
    setName(singleData.name);
    setSubject(singleData.subject);
    setEditIndex(id);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Enter subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <br />
      <button onClick={addRecord}>{editIndex ? 'Update' : 'Add'}</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {count.students.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.subject}</td>
              <td>
                <button className="edit-btn" onClick={() => editRecord(e.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button className="delete-btn" onClick={() => deleteRecord(e.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
