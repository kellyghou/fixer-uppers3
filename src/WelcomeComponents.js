import { Box, Button, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';
import cacheImages from './CacheImages';
import homepageWelcomeImage from './img/homepagebackground.jpg';

cacheImages([homepageWelcomeImage]);

export function ExploreWelcome() {
    return (
        <Box sx={{margin: 'auto'}}>
            <Typography variant='h1' sx={{'& .MuiTypography-root.MuiTypography-h1' : {outline: 'black solid 1px'}, marginTop: '2rem', marginBottom: '2rem', display: 'block', textAlign: 'center', color: '#009999'}}>
                Welcome!
            </Typography>
            <Typography variant='h5' sx={{display: 'block', textAlign: 'center', fontStyle: 'italic'}}>
                Explore our page to find videos on the different ways to improve sustainability. 
            </Typography>
            <Typography variant='h5' sx={{display: 'block', textAlign: 'center', fontStyle: 'italic'}}>
                From Cosmetics to Transport to much more, we present an extensive catalogue allowing users to scroll through with efficiency!
            </Typography>
        </Box>
    );
}

export function ProfileWelcome(props) {
    return (
        <Box sx={{margin: 'auto'}}>
            <Typography variant='h1' sx={{'& .MuiTypography-root.MuiTypography-h1' : {outline: 'black solid 1px'}, marginTop: '2rem', marginBottom: '2rem', display: 'block', textAlign: 'center', color: '#009999'}}>
                {`Welcome ${props.username}`}
            </Typography>
        </Box>
    );
}
export function HomeWelcome() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', marginBottom: '6rem', height: 'calc(100vh - 6rem)', backgroundImage: `url(${homepageWelcomeImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <Box sx={{color: 'white', textAlign: 'left', paddingTop: '10rem', paddingLeft: '6rem'}}>
                <Typography variant='h1' sx={{fontSize: '3.5rem', fontWeight: 500 , flexWrap: 'wrap', width: '45rem', marginBottom: '3rem'}}>
                    Explore sustainability tips in one place. 
                </Typography>
                <Box sx={{flexWrap: 'wrap', width: '60rem'}}>
                    <Typography variant='h3' sx={{marginBottom: '3rem'}}>
                        Every year, each person on average produces 19 tonnes of greenhouse gases and 1,642 pounds of trash.
                    </Typography>
                    <Typography variant='h5'>
                        View our videos and blogs to learn how you can incorporate sustainable habits in your daily life to support and save our environment.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{marginTop: 'auto', marginRight: 'auto', marginLeft: 'auto', flexDirection: 'column', alignSelf: 'flex-end', display: 'flex', justifyContent: 'center'}}>
                <Button href="#cards" sx={{fontSize: '2 rem', '&:hover' : {backgroundColor: '#ffb366', color: 'white'}, display: 'flex', borderRadius: '5rem', borderColor: 'rgba(255, 255, 255, 0.7)', fontWeight: '700', borderStyle: 'solid', borderWidth: 'medium', height: '3.5rem', width: 'auto', backgroundColor: 'rgba(255, 191, 128, 0.7)', color: 'white', textTransform: "none"}}>
                    Learn more about what you can do
                </Button>
                <ArrowDownwardIcon className='arrow' sx={{margin: 'auto', display: 'flex', width: '5rem', height: '5rem', fill: '#ff9933'}}/>
            </Box>
        </Box>
            
    );
}

export function CardWelcome() {
    return (
        <Box sx={{margin: 'auto', textAlign: 'left', paddingLeft: '10rem'}}>
            <Typography variant='h5' sx={{display: 'block'}}>
                Sustainability Categories
            </Typography>
            <Typography variant='h1' sx={{'& .MuiTypography-root.MuiTypography-h1' : {outline: 'black solid 1px'}, fontSize: '3.5rem' , fontWeight: 'bold', flexWrap: 'wrap', width: '75rem', marginTop: '2rem', marginBottom: '2rem', display: 'block', color: '#009999'}}>
                Your Sustainable Lifestyle Guide: Empowering Young Adults Toward Eco-Friendly Living
            </Typography>
            <Typography variant='h5' sx={{display: 'block'}}>
                Hover over the category card to view a description of the category. 
            </Typography>
            <Typography variant='h5' sx={{display: 'block', marginBottom: '2rem'}}>
                Click on a card to view sustainability content about the category.
            </Typography>
        </Box>
    );
}