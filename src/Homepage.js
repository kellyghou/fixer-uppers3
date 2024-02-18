import { React,useState } from 'react';
import FairytalesList from './Fairytales';
import WelcomeComponent from './Welcome';
import Filters from './Filters';
import { Footer } from './About.js';
import { NavBar } from './About.js';


export function HomePage(props) {

  const [newSelectedContinent, setNewSelectedContinent] = useState('');
  const [newSelectedDuration, setNewSelectedDuration] = useState('');
//   const [newSelectedAge, setNewSelectedAge] = useState('');

  let displayedData = props.fairytaleData;

  if (newSelectedContinent !== "") { //users select a continent
    displayedData = displayedData.filter((data) => {
      return data.continent === newSelectedContinent; 
    })
  }

  if (newSelectedDuration !== "") { //users select a duration
    displayedData = displayedData.filter((data) => {
      return data.duration === newSelectedDuration; 
    })
  }

//   if (newSelectedAge !== "") { //users select an age
//     displayedData = displayedData.filter((data) => {
//       return data.age === newSelectedAge; 
//     })
//   }


  const applyFilter = (continentString, durationString, ageString) => {
    const updatedNewSelectedContinent = continentString;
    setNewSelectedContinent(updatedNewSelectedContinent)

    const updatedNewSelectedDuration = durationString;
    setNewSelectedDuration(updatedNewSelectedDuration)

    // const updatedNewSelectedAge = ageString;
    // setNewSelectedAge(updatedNewSelectedAge)
    
  }

  
  const continentList = [...new Set(props.fairytaleData.map(storyObj => storyObj.continent))].sort();
  const durationList = [...new Set(props.fairytaleData.map(storyObj => storyObj.duration))];
//   const ageList = [...new Set(props.fairytaleData.map(storyObj => storyObj.age))];

  return (
    <>
      <NavBar />
      <WelcomeComponent />
      <Filters uniqueContinent={continentList} uniqueDuration={durationList}/*uniqueAge={ageList}*/ applyFilterCallback={applyFilter}/>
      {props.waiting && <p>Loading fairytales...</p>}
      {props.alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {props.alertMessage}</p>}
      <FairytalesList fairytaleData={displayedData}/>
      <Footer />
    </>
  );
}

