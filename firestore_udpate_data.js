const firebase = require('firebase');
// const firestore = require("firebase/firestore");
require("firebase/firestore");

let admin = require("firebase-admin");
let serviceAccount = require("./reactjsecommerce-84729-firebase-adminsdk-y6yj2-7505982492.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

// console.log(admin.app.auth);
// console.log(`admin.name:${admin}`);
// var defaultAuth = admin.auth();
// var defaultDatabase = admin.database();

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
var db = firebase.firestore(app);
const itemCollection = db.collection("products");

/*
itemCollection.get().then((querySnapshot) => {
	if (querySnapshot.size === 0) {
		console.log("no results");
	} else {
		console.log(querySnapshot.docs);
	}
}).catch((error) => {
	console.log("error al recuperar los productos");
	console.log(error);
}).finally();
*/

var productos = [{
	"id": 1,
	"category": "camas",
	"title": "Moises WePets Classic Lunar",
	"description": "",
	"img": "244175.webp",
	"size": [
		"m"
	],
	"price": 3630,
	"outstanding": "",
	"discount": ""
}];


productos.forEach((obj) => {
	db.collection("productos")
		.add({
			id: obj.id,
			category: obj.category,
			title: obj.title,
			description: obj.description,
			img: obj.img,
			size: obj.size,
			price: obj.price,
			outstanding: obj.outstanding,
			discount: obj.discount,
		})
		.then((docRef) => {
			console.log("Producto registrado con ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error al agregar un documento: ", error);
		});
});
