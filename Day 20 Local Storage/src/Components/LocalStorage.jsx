import React from 'react'

export default function LocalStorage() {


    localStorage.setItem("Name", "Rutul Kakadiya")

    localStorage.removeItem("Name")

    let obj = {Name : "Rutul Kakadiya" , Subject : "IT"}

    localStorage.setItem("MyObj" , JSON.stringify(obj));
    
    let objData = JSON.parse(localStorage.getItem("MyObj"))

    let obj1 = {Name : "Ayush Ramoliya" , Subject : "Account"}

    localStorage.setItem("MyObj1" , JSON.stringify(obj1))

    let objData1 = JSON.parse(localStorage.getItem("MyObj1"))


    let object = {age : "18" , blood_group : "A+"}

    localStorage.setItem("Data" , JSON.stringify(object))

    let data1 = JSON.parse(localStorage.getItem("Data"))
    console.log(data1);
    

    console.log(objData)            
    return (
        <div>
            <p>{objData.Name}</p>
            <p>{objData1.Subject}</p>
        </div>
    )
}
