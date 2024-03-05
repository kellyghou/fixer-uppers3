import { Card, CardMedia, CardContent, Typography, CardActionArea, Popover } from '@mui/material';
import React from 'react';
import { useRef, useState } from 'react';

function FairyCard(props) {  
    // const [playing, setPlaying] = useState(false);
    // const videoRef = useRef(null);
    // const onVideoPress = () => {
    //     if(playing) {
    //         videoRef.current.pause();
    //         setPlaying(false)
    //     } else {
    //         videoRef.current.play();
    //         setPlaying(true)
    //     }
    // }
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
            <div className="col-12 col-lg-3 video-card-wrapper">
                <Card sx={{ maxWidth: "18rem"}}>
                    <CardActionArea onClick={handleClick}>
                        {/* <CardMedia component='video' image={props.fairy.img} sx={{height: "21rem"}} controls/> */}
                        <CardMedia component='video' src={props.data.location} sx={{height: "21rem"}}/>
                        <CardContent> 
                            <Typography></Typography>
                        </CardContent>
                        {/* <video className="video__player" src="https://www.tiktok.com/@bandsbank/video/7318694095696825646?is_from_webapp=1&sender_device=pc&web_id=7338115801931712043" ref={videoRef} onClick={onVideoPress}></video>  */}
                    </CardActionArea>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                    </Popover>
                </Card>
            </div>
    );
}

export default function FairytalesList(props) {
    // console.log(props.categoriesQuerySnapshot);
    const categoryVideos = props.categoriesQuerySnapshot.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        return (<FairyCard key={data.id} data={data}/>);
    });
   
    // const fairyCards = props.fairytaleData.map((fairy) => {
    //     return (<FairyCard key={fairy.id} fairy={fairy}/>);
    // })

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