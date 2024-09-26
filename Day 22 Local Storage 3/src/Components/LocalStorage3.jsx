import React, { useEffect, useState } from 'react'

export default function LocalStorage3() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [nameErr, setNameErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");

    const [record, setRecord] = useState([]);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem("UserData")) || [];

        setRecord(saveData)
    }, []);

    const handleSubmit = () => {
        if (!name) {
            setNameErr("*Name required")
        }
        else {
            setNameErr("")
        }

        if (!password) {
            setPasswordErr("*Password required")
        }
        else {
            setPasswordErr("")
        }

        let user = { id: Date.now() , name, password }
        record.push(user)
        localStorage.setItem("UserData", JSON.stringify(record));

        const addedData = JSON.parse(localStorage.getItem("UserData"));
        setRecord(addedData)

        setName("1");
        setPassword("");
    }

    const handleDelete = (id)=>{
        const deleteData = record.filter((item) => item.id !== id)
        console.log(deleteData);
        
        setRecord(deleteData)
        localStorage.setItem("UserData" , JSON.stringify(deleteData))
    }

    return (

        <div>

            <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <p>{nameErr}</p> <br /><br />
            <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <p>{passwordErr}</p> <br /><br />
            <button onClick={handleSubmit}>Add Data</button>


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
                                        <td><button>Edit</button></td>
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
