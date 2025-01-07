import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../firebaseConfig';

export default function Crud() {

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [taskRecord, setTaskRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const userCollection = collection(db, "Tasks")

  const createUser = async () => {

    if (editIndex == null) {
      let object = { task, priority }
      await addDoc(userCollection, object)
        .then(() => {
          setTaskRecord([...taskRecord, object])
        })
    }
    else {
      const updateData = doc(db, "Tasks", editIndex);
      await updateDoc(updateData, { task, priority })

      setTaskRecord(taskRecord.map(item=> item.docId == editIndex ? {...item, task , priority} : item))
    }

    setTask("");
    setPriority("");

  };

  const getUser = async () => {
    let newData = await getDocs(userCollection);
    setTaskRecord(newData.docs.map((doc) => ({ docId: doc.id, ...doc.data() })));
  }

  useEffect(() => {
    getUser();
  }, [])

  const deleteUser = async (id) => {
    console.log(id);

    const singleData = await deleteDoc(doc(db, "Tasks", id))
    getUser();
  }


  const editUser = async (id) => {
    let editData = taskRecord.find((item) => item.docId == id);
    setTask(editData.task);
    setPriority(editData.priority);
    setEditIndex(id);
  }

  return (
    <div>
      <center>

        <input type="text" style={{ marginTop: "150px" }} placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} /><br /><br />
        <input type="text" placeholder='Enter Priority' value={priority} onChange={(e) => setPriority(e.target.value)} /><br /><br />
        <button onClick={createUser}>{editIndex == null ? "Add" : "Update"}</button>

        {
          taskRecord.map((e, i) => {
            return <div key={e.docId}>
              <p>{e.task}</p>
              <p>{e.priority}</p>
              <button onClick={() => editUser(e.docId)}>Edit</button>
              <button onClick={() => deleteUser(e.docId)}>Delete</button>
            </div>
          })
        }
      </center>
    </div>
  )
}
