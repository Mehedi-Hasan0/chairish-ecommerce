// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZ_sPrxUtL29lRSgNL_DN0UFrv8e8ZECY",
    authDomain: "chairish.firebaseapp.com",
    projectId: "chairish",
    storageBucket: "chairish.appspot.com",
    messagingSenderId: "179564105982",
    appId: "1:179564105982:web:5be7177b20574a7cd515af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;