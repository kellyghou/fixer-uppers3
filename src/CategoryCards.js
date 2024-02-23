import React from 'react';
import { Button } from '@mui/material';
import {positions} from '@mui/system';

function CategoryCard(props) {  
    return (
            <div className="col-12 col-md-3 category-card-wrapper">
                <div className="card mb-2 category-card">
                    <img src={props.category.img} alt={props.category.alt}/>
                </div>
                <Button variant="contained" className = "category-button">{props.category.name}</Button>
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