import { Card, CardMedia, CardContent, Typography, CardActionArea, Modal} from '@mui/material';
// import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { useState } from 'react';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

function VideoCard(props) {  
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
                <Card sx={{ width: "18rem", height: "28rem", position: 'relative'}}>
                    <CardActionArea onClick={handleOpen} sx={{backgroundColor: "black"}}>
                        <CardMedia component='video' src={props.data.location} sx={{height: "21rem"}}/>
                        <SmartDisplayIcon sx={{width: "5rem", height: "5rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/>
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
                                {/* </CardContent> */}
                            {/* </Collapse> */}
                        </Card>
                    </Modal>
                </Card>
            </div>
    );
}

export default function VideosList(props) {
    // console.log(props.categoriesQuerySnapshot);
    const categoryVideos = props.categoriesQuerySnapshot.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const data = doc.data();
        return (<VideoCard key={data.id} data={data}/>);
    });

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