import React, { useState } from "react";
import { auth, db } from "./Firebase.js";
import { doc, setDoc } from "firebase/firestore";
import { Footer } from './About.js';
import { NavBar } from "./NavBar.js";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                createUserWithEmailAndPassword(auth, email, password)
                .then(function () {
                    return auth.currentUser.uid;
                    // console.log(auth.currentUser.uid);
                }).then(function (uid) {
                    setDoc(doc(db, "userData", uid, "savedVideos", "exists"), {
                    exists: "true"
                    });
                    
                })
                .catch(function (error) {
                    console.log(error) // FIX ERROR HANDLING!!!!!!!!!!!!!! DELETE USER IF COULDNT MAKE DOC
                });;
                navigate("/profile");
            } catch { //HAVENT TESTED THIS YET !!!!!!!!!!!!!!!!!!!!!!!!
                deleteUser(auth.currentUser).then(() => {
                    // User deleted.
                  }).catch((error) => {
                    console.log(error);
                  });
                setNotice("Sorry, something went wrong. Please try again.");
            } 
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    return(
        <div>
            <NavBar/>
            <main>
                <div className = "container">
                    <div className = "row justify-content-center">
                        <form className = "col-md-4 mt-3 pt-3 pb-3">
                            { "" !== notice &&
                                <div className = "alert alert-warning" role = "alert">
                                    { notice }    
                                </div>
                            }
                            <div className = "form-floating mb-3">
                                <input id = "signupEmail" type = "email" className = "form-control" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                                <label htmlFor = "signupEmail" className = "form-label">Enter an email address for your username</label>
                            </div>
                            <div className = "form-floating mb-3">
                                <input id = "signupPassword" type = "password" className = "form-control" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                                <label htmlFor = "signupPassword" className = "form-label">Password</label>
                            </div>
                            <div className = "form-floating mb-3">
                                <input id = "confirmPassword" type = "password" className = "form-control" placeholder = "Confirm Password" value = { confirmPassword } onChange = { (e) => setConfirmPassword(e.target.value) }></input>
                                <label htmlFor = "confirmPassword" className = "form-label">Confirm Password</label>
                            </div>                    
                            <div className = "d-grid">
                                <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => signupWithUsernameAndPassword(e)}>Signup</button>
                            </div>
                            <div className = "mt-3 text-center">
                                <span>Go back to login? <Link to = "/">Click here.</Link></span>
                            </div>                    
                        </form>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}