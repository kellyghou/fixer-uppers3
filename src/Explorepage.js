import { React,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import FairytalesList from './Fairytales.js';
import Filters from './Filters.js';
import { Footer } from './About.js';
import { NavBar } from './About.js';

export function ExplorePage(props) {
  const [videoData, setVideoData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [newSelectedCategory, setNewSelectedCategory] = useState([category]);

  let { category } = useParams();

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
    setNewSelectedCategory(categoryArray)
  }

  useEffect(() => {
    setIsFetching(true);
    let q = collection(props.videoDatabase, "videos");
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
        console.log(error.message);
        setAlertMessage(error.message);
      })
      .then(() => {
        setIsFetching(false);
      })
  }, [newSelectedCategory])

  const categoryList = ["Food", "Fashion", "Cosmetics", "Home", "Transportation", "Children", "Reduce Waste", "Clean Energy"];

  let render;

  if (isFetching) {
    render = <p>Loading videos...</p>;
  } else {
    render = <FairytalesList categoriesQuerySnapshot={videoData}/>;
  }

  return (
    <>
      <NavBar />
      <Filters uniqueCategory={categoryList} applyFilterCallback={applyFilter}/>
      {/* {isFetching && <p>Loading videos...</p>}
      {alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {alertMessage}</p>} */}
      {render}
      {/* <FairytalesList categoriesQuerySnapshot={videoData}/> */}
      <Footer />
    </>
  );
}

