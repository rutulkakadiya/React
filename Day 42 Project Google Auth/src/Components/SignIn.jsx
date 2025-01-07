import React, { useState } from 'react';
import { setDoc, doc } from 'firebase/firestore';
import { db, auth, googleProvider } from '../../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      alert('Please fill all details.');
    } else {
      await setDoc(doc(db, 'users', email), { email, password });
      alert('User signed in successfully!');
      navigate('/dashboard');
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await setDoc(doc(db, 'users', user.email), {
      email: user.email,
      displayName: user.displayName,
    });   

    alert(`Welcome, ${user.displayName}!`);
    navigate('/dashboard');
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign In</h1>
      <input
        className="signin-input"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signin-input"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signin-button" onClick={handleSignIn}>
        Sign In
      </button>
      <p className="google-signin" style={{display: "flex", alignItems: "center"}} onClick={handleGoogleSignIn}>
      <FaGoogle/>        
        <p style={{marginLeft: "5px"}}>Sign In with Google</p>
      </p>
    </div>
  );
}
