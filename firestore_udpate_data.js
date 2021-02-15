const firebase = require('firebase');
require("firebase/firestore");

const csv = require('csv-parser');
const fs = require('fs');

//Configurar firestore
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
let db = firebase.firestore(app);

//leer el csv e importarlo en firestore
// fs.createReadStream('data_categories.csv')
fs.createReadStream('data_products.csv')
	.pipe(csv({separator: ';'}))
	.on('data', (row) => {
		// console.log(row);
		// console.log(row.id + " "+row.name);
		// db.collection("categories")
		db.collection("products")
			.add(row)
			.then((docRef) => {
				console.log("Producto registrado con ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error al agregar un documento: ", error);
			});
	})
	.on('end', () => {
		console.log('CSV file successfully processed');
	});
