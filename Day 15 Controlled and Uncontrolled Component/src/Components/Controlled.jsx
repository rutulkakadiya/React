import React, {useState} from 'react'

export default function Controlled() {
    const [name , setName] = useState('');
    const handelclick = (e) => {
        console.log(e.target.value);
        
    }

  return (
    <div>
        <h1>Controllled Component</h1>
        <input type="text"  placeholder='ENTER THE NAME' onChange={(e) => handelclick(e)}/>
    </div>
  )

}
