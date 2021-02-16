import React, {useContext, useEffect, useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {CartContext} from "../../CartContext"
import {Link} from "react-router-dom";
import {Button, Form, ListGroup} from "react-bootstrap";
import {getFireStore} from "../../firebase";
import firebase from "firebase";
import Item from "../Item";

const Cart = () => {

	const context = useContext(CartContext);
	const [idOrder, setIdOrder] = useState();

	const [userData, setUserData] = useState({
		name: '',
		phone: '',
		email: '',
		emailVerification: '',
	});

	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		setDisabled(!Object.values(userData).some(property => (property === "")) && (userData.email === userData.emailVerification));
	}, [userData])

	const handleChange = (event) => {
		setUserData({...userData, [event.target.id]: event.target.value});
	};

	const updateStock = async (db) => {
		const productsToUpdate = db.collection("products")
			.where(firebase.firestore.FieldPath.documentId(), 'in', context.products.map(item => item.id))
		;
		const query = await productsToUpdate.get();
		const batch = db.batch();
		const outOfStock = [];
		query.docs.forEach((docSnapshot, idx) => {
			if (docSnapshot.data().stock >= context.products[idx].quantity) {
				batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - context.products[idx].quantity});
			} else {
				outOfStock.push({...docSnapshot.data(), id: docSnapshot.id});
			}
		})
		batch.commit()
	}

	const finish = () => {
		const db = getFireStore()
		const orders = db.collection("orders");

		const newOrder = {
			buyer: userData,
			items: context.products,
			date: firebase.firestore.Timestamp.fromDate(new Date()),
			total: context.getTotal()
		}

		orders
			.add(newOrder)
			.then(({id}) => {
				// setLoading(true);
				console.log("orden creada:");
				console.log(id);
				setIdOrder(id)
				// updateStock(db);


				// let document = products.doc('3232')
				// document.update({stock: 3})

				// const batch = db.batch()
				// batch.update(doc, {stock: 1})
				// batch.commit().then()

			})
			.catch((error) => console.log("ocurrio un error"))
			.finally(() => console.log("termino el proceso"))
		;
	}

	return (
		<Container>
			<Row>
				<Col>
					<h1>Carrito</h1>
					{context.products.length === 0 ? (
						<div className="empty-cart">
							<h2>No hay productos.</h2>
							<Link to="/">
								<Button variant="primary">Home</Button>
							</Link>
						</div>
					) : (
						<ListGroup>
							{context.products.map((item) => (
								<ListGroup.Item key={item.id}>
									<Row className="align-items-center">
										<Col xs={2} className="text-center">
											<Button variant="danger" onClick={() => context.removeProduct(item.id)}>Eliminar</Button>
											<br/>
											<i>{item.quantity} unidades</i>
										</Col>
										<Col xs={3} className="text-center">
											<img src={item.pictureUrl} alt={item.title}/>
										</Col>
										<Col>
											<div>
												<h5>{item.title}</h5>
												<h4>${item.price}</h4>
											</div>
										</Col>
									</Row>
								</ListGroup.Item>
							))}
							<h2>Cantidad: {context.getQuantity()}</h2>
							<h2>Total: ${context.getTotal()}</h2>
							<br/>

							<h2>Datos del comprador</h2>

							<Form>
								<Form.Group controlId="name">
									<Form.Label>Nombre</Form.Label>
									<Form.Control placeholder="Ingrese su nombre" onChange={handleChange}/>
								</Form.Group>
								<Form.Group controlId="phone">
									<Form.Label>Teléfono</Form.Label>
									<Form.Control placeholder="Ingrese su teléfono" onChange={handleChange}/>
								</Form.Group>
								<Form.Group controlId="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="Ingrese su email" onChange={handleChange}/>
								</Form.Group>
								<Form.Group controlId="emailVerification">
									<Form.Label>Repetir Email</Form.Label>
									<Form.Control type="email" placeholder="Repita su email" onChange={handleChange}/>
								</Form.Group>

								<Button disabled={!disabled} variant="success" onClick={finish}>Confirmar Compra</Button>
								{idOrder && <div>Tu orden generada: {idOrder}</div>}
							</Form>

						</ListGroup>
					)}
				</Col>
			</Row>

		</Container>
	);
};

export default Cart;
