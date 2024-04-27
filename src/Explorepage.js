import { React,useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import VideosList from './VideoCards.js';
import Filters from './Filters.js';
import { Footer } from './About.js';
import { NavBar } from './About.js';
import { useParams } from 'react-router-dom';
import { ExploreWelcome } from './WelcomeComponents.js';

export function ExplorePage(props) {
  
  const [videoData, setVideoData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const categoryList = ["Food", "Fashion", "Cosmetics", "Home", "Transportation", "Pets", "Reduce Waste", "Clean Energy"];
  const includesAll = (arr, values) => values.every(v => arr.includes(v));
  const params = useParams();
  let homepageCategory = [];
  if (params.prefilter != null) {
    // console.log(params.prefilter);
    homepageCategory = params.prefilter.includes(',')? params.prefilter.split(',') : [params.prefilter];
    if (!includesAll(categoryList, homepageCategory)) {
      homepageCategory = [];
    }
  }

  // const [newSelectedCategory, setNewSelectedCategory] = useState(homepageCategory != null ? homepageCategory : []);

  // const applyFilter = (categoryArray) => {
  //   setNewSelectedCategory(categoryArray);
  // }


  useEffect(() => {
    setIsFetching(true);
    let q = collection(props.videoDatabase, "videos");
    // console.log(newSelectedCategory);
    console.log(homepageCategory);
    if (Array.isArray(homepageCategory) && homepageCategory.length > 0) {
      q = query(collection(props.videoDatabase, "videos"), where("categories", "array-contains-any", homepageCategory));
    }
    getDocs(q)
      .then(function(snapshot) {
        return snapshot.docs;
      })
      .then(function(docsArray) {
        setVideoData(docsArray);
      })
      .catch((error) => {
        setAlertMessage(error.message);
      })
      .then(() => {
        setIsFetching(false);
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  let render;

  if (isFetching) {
    render = (
      <>
        <p>Loading videos...</p>
        {alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {alertMessage}</p>}
      </>
    );
  } else {
    render = <VideosList categoriesQuerySnapshot={videoData}/>;
  }

  return (
    <>
      <NavBar />
      <ExploreWelcome />
      <Filters uniqueCategory={categoryList} /*applyFilterCallback={applyFilter}*/ homepageCategory={homepageCategory}/>
      {render}
      <Footer />
    </>
  );
}

