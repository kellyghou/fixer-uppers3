import React from 'react';
import { Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import {positions} from '@mui/system';

function CategoryCard(props) {  
    return (
            <div className="col-12 col-md-3 category-card-wrapper">
                <Card sx={{ maxWidth: 350, borderRadius: "20px" }} className='category-card'>
                    <CardMedia
                    className="category-card-img"
                    component="img"
                    height="400"
                    image={props.category.img}
                    alt={props.category.alt}
                    />
                    {/* <CardContent sx={{position: "absolute", top: "50%", padding: "0px"}}>
                        <Button variant="contained" className = "category-button">{props.category.name}</Button>
                        sx={{position: "absolute", top: "50%", textAlign: "center"}}
                    </CardContent> */}
                    <Button variant="contained" className = "category-button" sx={{position: "absolute", top: "50%", textAlign: "center", left: "50%", backgroundColor: "rgba(255, 204, 204, 0.7)", color: "#800000", fontWeight: "600", borderStyle: "solid", borderWidth: ".1rem", borderColor: "white", height: "5rem", fontSize: "1.5rem", width: "17rem", borderRadius: "10px"}}>{props.category.name}</Button>
                </Card>
                {/* <div className="card mb-2 category-card">
                    <img src={props.category.img} alt={props.category.alt}/>
                </div>
                <Button variant="contained" className = "category-button">{props.category.name}</Button> */}
                {/* <div class="card-img-overlay">
                    <a href="#" class="btn btn-outline-warning btn-sm float-end"
                    data-bs-toggle="popover" data-bs-content="Edit image" data-bs-trigger="hover focus">
                        <i class="far fa-edit"></i>
                    </a>
                </div> */}
                {/* <Button variant="contained" className = "category-button">{props.category.name}</Button> */}
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