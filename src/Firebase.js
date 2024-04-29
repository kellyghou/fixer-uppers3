// import 'firebase/compat/auth';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// Required for side-effects
// import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBd27rl2LAgd2xQ7bsnYzH-M2CP-dFgRvs",
    authDomain: "fixer-uppers3.firebaseapp.com",
    projectId: "fixer-uppers3",
    storageBucket: "fixer-uppers3.appspot.com",
    messagingSenderId: "835145866169",
    appId: "1:835145866169:web:7de7995773388f0aab7468"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const db = getFirestore(app);
  
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  
  export {app, auth, db};
  
  
  // await setDoc(doc(db, "videos", "reusablebag"), {
  //   
  // });
  // const q = collection(db, "videos");
  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  
  // const docRef = doc(db, "videos", "LBwyIEAqptGoN7TNFMq4");
  
  // const docSnap = await getDoc(docRef);
  
  // const storage = getStorage();
  
  // const energyRef = ref(storage, 'reusablebag.mp4');
  
  // const energyVideosRef = ref(storage, './img/reusablebag.mp4');
  
  // console.log (energyRef, energyVideosRef);
  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }