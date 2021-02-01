import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import {Container,Row} from "react-bootstrap";

import {CartContext} from "../cartContext"

const CALL_DELAY_MS = 2000;
const ItemListContainer = () => {

	const [products, setProducts] = useState([])
	const {idCategory} = useParams()

	// const CartCont

	let listProducts = [
		{id: 1, id_category: 1, title: 'zapatilla', description: 'desc 1', stock: 2, price: 10, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla'},
		{id: 2, id_category: 2, title: 'Remera', description: 'desc 2', stock: 3, price: 20, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera'},
		{id: 3, id_category: 3, title: 'Jean', description: 'desc 3', stock: 4, price: 30, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean'},
		{id: 4, id_category: 1, title: 'zapatilla 2', description: 'desc 1', stock: 2, price: 15, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla22'},
		{id: 5, id_category: 2, title: 'Remera 2', description: 'desc 2', stock: 4, price: 25, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera22'},
		{id: 6, id_category: 3, title: 'Jean 2', description: 'desc 3', stock: 5, price: 35, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean22'},
	]


	function simulateAPICall(listItems) {
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
	}

	//Al recibir el parametro
	useEffect(() => {
		console.log("idCategory:"+idCategory);
		if (idCategory > 0) {
			simulateAPICall(listProducts.filter(product => product.id_category.toString().includes(idCategory)));
		}else{
			simulateAPICall(listProducts);
		}

	}, [idCategory])

	return (

		<Container>
			<Row>
				<h3>
					Catalogo: {idCategory}
				</h3>
				Consumer:
				<CartContext.Consumer>
					{value => value}
				</CartContext.Consumer>
			</Row>

			<ItemList items={products}/>

		</Container>
	);
};

export default ItemListContainer;
