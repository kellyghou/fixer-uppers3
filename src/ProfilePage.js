import { useNavigate } from "react-router-dom";
import { auth, db } from "./Firebase.js";
import { signOut } from "firebase/auth";
import { Card, CardMedia, CardContent, Typography, CardActionArea, Modal, Tooltip, Button} from '@mui/material';
// import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavBar } from "./NavBar.js";
import VideosList from './VideoCards.js';



export function ProfilePage() {
    const navigate = useNavigate();
    

    

    const logoutUser = async (e) => {
        e.preventDefault();

        await signOut(auth);
        navigate("/");
    }

    const [videoData, setVideoData] = useState([]);
    const [alertMessage, setAlertMessage] = useState(null);
    const [isFetching, setIsFetching] = useState(true);
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const[user, setUser] = useState();
  
  
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
            setIsLoadingUser(false);
            navigate("/home");
        }
    });
      
    }, [])
  
  
    let render;

    let renderLogout;
    if (isLoadingUser) {
        renderLogout = <></>;
    } else {
        renderLogout = <Button onClick={logoutUser}>Logout</Button>
    }
    if (isFetching) {
      render = (
        <>
          <p>Loading saved videos...</p>
          {alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {alertMessage}</p>}
        </>
      );
    } else {
      render = <VideosList categoriesQuerySnapshot={videoData} user={user}/>;
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