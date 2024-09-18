import React, { useState } from 'react'

export default function FormValidation() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [category, setCategory] = useState("")
    const [categoryData, setCategoryData] = useState("")
    const [allData, setAllData] = useState([])

    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")

    const [upperCaseColor, setUpperCaseColor] = useState("red");
    const [lowerCaseColor, setLowerCaseColor] = useState("red");
    const [specialCaseColor, setSpecialCaseColor] = useState("red");

    const handlePasswordChange = (e) => {

        const upperCaseRegex = /[A-Z]/
        const lowerCaseRegex = /[a-z]/
        const specialCaseRegex = /[^A-Za-z0-9]/

        const newpass = e.target.value
        setPassword(newpass)

        setUpperCaseColor(upperCaseRegex.test(newpass) ? "green" : "red")
        setLowerCaseColor(lowerCaseRegex.test(newpass) ? "green" : "red")
        setSpecialCaseColor(specialCaseRegex.test(newpass) ? "green" : "red")

    }

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
        if (!password) {
            setPasswordErr("*Password required")
        }
        else {
            setPasswordErr("")
        }

        const Data = { name, email, password , categoryData }

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
                    <input type="text" placeholder='Enter Password' value={password} onChange={handlePasswordChange} /><br />
                    <p className='error'>{passwordErr}</p><br />

                    <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Category</option>
                        <option value="trader">Trader</option>
                        <option value="manufacturer">Manufacturer</option>
                    </select>
                    
                    {
                        category == "trader" && <input className='input1' type="text" value={categoryData} onChange={(e) => setCategoryData(e.target.value)} placeholder="Enter trader details" />
                    }
                    {
                        category == "manufacturer" && <input type="text" value={categoryData} onChange={(e) => setCategoryData(e.target.value)} className='input1' placeholder="Enter manufacturer details" />
                    }

                    <p className='passErr' style={{ color: upperCaseColor, marginTop: "10px" }}>*Use at least one Lowercase alphabet for password</p>
                    <p className='passErr' style={{ color: lowerCaseColor }}>*Use at least one Uppercase alphabet for password</p>
                    <p className='passErr' style={{ color: specialCaseColor, marginBottom: "10px" }}>*Use at least one Special alphabet for password</p>
                    <input type="submit" className='btn' />
                </center>

                <center>
                    <table>
                        <thead>
                            <tr>
                                <th className='tableLine1'>No.</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Password</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allData.map((event, i) => {
                                    return (
                                        <tr>
                                            <td className='tableLine1'>{i + 1}</td>
                                            <td>{event.name}</td>
                                            <td>{event.email}</td>
                                            <td>{event.password}</td>
                                            <td>{event.categoryData}</td>

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
