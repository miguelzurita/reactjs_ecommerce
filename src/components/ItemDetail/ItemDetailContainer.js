import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

	const [product, setProduct] = useState([])

	let listProducts = [
		{id: 0, title: 'zapatilla', description: 'desc 1', stock: 55, price: 10, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla'},
		{id: 1, title: 'Remera', description: 'desc 2', stock: 67, price: 20, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera'},
		{id: 2, title: 'Jean', description: 'desc 3', stock: 71, price: 30, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean'}
	]
	let productObject = {id: 0, title: 'zapatilla', description: 'desc 1', stock: 55, price: 10, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla'}

	let promise = new Promise((resolve, reject) => {
		let timeout = 2000;
		setTimeout(function () {
			resolve(productObject);
		}, timeout);
	});

	useEffect(() => {
		promise.then((resultado) => {
			setProduct(resultado)
		}, (error) => {
			console.log("error")
		})
	}, []);

	return (
		<Row>
			<ItemDetail item={product}/>
		</Row>
	);
};

export default ItemDetailContainer;
