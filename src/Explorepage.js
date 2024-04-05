import { React,useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import FairytalesList from './Fairytales.js';
import Filters from './Filters.js';
import { Footer } from './About.js';
import { NavBar } from './About.js';
import { useLocation } from 'react-router-dom';

export function ExplorePage(props) {
  
  const [videoData, setVideoData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const location = useLocation();
  let homepageCategory = null;
  if (location.state != null) {
    const { category } = location.state;
    homepageCategory = category;
  }
  // const homepageCategory = props.homepageCategory;
  const [newSelectedCategory, setNewSelectedCategory] = useState(homepageCategory != null ? [homepageCategory] : []);

  

  // const fetchVideoData = () => {
  //   setIsFetching(true);
  //   let q = collection(props.videoDatabase, "videos");
  //   if (Array.isArray(newSelectedCategory) && newSelectedCategory.length) {
  //     q = query(collection(props.videoDatabase, "videos"), where("categories", "array-contains-any", {newSelectedCategory}));
  //   }
  //   getDocs(q)
  //     .then(function(snapshot) {
  //       setVideoData(snapshot);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setAlertMessage(error.message);
  //     })
  //     .then(() => {
  //       setIsFetching(false);
  //     });
  // }

  // useEffect(() => {
  //   fetchVideoData();
  // }, [])
  // const applyParams = (category) => {
  //   setNewSelectedCategory(category);
  // }

  const applyFilter = (categoryArray) => {
    // const updatedNewSelectedCategory = categoryArray;
    setNewSelectedCategory(categoryArray);
  }


  useEffect(() => {
    setIsFetching(true);
    let q = collection(props.videoDatabase, "videos");
    console.log(newSelectedCategory);
    console.log(homepageCategory);
    if (Array.isArray(newSelectedCategory) && newSelectedCategory.length > 0) {
      q = query(collection(props.videoDatabase, "videos"), where("categories", "array-contains-any", newSelectedCategory));
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
  }, [newSelectedCategory])

  const categoryList = ["Food", "Fashion", "Cosmetics", "Home", "Transportation", "Pets", "Reduce Waste", "Clean Energy"];


  let render;

  if (isFetching) {
    render = <p>Loading videos...</p>;
  } else {
    render = <FairytalesList categoriesQuerySnapshot={videoData}/>;
  }

  return (
    <>
      <NavBar />
      <Filters uniqueCategory={categoryList} applyFilterCallback={applyFilter} homepageCategory={homepageCategory}/>
      {/* {isFetching && <p>Loading videos...</p>}
      {alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {alertMessage}</p>} */}
      {render}
      {/* <FairytalesList categoriesQuerySnapshot={videoData}/> */}
      <Footer />
    </>
  );
}

