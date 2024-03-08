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
  

  let { categoryParams } = useParams();

  console.log(categoryParams);

  const [newSelectedCategory, setNewSelectedCategory] = useState([categoryParams]);

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
    console.log("applied filter");
    console.log(categoryArray);
    setNewSelectedCategory(categoryArray);
    console.log(newSelectedCategory);
    const url = new URL("https://fixer-uppers3.web.app/explore")
    const urlParams = new URLSearchParams(url.search);
    let paramCounter = 1;
    newSelectedCategory.forEach((checkedCategory) => {
      console.log(checkedCategory);
      urlParams.set(`param${paramCounter}`, checkedCategory);
      paramCounter++;
    });
    console.log(urlParams.toString());
    window.history.pushState(null, null, "?"+urlParams.toString());
  }


  useEffect(() => {
    setIsFetching(true);
    console.log(newSelectedCategory);
    console.log(categoryParams);
    let q = collection(props.videoDatabase, "videos");
    if (Array.isArray(newSelectedCategory) && categoryParams != null && newSelectedCategory.length > 0) {
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

