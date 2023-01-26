 import firebase from "firebase"

const firebaseConfig = {
  // apiKey: "AIzaSyBQn2nYBMJR2ik6RWTU_S01LZcseJ4-rrY",
  // authDomain: "app-de-historia-91dc7.firebaseapp.com",
  // databaseURL: "https://app-de-historia-91dc7-default-rtdb.firebaseio.com",
  // projectId: "app-de-historia-91dc7",
  // storageBucket: "app-de-historia-91dc7.appspot.com",
  // messagingSenderId: "121974193719",
  // appId: "1:121974193719:web:727e749e8e329b66e889b2"

  // apiKey: "AIzaSyBjLzy7xu3VjoRm95fiogGyF4mGvvlQmUU",
  // authDomain: "appnarracao-6bcdd.firebaseapp.com",
  // databaseURL: "https://appnarracao-6bcdd-default-rtdb.firebaseio.com",
  // projectId: "appnarracao-6bcdd",
  // storageBucket: "appnarracao-6bcdd.appspot.com",
  // messagingSenderId: "163235946702",
  // appId: "1:163235946702:web:475d87d5ac090ac893709f"

  apiKey: "AIzaSyBQn2nYBMJR2ik6RWTU_S01LZcseJ4-rrY",
  authDomain: "app-de-historia-91dc7.firebaseapp.com",
  databaseURL: "https://app-de-historia-91dc7-default-rtdb.firebaseio.com",
  projectId: "app-de-historia-91dc7",
  storageBucket: "app-de-historia-91dc7.appspot.com",
  messagingSenderId: "121974193719",
  appId: "1:121974193719:web:727e749e8e329b66e889b2"
};


 firebase.initializeApp(firebaseConfig);
 export default firebase.database();