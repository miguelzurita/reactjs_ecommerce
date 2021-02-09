import React, {useContext} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {CartContext} from "../../CartContext"
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

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
						<ul>
							{context.products.map((item) => (
								<li key={item.id}>
									<img src={item.pictureUrl} alt={item.title}/>
									<div>
										<h4>{item.title}</h4>
										<i>{item.quantity} unidades</i>
										<b>${item.price}</b>
										<Button
											variant="danget"
											onClick={() => context.removeProduct(item.id)}
										>Eliminar</Button>
									</div>
								</li>
							))}
							<h2>Cantidad: {context.getQuantity()}</h2>
							<h2>Total: ${context.getTotal()}</h2>
						</ul>
					)}
				</Col>
			</Row>

		</Container>
	);
};

export default Cart;
