import { useState } from "react";
import { auth } from "./Firebase";
import { Footer } from "./About.js";
import { NavBar } from "./NavBar.js";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword  } from "firebase/auth";
import 'firebaseui/dist/firebaseui.css'

export function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");

    const loginWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch {
            setNotice("You entered a wrong username or password.");
        }
    }

    return(
        <div>
            <NavBar/>
            <main>
                <Typography variant='h4' sx={{'& .MuiTypography-root.MuiTypography-h1' : {outline: 'black solid 1px'}, fontWeight: 500, marginTop: '9.5rem', display: 'block', textAlign: 'center', color: '#009999'}}>
                    Log in to Your EcoFriends Account
                </Typography>
                <div className = "container">
                    <div className = "row justify-content-center">
                        <form className = "col-md-4 mt-3 pt-3 pb-3">
                            { "" !== notice &&
                                <div className = "alert alert-warning" role = "alert">
                                    { notice }    
                                </div>
                            }                  
                            <div className = "form-floating mb-3">
                                <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                                <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label>
                            </div>
                            <div className = "form-floating mb-3">
                                <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                                <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                            </div>
                            <div className = "d-grid">
                                <button type = "submit" id = "login_button" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => loginWithUsernameAndPassword(e)}>Sign In</button>
                            </div>
                            <div className = "mt-3 text-center">
                                <span>Don't have an account? <Link to = "/signup">Click here.</Link></span>
                            </div>
                        </form>
                    </div>
                    <Typography variant='h4' sx={{'& .MuiTypography-root.MuiTypography-h1' : {outline: 'black solid 1px'}, marginTop: '9.5rem'}}></Typography>
                </div>
            </main>
            <Footer/>
        </div>
    )
}
//     useEffect(() => {
//         const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        
//         const uiConfig = {
//             callbacks: {
//               signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//                 // User successfully signed in.
//                 // Return type determines whether we continue the redirect automatically
//                 // or whether we leave that to developer to handle.
//                 return true;
//               },
//               uiShown: function() {
//                 // The widget is rendered.
//                 // Hide the loader.
//                 document.getElementById('loader').style.display = 'none';
//               }
//             },
//             // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//             signInFlow: 'popup',
//             signInSuccessUrl: '/authenticated',
//             signInOptions: [
//               // Leave the lines as is for the providers you want to offer your users.
//             //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//             //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//             //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//             //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
//               firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
//             ],
//             // Terms of service url.
//             //tosUrl: '<your-tos-url>',
//             // Privacy policy url.
//             //privacyPolicyUrl: '<your-privacy-policy-url>'
//           };
//           ui.start('#firebaseui-auth-container', uiConfig);
//         }, []);

//     return (
//         <>
//             <h1 className="text-center my-3 title">Login Page</h1>
//             <div id="firebaseui-auth-container"></div>
//             <div id="loader" className="text-center">Loading form</div>
//         </>
//     )

// Initialize the FirebaseUI Widget using Firebase.
//var ui = new firebaseui.auth.AuthUI(auth);



// The start method will wait until the DOM is loaded.


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });