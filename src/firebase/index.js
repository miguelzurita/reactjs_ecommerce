import firebase from 'firebase/app'
import '@firebase/firestore'
import {ArrowReturnLeft} from "react-bootstrap-icons";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyBqYr9lECFmRZTDeiyUKlfOyZyDRZ-NGmk",
	authDomain: "reactjsecommerce-84729.firebaseapp.com",
	projectId: "reactjsecommerce-84729",
	storageBucket: "reactjsecommerce-84729.appspot.com",
	messagingSenderId: "59653033430",
	appId: "1:59653033430:web:be039c0dcc5301ae366877",
	measurementId: "G-4C3P9LSNSZ"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
	return app
}

export function getFireStore() {
	return firebase.firestore(app)
}


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
