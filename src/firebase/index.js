import firebase from 'firebase/app'
import '@firebase/firestore'

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;
const AUTHDOMAIN = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_FIREBASE_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const MESSAGINGSENDERID = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const APPID = process.env.REACT_APP_FIREBASE_APPID;
const MEASUREMENTID = process.env.REACT_APP_FIREBASE_MEASUREMENTID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: APIKEY,
	authDomain: AUTHDOMAIN,
	// projectId: "reactjsecommerce-84729",
	projectId: PROJECTID,
	storageBucket: STORAGEBUCKET,
	messagingSenderId: MESSAGINGSENDERID,
	appId: APPID,
	measurementId: MEASUREMENTID
};

console.log("PROJECTID:"+PROJECTID);

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase() {
	return app
}

export function getFireStore() {
	return firebase.firestore(app)
}