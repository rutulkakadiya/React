import React, { useState } from 'react'

export default function FormValidation() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [allData, setAllData] = useState([])


    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")

    const [changePassColor, setChangePassColor] = useState("red")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setNameErr("*Name required")
        }
        else {
            setNameErr("")
        }

        if (!email) {
            setEmailErr("*Email required")
        }
        else {
            setEmailErr("")
        }
        const upperCaseRegex = /[A-Z]/
        const lowerCaseRegex = /[a-z]/
        if (!password) {
            setPasswordErr("*Password required")
        }
        else if (upperCaseRegex.test(password)) {
            setChangePassColor("green")
        }
         else if (lowerCaseRegex.test(password)) {
            setChangePassColor("green")
        }
        else {
            setPasswordErr("")
        }



        const Data = { name, email, password }

        setAllData([...allData, Data])

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <center>

                    <center><h1>Form Validation</h1></center>
                    <br />
                    <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
                    <p className='error'>{nameErr}</p><br />
                    <input type="text" placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    <p className='error'>{emailErr}</p><br />
                    <input type="text" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                    <p className='error'>{passwordErr}</p><br />

                    <p className='passErr' style={{ color: changePassColor }}>*Use at least one Lowercase alphabet for password</p>
                    <p className='passErr' style={{ color: changePassColor }}>*Use at least one Uppercase alphabet for password</p>
                    <p className='passErr' style={{ color: changePassColor }}>*Use at least one Special alphabet for password</p>
                    <input type="submit" className='btn' />
                </center>

                <center>
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>E-mail</th>
                                <th>Password</th>
                                <th>No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map((event, i) => {
                                    return (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{event.name}</td>
                                            <td>{event.email}</td>
                                            <td>{event.password}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </form>
        </div>
    )
}
