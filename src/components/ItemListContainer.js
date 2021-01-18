import React, {useState} from 'react';
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemListContainer = () => {

	const [products, setProducts] = useState([])

	let listProducts = [
		{id: 0, title: 'zapatilla', description: 'desc 1', stock: 55, price: 10, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=zapatilla'},
		{id: 1, title: 'Remera', description: 'desc 2', stock: 67, price: 20, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=remera'},
		{id: 2, title: 'Jean', description: 'desc 3', stock: 71, price: 30, pictureUrl: 'https://via.placeholder.com/150/000000/FFFFFF/?text=jean'}
	]

	let promise = new Promise((resolve, reject) => {
		let timeout = 2000;
		setTimeout(function () {
			resolve(listProducts);
		}, timeout);
	});

	promise.then((resultado) => {
		setProducts(resultado)
	}, (error) => {
		console.log("error")
	})

	return (

		<div>
			Texto de ejemplo para reemplazar por el catalogo
			<br/>
			<br/>

			<Row>
				<Col>
					Con stock 5: <br/>
					<ItemCount stock="5" initial="1"/>
				</Col>
				<Col>
					Sin stock: <br/>
					<ItemCount stock="0" initial="0"/>
				</Col>
			</Row>

			<Row>
				<h3>
					Listado de items
				</h3>

			</Row>

			<ItemList items={products}/>

		</div>
	);
};

export default ItemListContainer;
