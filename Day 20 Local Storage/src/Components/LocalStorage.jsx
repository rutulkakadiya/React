import React from 'react'

export default function LocalStorage() {


    localStorage.setItem("Name", "Rutul Kakadiya")

    localStorage.removeItem("Name")

    let obj = {"Name" : "Rutul Kakadiya" , "Subject" : "IT"}

    localStorage.setItem("MyObj" , JSON.stringify(obj));
    
    let objData = JSON.parse(localStorage.getItem("MyObj"))

    console.log(objData)            
    return (
        <div>
            <p>vc</p>
        </div>
    )
}
