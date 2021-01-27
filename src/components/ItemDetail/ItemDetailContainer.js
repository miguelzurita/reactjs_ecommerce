import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

	const [product, setProduct] = useState([])
	const {idProduct} = useParams()

	function simulaAPICall(productObject) {
		let promise = new Promise((resolve, reject) => {
			let timeout = 2000;
			setTimeout(function () {
				resolve(productObject);
			}, timeout);
		});

		promise.then((resultado) => {
			setProduct(resultado)
		}, (error) => {
			console.log("error")
		})
	}

	useEffect(() => {
		let listProducts = [
			{id: 1, id_category: 1, title: 'zapatilla', description: 'desc 1', stock: 2, price: 10, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla'},
			{id: 2, id_category: 2, title: 'Remera', description: 'desc 2', stock: 3, price: 20, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera'},
			{id: 3, id_category: 3, title: 'Jean', description: 'desc 3', stock: 4, price: 30, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean'},
			{id: 4, id_category: 1, title: 'zapatilla 2', description: 'desc 1', stock: 2, price: 15, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla22'},
			{id: 5, id_category: 2, title: 'Remera 2', description: 'desc 2', stock: 4, price: 25, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera22'},
			{id: 6, id_category: 3, title: 'Jean 2', description: 'desc 3', stock: 5, price: 35, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean22'},
		]

		let productObject = listProducts.filter(product => product.id.toString().includes(idProduct))[0];
		console.log(productObject);
		simulaAPICall(productObject);
	}, [idProduct]);

	return (
		<Row>
			<ItemDetail item={product}/>
		</Row>
	);
};

export default ItemDetailContainer;
