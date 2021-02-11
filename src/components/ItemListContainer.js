import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import {Container, Row} from "react-bootstrap";

import {CartContext} from "../CartContext"
import {getFireStore} from "../firebase";

const CALL_DELAY_MS = 2000;
const ItemListContainer = () => {

	const [products, setProducts] = useState([])
	const {idCategory} = useParams()

	// const CartCont

	/*let listProducts = [
		{id: 1, id_category: 1, title: 'zapatilla', description: 'desc 1', stock: 2, price: 10, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla'},
		{id: 2, id_category: 2, title: 'Remera', description: 'desc 2', stock: 3, price: 20, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera'},
		{id: 3, id_category: 3, title: 'Jean', description: 'desc 3', stock: 4, price: 30, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean'},
		{id: 4, id_category: 1, title: 'zapatilla 2', description: 'desc 1', stock: 2, price: 15, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla22'},
		{id: 5, id_category: 2, title: 'Remera 2', description: 'desc 2', stock: 4, price: 25, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera22'},
		{id: 6, id_category: 3, title: 'Jean 2', description: 'desc 3', stock: 5, price: 35, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean22'},
	]*/

	useEffect(() => {

	})


	/*function simulateAPICall(listItems) {
		let promise = new Promise((resolve, reject) => {
			let timeout = CALL_DELAY_MS;
			setTimeout(function () {
				resolve(listItems);
			}, timeout);
		});

		promise.then((resultado) => {
			setProducts(resultado)
		}, (error) => {
			console.log("error")
		})
	}*/

	//Al recibir el parametro
	useEffect(() => {
		console.log("idCategory:" + idCategory);
		// setLoading(true)
		let db = getFireStore()
		const itemCollection = db.collection("products");

		let listProducts = itemCollection;

		if (idCategory > 0) {
			// simulateAPICall(listProducts.filter(product => product.id_category.toString().includes(idCategory)));
			listProducts = itemCollection.where('idCategory', '=', idCategory);
		} else {
		}

		listProducts.get().then((querySnapshot) => {
			if (querySnapshot.size === 0) {
				console.log("no results");
			} else {
				console.log("docs:");
				// console.log(querySnapshot.docs);
				setProducts(querySnapshot.docs.map(doc => {
					return {...doc.data(), id: doc.id}
				}))
				/*let tmp = querySnapshot.docs.map(doc => {
					return {...doc.data(), id: doc.id}
				})
				console.log("tmo");
				console.log(tmp);*/
			}
		}).catch((error) => {
			console.log("error al recuperar los productos");
		}).finally();

	}, [idCategory])

	return (

		<Container>
			<Row>
				<h3>
					Catalogo: {idCategory}
				</h3>
			</Row>

			<ItemList items={products}/>

		</Container>
	);
};

export default ItemListContainer;
