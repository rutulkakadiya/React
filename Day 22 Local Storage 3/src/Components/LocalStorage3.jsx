import React, { useEffect, useState } from 'react'

export default function LocalStorage() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [record, setRecord] = useState([]);
    const [ediIndex, setediIndex] = useState(null);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem("UserData")) || [];

        setRecord(saveData)
    }, []);

    const handleSubmit = () => {

        if (ediIndex) {
            const updateData = record.map((item) =>
                item.id === ediIndex ? { ...item, name, password } : item)

            setRecord(updateData)

            localStorage.setItem("UserData", JSON.stringify(updateData));

        } else {
            let user = { id: Date.now(), name, password }
            record.push(user)
            localStorage.setItem("UserData", JSON.stringify(record));

            const addedData = JSON.parse(localStorage.getItem("UserData"));
            setRecord(addedData)

            setName("");
            setPassword("");
        }
    }

    const handleDelete = (id) => {
        const deleteData = record.filter((item) => item.id !== id)
        console.log(deleteData);

        setRecord(deleteData)
        localStorage.setItem("UserData", JSON.stringify(deleteData))
    }

    const handleEdit = (id) => {
        const editData = record.find((item) => item.id == id)

        setName(editData.name)
        setPassword(editData.password)
        setediIndex(id)
    }

    return (

        <div>

            <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br /><br />
            <button onClick={handleSubmit}>{ediIndex ? "Update" : "Add Data"}</button>


            <div>

                <table>
                    <thead>
                        <tr>
                            <td>No.</td>
                            <td>Name</td>
                            <td>Password</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    {
                        record.map((e, i) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.password}</td>
                                        <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                                        <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                                    </tr>
                                </tbody>
                            )
                        })

                    }
                </table>
            </div>
        </div>
    )
}
