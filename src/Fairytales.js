import React from 'react';

function FairyCard(props) {  
    return (
            <div className="col-12 col-md-3 d-flex">
                <div className="card mb-2 home-card d-flex flex-grow-1">
                    <img src={props.fairy.img} alt={props.fairy.alt}/>
                    <div className="card-body">
                        <a href={props.fairy.link} className="stretched-link"></a>
                        <h3 className="card-title home-card-title">{props.fairy.name}</h3>
                        <div className='home-card-categories'>
                            <p className="storycard-text border-bottom ">{props.fairy.continent}</p>
                            <p className="storycard-text border-bottom ">{props.fairy.duration} (mins)</p>
                            {/* <p className="storycard-text border-bottom">{props.fairy.age}+</p> */}
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default function FairytalesList(props) {
   
    const fairyCards = props.fairytaleData.map((fairy) => {
        return (<FairyCard key={fairy.id} fairy={fairy}/>);
    })

    return (
        <section className="homepage-cards-section" aria-label="a collection of stories">
            <div className="container homepage-cards"> 
                <div className="row">
                    {fairyCards}
                </div> 
                    
            </div>
        </section>
        );
}