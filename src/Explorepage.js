import { React,useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./Firebase.js";
import VideosList from './VideoCards.js';
import Filters from './Filters.js';
import { Footer } from './About.js';
import { NavBar } from './NavBar.js';
import { useParams } from 'react-router-dom';
import { ExploreWelcome } from './WelcomeComponents.js';

export function ExplorePage() {
  
  const [videoData, setVideoData] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const categoryList = ["Food", "Fashion", "Cosmetics", "Home", "Transportation", "Pets", "Reduce Waste", "Clean Energy"];
  const includesAll = (arr, values) => values.every(v => arr.includes(v));
  const params = useParams();
  let homepageCategory = null;
  if (params.prefilter != null) {
    console.log(params.prefilter);
    homepageCategory = params.prefilter.includes(',')? params.prefilter.split(',') : [params.prefilter];
    if (!includesAll(categoryList, homepageCategory)) {
      homepageCategory = [];
    }
  }

  const [newSelectedCategory, setNewSelectedCategory] = useState(homepageCategory != null ? homepageCategory : []);

  const applyFilter = (categoryArray) => {
    // var arrStr = encodeURIComponent(JSON.stringify(categoryArray));
    // $('#myLink').attr({ href: '/myLink?array=' + arrStr });
    // console.log(categoryArray);
    // window.location.href=`/explore/${typeof categoryArray === 'string' ? categoryArray.split(',') : categoryArray}`;
    setNewSelectedCategory(categoryArray);
    // console.log(categoryArray);
  }

  useEffect(() => {
    setIsFetching(true);
    let q = collection(db, "videos");
    if (Array.isArray(newSelectedCategory) && newSelectedCategory.length > 0) {
      q = query(collection(db, "videos"), where("categories", "array-contains-any", newSelectedCategory));
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
  }, [newSelectedCategory]);

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              // if (isSaved(uid)) {
                  
              // } else {
              //     // User is signed in, see docs for a list of available properties
              //     // https://firebase.google.com/docs/reference/js/auth.user
              //     const saveVideoRef = doc(db, "userData", uid, "savedVideos", props.data.id);
              //     setDoc(saveVideoRef, { location: props.data.location }, { merge: true });
              // }
              setUser(user);
              setIsLoading(false);
          // ...
          } else {
          setIsLoading(false);
          
          }
      });
      // firebaseObserver.subscribe('authStateChanged', data => {
      //     setAuthenticated(data);
      //     setIsLoading(false);
      // });
      // return () => { firebaseObserver.unsubscribe('authStateChanged'); }
  }, []);
  
  let render;

  if (isFetching) {
    render = (
      <>
        <p>Loading videos...</p>
        {alertMessage && <p className="bg-danger text-light p-3 mb-2">Failed to fetch the data. Error: {alertMessage}</p>}
      </>
    );
  } else {
    if (isLoading) {
      render = (
          <>
            <p>Loading user data...</p>
            {/* {<p className="bg-danger text-light p-3 mb-2">Failed to fetch the user data</p>} */}
          </>
        );
    } else {
      render = <VideosList categoriesQuerySnapshot={videoData} user={user}/>;
       
    }
  }

  return (
    <>
      <NavBar/>
      <ExploreWelcome/>
      <Filters uniqueCategory={categoryList} applyFilterCallback={applyFilter} homepageCategory={homepageCategory}/>
      {render}
      <Footer/>
    </>
  );
}

