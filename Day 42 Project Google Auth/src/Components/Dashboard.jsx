import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
    });
    return subscribe; 
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const fetchUser = () => {
    getDoc(doc(db, "users", user.email))
      .then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Dashboard</h1>
      {userData && (
        <div className="user-data">
          <p>
            <span>Name:</span> {userData.displayName}
          </p>
        </div>
      )}
    </div>
  );
}
