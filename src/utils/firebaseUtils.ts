// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU9WxzsUoyEVRVkLCSlkWZ-CnYOW_JKRY",
  authDomain: "latam-ed251.firebaseapp.com",
  databaseURL: "https://latam-ed251-default-rtdb.firebaseio.com/",
  projectId: "latam-ed251",
  storageBucket: "latam-ed251.appspot.com",
  messagingSenderId: "447221351755",
};

// apiKey: "AIzaSyAU9WxzsUoyEVRVkLCSlkWZ-CnYOW_JKRY",
// authDomain: "latam-ed251.firebaseapp.com",
// projectId: "latam-ed251",
// storageBucket: "latam-ed251.appspot.com",
// messagingSenderId: "447221351755",
// appId: "1:447221351755:web:ab97002142e29ff27a94ce",
// measurementId: "G-NKDMTH3WH7"

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);
