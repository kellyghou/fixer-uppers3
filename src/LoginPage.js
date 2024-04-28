import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword   } from "firebase/auth";
import * as firebaseui from 'firebaseui';
import { auth } from './index.js';

export function LoginPage() {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        
        const uiConfig = {
            callbacks: {
              signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
              },
              uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
              }
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInSuccessUrl: 'https://google.com',
            signInOptions: [
              // Leave the lines as is for the providers you want to offer your users.
            //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //   firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            //tosUrl: '<your-tos-url>',
            // Privacy policy url.
            //privacyPolicyUrl: '<your-privacy-policy-url>'
          };
          ui.start('#firebaseui-auth-container', uiConfig);
        }, []);

    return (
        <>
            <h1 className="text-center my-3 title">Login Page</h1>
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center">Loading form</div>
        </>
    )
}
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