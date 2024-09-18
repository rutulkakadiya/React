import React, { useEffect, useRef, useState } from 'react'

export default function Form() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([])

  const emailInput = useRef(null)

  useEffect(() => {
    emailInput.current.focus()
  }, [])

  const addData = (e) => {
    e.preventDefault();
    const newEntry = { email, password }

    setAllEntry([...allEntry, newEntry])
    console.log(allEntry);
  }

  return (
    <div className='div1'>
      <div className="form">

        <div className="txt">
          <center>
            <h1>Login Form</h1>

            <form action="" onSubmit={addData}>
              <input type="email" placeholder='Enter Email' ref={emailInput} className='input1' value={email} onChange={(e) => setEmail(e.target.value)} /> <br /><br />
              <input type="password" placeholder='Enter Password' className='input1' value={password} onChange={(e) => setPassword(e.target.value)} />
              <br /><br />
              <button className='btn1'>Submit</button>
            </form>

          </center>

        </div>
        <div className='form_data'>

          {
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>E-mail</th>
                  <th>Password</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  
                  allEntry.map((data, i) => {
                    return (
                      <tr>
                        <td><center>{i + 1}</center></td>
                        <td><center>{data.email}</center></td>
                        <td><center>{data.password}</center></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  )
}
