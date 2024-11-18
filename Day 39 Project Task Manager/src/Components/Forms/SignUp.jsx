import React, { useState } from 'react'
import '../Forms/SignUp.css'
import { useNavigate } from 'react-router-dom'
import { auth, database } from '/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        if (!name || !email || !password) {
            toast.error("Enter all details");
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    const userUID = data.user.uid;
                    return setDoc(doc(database, "UserDetails", userUID), { name, email })
                })
            navigate("/signin")
        }

    }

    const navigate = useNavigate();
    const navigateSignIn = () => {
        navigate("/signin");
    }

    return (
        <div className='bg1 h-[100vh] flex justify-center items-center'>
            <div className="MainDiv w-[60%] flex h-[70vh]">
                <div className="div1 w-[50%] bg-[#B3A89C] flex items-center">
                    <div className="subDiv1">
                        <center>
                            <img className='animated-img h-[200px]' src="bg1.png" alt="" />
                            <p className='text-white text-3xl font-bold mt-3'>Welcome to Task Manager </p>
                            <p className='text-white w-[80%]'>To keep connected with us please login with your personal info</p>
                        </center>
                    </div>
                </div>

                <div className="div2 flex justify-center items-center w-[50%] bg-white">
                    <div className="subDiv2 w-[80%]">
                        <center>
                            <p className='text-3xl font-bold'>Create Account</p>
                        </center>
                        <br />
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='input1 h-[50px] w-[100%] px-2 text-black bg-[#eeeeee] rounded-[5px]' /><br /><br />
                        <input type="text" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} className='input1 h-[50px] w-[100%] px-2 text-black bg-[#eeeeee] rounded-[5px]' /><br /><br />
                        <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='input1 h-[50px] w-[100%] px-2 text-black bg-[#eeeeee] rounded-[5px]' /><br /><br />

                        <center>
                            <button className='h-[50px] w-[50%] bg-[#B3A89C] text-white rounded-[5px]' onClick={handleSignUp}>Sign Up</button>
                            <p className='mt-2 cursor-pointer' onClick={navigateSignIn}>Existing User? Log In</p>
                        </center>
                    </div>
                </div>

            </div>
            <ToastContainer/>
        </div>
    )
}
