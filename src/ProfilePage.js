import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase.js";
import { signOut, deleteUser } from "firebase/auth";
import {Typography, Modal, Button} from '@mui/material';
// import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { doc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { NavBar } from "./NavBar.js";
import VideosList from './VideoCards.js';
import { ProfileWelcome } from './WelcomeComponents.js';



export function ProfilePage() {
    

    const [videoData, setVideoData] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const[user, setUser] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [password, setPassword] = useState("");
    const [notice, setNotice] = useState("");
  
    const navigate = useNavigate();

    let render;

    let renderLogout;

    
    useEffect(() => {
      setIsFetching(true);
      setIsLoadingUser(true);
      onAuthStateChanged(auth, (user) => {
        if (user) {
            // if (isSaved(uid)) {
                
            // } else {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const saveVideoRef = doc(db, "userData", uid, "savedVideos", props.data.id);
            //     setDoc(saveVideoRef, { location: props.data.location }, { merge: true });
            // }
            // setUser(user);
            // setIsLoading(false);
            setIsLoadingUser(false);
            const saveVideoCollectionRef = collection(db, "userData", user.uid, "savedVideos");
            getDocs(saveVideoCollectionRef)
                .then(function(snapshot) {
                return snapshot.docs;
                })
                .then(function(docsArray) {
                setVideoData(docsArray);
                })
                .catch((error) => {
                setAlertMessage(error.message);
                })
                .then(() => {
                setIsFetching(false);
                })
            setUser(user);
        // ...
        } else {
            render = <Typography>You need to sign in to view your profile</Typography>
            renderLogout = <></>
            setIsLoadingUser(false);
            setIsFetching(false);
        }
    });
      
    }, [])

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    const promptForCredentials = async (e) => {
        e.preventDefault();
        try {
            const credential = EmailAuthProvider.credential(
                auth.currentUser.email,
                password
            );

            await reauthenticateWithCredential(
                auth.currentUser, 
                credential
            );

            setOpen(false);
        } catch {
            setNotice("Something went wrong with reauthenticating credentials.");
        } 
        //credential = auth.getCredential("user@example.com", "password1234");
    }


    



    const deleteAccount = async (e) => {
        e.preventDefault();

        deleteUser(user)
        .then(() => {
            const userDataRef = doc(db, "userData", user.uid);
            deleteDoc(userDataRef)
          })
          .then(() => {
            console.log("deleted")
            // navigate("/");
          })
          .catch((error) => {
            // console.log(error.prototype.toString());
            // console.log(error instanceof FirebaseAuthRecentLoginRequiredException)
            if (error.toString().includes('auth/requires-recent-login')) {
                setOpen(true);
            } else {
                console.log(error);
            }
          })
    }
  
  
    
    if (isLoadingUser) {
        renderLogout = <></>;
    } else {
        renderLogout = <Button variant="contained" onClick={logoutUser} sx={{right: '1rem', position: 'absolute', top: '7rem'}}>Logout</Button>
    }
    if (isFetching) {
      render = (
        <>
          <p>Loading saved videos...</p>
          {alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {alertMessage}</p>}
        </>
      );
    } else {
      render = (<>
        <ProfileWelcome username={user.email}/>
        <VideosList categoriesQuerySnapshot={videoData} user={user}/>
        {/* <Button onClick={deleteAccount}>Delete Account</Button> */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/* <Box sx={style}> */}
                <div className = "row justify-content-center">
                    <form className = "col-md-4 mt-3 pt-3 pb-3">
                        { "" !== notice &&
                            <div className = "alert alert-warning" role = "alert">
                                { notice }    
                            </div>
                        }                  
                        <div className = "form-floating mb-3">
                            <span>Please reauthenticate your credentials before deleting your accoung:</span>
                            {/* <input type = "email" className = "form-control" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "name@example.com" value = { email } onChange = { (e) => setEmail(e.target.value) }></input>
                            <label htmlFor = "exampleInputEmail1" className = "form-label">Email address</label> */}
                        </div>
                        <div className = "form-floating mb-3">
                            <input type = "password" className = "form-control" id = "exampleInputPassword1" placeholder = "Password" value = { password } onChange = { (e) => setPassword(e.target.value) }></input>
                            <label htmlFor = "exampleInputPassword1" className = "form-label">Password</label>
                        </div>
                        <div className = "d-grid">
                            <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => promptForCredentials(e)}>Submit</button>
                        </div>
                    </form>
                </div>
            {/* </Box> */}
        </Modal>
      </>);
    }

    

    return(
        // <div className = "container">
        //     <div className = "row justify-content-center">
        //         <div className = "col-md-4 text-center">
        //             <p>Welcome <em className = "text-decoration-underline">{ user.email }</em>. You are logged in!</p>
        //             <div className = "d-grid gap-2">
        //                 <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => logoutUser(e)}>Logout</button>
        //             </div>                
        //         </div>
        //     </div>
        // </div>     
        <>
            <NavBar />
            {renderLogout}
            {render}
        </>  
    )    
}