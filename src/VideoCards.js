import { Card, CardMedia, CardContent, Typography, CardActionArea, Modal, Tooltip} from '@mui/material';
// import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase.js";
import { doc, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function VideoCard(props) {  
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user = props.user;
    const key = props.identifier;
    const video = props.data;
    
    const [saved, setSaved] = useState();


    useEffect(() => {
        if (user) {
            const uid = user.uid;
            const isSavedRef = doc(db, "userData", uid, "savedVideos", key)
            getDoc(isSavedRef)
            .then(function(snapshot) {
                //console.log(`${uid}, ${key}, ${snapshot.exists()}`);
                setSaved(snapshot.exists());
            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            setSaved(false);
        }
      }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        width: '26rem',
        height: '36rem'
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
      };

    const saveVideo = (event) => {
        event.preventDefault();
        if (user) {
            const uid = user.uid;
            const saveVideoRef = doc(db, "userData", uid, "savedVideos", key);
            if (!saved) {
                setDoc(saveVideoRef, { categories: video.categories, title: video.title, location: video.location }, { merge: true });
                setSaved(true);
            } else {
                deleteDoc(saveVideoRef)
                .then(function() {
                    setSaved(false);
                })
            }
        } else {

        }
    }

    //   const ExpandMore = styled((props) => {
    //     const { expand, ...other } = props;
    //     return <IconButton {...other} />;
    //   })(({ theme, expand }) => ({
    //     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //       duration: theme.transitions.duration.shortest,
    //     }),
    //   }));
    
    // const [expanded, setExpanded] = useState(false);
    
    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
            <div className="col-12 col-lg-3 video-card-wrapper">
                <Card sx={{ width: "18rem", height: "28rem", position: 'relative'}}>
                    <CardActionArea onClick={handleOpen} sx={{backgroundColor: "black"}}>
                        <CardMedia component='video' src={props.data.location} sx={{height: "21rem"}}/>
                        <SmartDisplayIcon sx={{width: "5rem", height: "5rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography>{props.data.title}</Typography>
                        <Tooltip title={props.tooltip}>
                            {saved? <FavoriteIcon sx={{alignSelf: 'flex-end', color: 'red', position: 'absolute', right: '.5rem', bottom: '.5rem', marginLeft: 'auto', marginTop: 'auto'}} onClick={saveVideo}/> : <FavoriteBorderIcon  sx={{alignSelf: 'flex-end', position: 'absolute', right: '.5rem', bottom: '.5rem', marginLeft: 'auto', marginTop: 'auto'}}onClick={saveVideo} />}
                            {/* <FavoriteBorderIcon sx={{color: saved? 'red' : 'white'}} onClick={saveVideo}/> */}
                        </Tooltip>
                    </CardContent>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Card sx={style}>
                            <CardMedia component='video' src={props.data.location} controls autoPlay loop muted sx={{width: '100%', height: '32rem', display: 'block'}}/>
                            <CardContent sx={{backgroundColor: 'white', height: '5rem'}}>
                                <Typography>{props.data.title}</Typography>
                                {/* <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                        <ExpandMoreIcon />
                                </ExpandMore> */}
                            </CardContent>
                            {/* <Collapse in={expanded} timeout="auto" orientation="horizontal" unmountOnExit> */}
                                {/* <CardContent sx={{backgroundColor: 'white', width: "26rem"}}>
                                    <Typography>asdf;ajds;lfkjas;dlfkj</Typography> */}
                                {/* </CardContent> */}
                            {/* </Collapse> */}
                        </Card>
                    </Modal>
                </Card>
            </div>
    );
}

export default function VideosList(props) {
    const user = props.user;
    const categoryVideos = props.categoriesQuerySnapshot.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        console.log(data);
        if (doc.id === 'exists') {
            return;
        }
        return (<VideoCard identifier={doc.id} user={user} data={data} tooltip={user? "" : "You must sign-in to save"}/>);
    });
    // const [isLoading, setIsLoading] = useState(true);
    // const [user, setUser] = useState();
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // if (isSaved(uid)) {
                    
    //             // } else {
    //             //     // User is signed in, see docs for a list of available properties
    //             //     // https://firebase.google.com/docs/reference/js/auth.user
    //             //     const saveVideoRef = doc(db, "userData", uid, "savedVideos", props.data.id);
    //             //     setDoc(saveVideoRef, { location: props.data.location }, { merge: true });
    //             // }
    //             setUser(user);
    //             setIsLoading(false);
    //         // ...
    //         } else {
    //         setIsLoading(false);
            
    //         }
    //     });
    //     // firebaseObserver.subscribe('authStateChanged', data => {
    //     //     setAuthenticated(data);
    //     //     setIsLoading(false);
    //     // });
    //     // return () => { firebaseObserver.unsubscribe('authStateChanged'); }
    // }, []);
    
    // let render;

    // if (isLoading) {
    //     render = (
    //         <>
    //           <p>Loading user data...</p>
    //           {/* {<p className="bg-danger text-light p-3 mb-2">Failed to fetch the user data</p>} */}
    //         </>
    //       );
    // } else {
    //     render = props.categoriesQuerySnapshot.map((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         // console.log(doc.id, " => ", doc.data());
    //         const data = doc.data();
    //         return (<VideoCard identifier={doc.id} user={user} data={data} tooltip={user? "" : "You must sign-in to save"}/>);
    //     });
    // }

    return (
        <section className="homepage-cards-section" aria-label="a collection of stories">
            <div className="container homepage-cards"> 
                <div className="row">
                    {categoryVideos}
                </div> 
                    
            </div>
        </section>
    );
}