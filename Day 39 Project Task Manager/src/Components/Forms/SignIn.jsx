import React, { useState } from 'react'
import '../Forms/SignIn.css'
import { useNavigate } from 'react-router-dom'
import { auth, database } from '/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function SignUp() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("Please fill all mandatory fields.");
        }
        else {
            try {
                const verifyUser = await signInWithEmailAndPassword(auth, email, password)
                const user = verifyUser.user;
                // getDoc(doc(database, "UserDetails",user.uid))
                // .then((data)=>{
                //     console.log(data.data());
                    
                // })
                
                toast.success("User Login Successfully.");
                
                setTimeout(() => {
                    navigate("/taskmanager");
                }, 1000);
            }
            catch (error) {
                toast.error("Data not found", error);

            }
        }
    }

    const navigate = useNavigate();
    const navigateSignUp = () => {
        navigate("/");
    }



    return (
        <div className='bg2 h-[100vh] flex justify-center items-center'>
            <div className="MAINdiv w-[60%] flex h-[70vh]">
                <div className="div1 w-[50%] bg-[#B3A89C] flex items-center">
                    <div className="subDiv1">
                        <center>
                            <img className='animated-img h-[250px]' src="bg3.png" alt="" />
                            <p className='text-white text-3xl font-bold mt-3'>Welcome to Task Manager </p>
                            <p className='text-white w-[80%]'>To keep connected with us please login with your personal info</p>
                        </center>
                    </div>
                </div>

                <div className="div2 flex justify-center items-center w-[50%] bg-white">
                    <div className="subDiv2 w-[80%]">
                        <center>
                            <p className='text-3xl font-bold'>Login</p>
                        </center>
                        <br />
                        <input type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} className='input1 h-[50px] w-[100%] px-2 text-black bg-[#eeeeee] rounded-[5px]' /><br /><br />
                        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='input1 h-[50px] w-[100%] px-2 text-black bg-[#eeeeee] rounded-[5px]' /><br /><br />

                        <center>
                            <button className='h-[50px] w-[50%] bg-[#B3A89C] text-white rounded-[5px]' onClick={handleLogin}>Login</button>
                            <p className='mt-2 cursor-pointer' onClick={navigateSignUp}>don`t have an account? Sign Up</p>
                        </center>
                    </div>
                </div>

            </div>
            <ToastContainer/>
        </div>
    )
}
