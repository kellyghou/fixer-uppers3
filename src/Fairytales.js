import { Card, CardMedia, CardContent, Typography, CardActionArea, Modal, Box, IconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState } from 'react';

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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Card sx={{ width: "18rem", height: "28rem"}}>
                    <CardActionArea onClick={handleOpen} sx={{zIndex: 1, position: 'relative', backgroundColor: "black"}}>
                            <CardMedia component='video' src={props.data.location} sx={{position: 'relative', zIndex: 2, height: "21rem"}}/>
                            <Box component='image' src='./img/playbutton.png' sx={{maxWidth: "3rem", position: "absolute", zIndex: 3, top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
                    </CardActionArea>
                    <CardContent>
                        <Typography>{props.data.title}</Typography>
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
                                    {/* <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography> */}
                                {/* </CardContent> */}
                            {/* </Collapse> */}
                        </Card>
                        {/* <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                        </Box> */}
                    </Modal>
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