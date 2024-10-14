import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function ReduxCounter() {

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");

    const dispatch = useDispatch();

    const addRecord = () => {
        dispatch(addRecord({id: Date.now(), name ,subject }))
    }
    return (
        <div>
            <input type="text" placeholder='Enter name' onClick={(e) => setName()} /><br /><br />
            <input type="text" placeholder='Enter subject' onClick={(e) => setSubject()} />
            <br /><br />
            <button onClick={addRecord}>Add</button>
        </div>
    )
}
