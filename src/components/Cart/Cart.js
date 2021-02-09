import React, {useContext} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {CartContext} from "../../CartContext"
import {Link} from "react-router-dom";
import {Button, ListGroup} from "react-bootstrap";

const Cart = () => {

	const context = useContext(CartContext);

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
						</ListGroup>
					)}
				</Col>
			</Row>

		</Container>
	);
};

export default Cart;
