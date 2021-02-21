import React, {useContext, useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ItemDetail.css'
import Container from "react-bootstrap/Container";
import ItemCount from "../Item/ItemCount";
import {Link, NavLink, useHistory} from "react-router-dom";
import {CartContext} from "../../context/CartContext"
import Button from "react-bootstrap/Button";

const ItemDetail = ({item}) => {

	const history = useHistory();
	const [productQuantity, setProductQuantity] = useState(0)
	const [showButonFinish, setShowButonFinish] = useState(false)
	const [stockText, setStockText] = useState("sin stock")
	const context = useContext(CartContext)

	const onChange = (quantity) => {
		setProductQuantity(quantity)
	}

	const addToCart = () => {
		context.addProduct(item, productQuantity)
	}

	const buy = () => {
		context.addProduct(item, productQuantity)
		history.push('/cart');
	}

	useEffect(() => {
		setShowButonFinish(productQuantity > 0)
	}, [productQuantity])

	useEffect(() => {
		//Evalua el texto del stock
		setStockText((item.stock > 0) ? (item.stock == 1) ? "Última disponible!" : `${item.stock} disponibles` : "sin stock")
	}, [item])

	return (
		<Container className="item-detail">
			<Row>
				<Col xs={9}>
					<div className="text-center">
						<img src={item.image} alt={item.description} className="img-fluid big-image"/>
					</div>
				</Col>
				<Col xs={3} className="detail">
					<h5>{item.title}</h5>
					<div className='price'>${item.price}</div>
					<div className='stock'>{stockText}</div>

					<Row>
						<Col className="mt-2">
							{item && <ItemCount onChange={onChange} initial="0" stock={item.stock}/>}
						</Col>
					</Row>

					<Row>
						<Col className="mt-4" >
							{showButonFinish && <Button onClick={buy} variant="success" block>Comprar Ahora</Button>}
						</Col>
					</Row>

					<Row>
						<Col className="mt-2" >
							{showButonFinish && <Button onClick={addToCart} variant="secondary" block>Agregar al carrito</Button>}
						</Col>
					</Row>

				</Col>
			</Row>
			<Row>
				<Col className="mt-1">
					<h3>Descripción</h3>
					{item.description}
				</Col>
			</Row>

		</Container>
	);
};

export default ItemDetail;
