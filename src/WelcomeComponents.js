import { Box, Button, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';
import cacheImages from './CacheImages';
import homepageWelcomeImage from './img/homepagebackground.jpg';

cacheImages([homepageWelcomeImage]);

export function ExploreWelcome() {
    return (
        <Box sx={{margin: 'auto'}}>
            <Typography variant='h1' sx={{'& .MuiTypography-root.MuiTypography-h1' : {outline: 'black solid 1px'}, marginTop: '2rem', marginBottom: '2rem', display: 'block', textAlign: 'center', color: '#009999'}}>Welcome!</Typography>
            <Box sx={{textAlign: 'left', paddingLeft: '10rem'}}>
                <Typography variant='subtitle1' sx={{display: 'block'}}>
                    Click on videos to learn more about easy, sustainable habits you can build and practice in your day to day life. 
                </Typography>
                <Typography variant='subtitle1' sx={{display: 'block'}}>
                    You can use the filter below to explore specific categories under sustainability!
                </Typography>
            </Box>
        </Box>
    );
}

export function HomeWelcome() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', marginBottom: '6rem', height: 'calc(100vh - 6rem)', backgroundImage: `url(${homepageWelcomeImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <Box sx={{color: 'white', textAlign: 'left', paddingTop: '10rem', paddingLeft: '6rem'}}>
                <Typography variant='h1' sx={{fontSize: '3rem', flexWrap: 'wrap', width: '35rem', marginBottom: '6rem'}}>Explore sustainability tips in one place.</Typography>
                <Box sx={{flexWrap: 'wrap', width: '40rem'}}>
                    <Typography variant='subtitle1'>View our videos and blogs to learn how you can incorporate sustainable habits in your daily life to support and save our environment.</Typography>
                </Box>
            </Box>
            <Box sx={{marginTop: 'auto', marginRight: 'auto', marginLeft: 'auto', flexDirection: 'column', alignSelf: 'flex-end', display: 'flex', justifyContent: 'center'}}>
                <Button sx={{fontSize: '2 rem', '&:hover' : {backgroundColor: '#ffb366'}, display: 'flex', borderRadius: '5rem', borderColor: 'rgba(255, 255, 255, 0.7)', fontWeight: '700', borderStyle: 'solid', borderWidth: 'medium', height: '3.5rem', width: 'auto', backgroundColor: 'rgba(255, 191, 128, 0.7)', color: 'white', textTransform: "none"}}>Learn more about what you can do</Button>
                <ArrowDownwardIcon className='arrow' sx={{margin: 'auto', display: 'flex', width: '5rem', height: '5rem', fill: '#ff9933'}}/>
            </Box>
        </Box>
            
    );
}