import { React, useState, useEffect } from 'react';
import { auth } from './Firebase.js';
import { onAuthStateChanged } from "firebase/auth";
import { AppBar, Button, IconButton, Toolbar, Typography, Box} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import logoImage from "./img/ecofriendslogo.png";
import cacheImages from './CacheImages';
import {Link as RouterLink} from 'react-router-dom';

cacheImages([logoImage]);

export function NavBar() {
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              // if (isSaved(uid)) {
                  
              // } else {
              //     // User is signed in, see docs for a list of available properties
              //     // https://firebase.google.com/docs/reference/js/auth.user
              //     const saveVideoRef = doc(db, "userData", uid, "savedVideos", props.data.id);
              //     setDoc(saveVideoRef, { location: props.data.location }, { merge: true });
              // }
              setUser(user);
              setIsLoading(false);
          // ...
          } else {
          setIsLoading(false);
          
          }
      });
      // firebaseObserver.subscribe('authStateChanged', data => {
      //     setAuthenticated(data);
      //     setIsLoading(false);
      // });
      // return () => { firebaseObserver.unsubscribe('authStateChanged'); }
  }, []);
  
  let render;

  if (isLoading) {
      render = (
          <>
            
          </>
        );
  } else {
    if (user) {
      render = (
        <IconButton
          size="large"
          edge="start"
          color='black'
          aria-label="menu"
          component={RouterLink}
          to='/profile'
          // sx={{ right: '2rem' }}
        >
          <PersonIcon />
        </IconButton>
      );
    } else {
      render = (
        <Button sx={{color: "black"}} href='/login'>Login</Button>
      );
    }
  }

  return (
    <Box sx={{ height: '6rem', width: '100%' }}>
      <AppBar sx={{ background: '-webkit-linear-gradient(0deg, #ffdab3, #ffa94d)', height: '6rem' }}position="static">
        <Toolbar sx={{ height: '6rem', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Box component={RouterLink} to='/home' sx={{textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '1rem'}}>
              <Box component="img" src={logoImage} sx={{display: 'inline-block', width: '3.5rem', height: '3.5rem'}} />
              <Typography sx={{fontWeight: '700', fontSize: '2rem', display: 'inline-block', color: 'black', textDecoration: 'none'}}>EcoFriends</Typography>
            </Box>
            <Typography variant="h6" component={RouterLink} to='/explore' sx={{ marginRight: '1rem', marginLeft: '1rem', color: 'black', textDecoration: 'none'}}>
              Explore
            </Typography>
            <Typography variant="h6" component={RouterLink} to='/about' sx={{ marginRight: '1rem', marginLeft: '1rem', color: 'black', textDecoration: 'none'}}>
              About
            </Typography>
          </Box>
          <Box sx={{display: 'inline-block', justifyContent: 'flex-end'}}>
            {render}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}