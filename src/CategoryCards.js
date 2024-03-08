import React from 'react';
import { Button, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import {positions} from '@mui/system';
import ReactCardFlip from 'react-card-flip';
import ReactCardFlipper from 'react-card-flipper';
import { useState } from 'react';

function CategoryCard(props) {  
    const [flip, setFlip] = useState(false);
    return (
        
        <div className="col-12 col-lg-3 category-card-wrapper">
            <ReactCardFlipper width="18rem" height="21rem" behavior="hover" sx={{padding: '0 5rem', position: 'relative'}}>
                <div>
                    <Card sx={{ maxWidth: "18rem", borderRadius: "20px"}} className='category-card'>
                        <CardMedia
                        className="category-card-img"
                        component="img"
                        sx={{height: "21rem"}}
                        image={props.category.img}
                        alt={props.category.alt}
                        onMouseOver={() => setFlip(!flip)}
                        />
                        <Button variant="contained" className = "category-button" sx={{position: "absolute", top: "50%", textAlign: "center", left: "50%", backgroundColor: "rgba(255, 204, 204, 0.7)", color: "#800000", fontWeight: "600", borderStyle: "solid", borderWidth: ".1rem", borderColor: "white", height: "5rem", fontSize: "1.5rem", width: "16rem", borderRadius: "10px", '&:hover': {backgroundColor: 'rgba(255, 204, 204, 0.7)',}}}>{props.category.name}</Button>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: "18rem", borderRadius: "20px"}} className='category-card' onMouseLeave={() => setFlip(!flip)}>
                        <CardActionArea href="/explore">
                            <CardContent
                            sx={{height: "21rem"}}
                            >
                                <Typography>
                                    {props.category.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </ReactCardFlipper>
            {/* <ReactCardFlip isFlipped={flip}>
                <Card sx={{ maxWidth: 350, borderRadius: "20px"}} className='category-card'>
                    <CardMedia
                    className="category-card-img"
                    component="img"
                    height="400"
                    image={props.category.img}
                    alt={props.category.alt}
                    onMouseOver={() => setFlip(!flip)}
                    />
                    <Button variant="contained" className = "category-button" sx={{position: "absolute", top: "50%", textAlign: "center", left: "50%", backgroundColor: "rgba(255, 204, 204, 0.7)", color: "#800000", fontWeight: "600", borderStyle: "solid", borderWidth: ".1rem", borderColor: "white", height: "5rem", fontSize: "1.5rem", width: "17rem", borderRadius: "10px", '&:hover': {backgroundColor: '#fff',}}}>{props.category.name}</Button>
                </Card>
                <Card sx={{ maxWidth: 350, borderRadius: "20px"}} className='category-card' onMouseLeave={() => setFlip(!flip)}>
                    <CardContent
                    sx={{height: "400px"}}
                    >
                        <Typography>
                            Some text
                        </Typography>
                    </CardContent>
                </Card>
            </ReactCardFlip> */}
        </div>
    );
}

export default function CategoriesList(props) {
   
    const categoryCards = props.cardData.map((category) => {
        return (<CategoryCard key={category.id} category={category}/>);
    })

    return (
        <section className="homepage-cards-section" aria-label="a collection of stories">
            <div className="container homepage-cards"> 
                <div className="row">
                    {categoryCards}
                </div> 
                    
            </div>
        </section>
        );
}