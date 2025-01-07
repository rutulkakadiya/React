import React, { useEffect, useState } from 'react'

export default function LocalStorage2() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [record, setRecord] = useState([]);


  useEffect(() => {

    let user = JSON.parse(localStorage.getItem("data"))  || [];
    setRecord(user)
  }, [record])

  const AddData = () => {
    let Data = { id: Date.now(), name, email, password }
    console.log(Data);
    
    record.push(Data)
    localStorage.setItem("data", JSON.stringify(record));
  }

  return (
    <div className='flex justify-center items-center'>
      <div className="todoList py-[30px]">
        <center>
          <p className='text-2xl font-bold'>To Do List</p>
          <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Enter E-mail' onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
          <button className='h-[45px] w-[80%] bg-green-900 text-white rounded-[10px] mt-[15px]' onClick={AddData}>Add Data</button>
        </center>

        <table>
          <thead>
            <tr>
              <td>No.</td>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
            </tr>
          </thead>

          <tbody>
            {
              record.map((e,i)=>{
                return(
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>


    </div>
  )
}
