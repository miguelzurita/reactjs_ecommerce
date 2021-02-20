import React, {useContext, useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ItemDetail.css'
import Container from "react-bootstrap/Container";
import ItemCount from "../Item/ItemCount";
import {Link, NavLink} from "react-router-dom";
import {CartContext} from "../../context/CartContext"
import Button from "react-bootstrap/Button";

const ItemDetail = ({item}) => {

	const [productQuantity, setProductQuantity] = useState(0)
	const [showButonFinish, setShowButonFinish] = useState(false)
	const [stockText, setStockText] = useState("sin stock")
	const context = useContext(CartContext)

	const onChange = (quantity) => {
		setProductQuantity(quantity)
	}

	const buy = () => {
		context.addProduct(item, productQuantity)
	}

	useEffect(() => {
		setShowButonFinish(productQuantity > 0)
	}, [productQuantity])

	useEffect(() => {
		//Evalua el texto del stock
		setStockText((item.stock > 0) ? (item.stock == 1) ? "Última disponible!" : `${item.stock} disponibles` : "sin stock")
	}, [item])

	return (
		<Container>
			<Row>
				<Col>
					<div className="text-center">
						<img src={item.image} alt={item.description} className="img-fluid big-image"/>
					</div>
				</Col>
				<Col>
					<h5>{item.title}</h5>
					<div className='price'>${item.price}</div>
					<div className='stock'>{stockText}</div>

					<Row>
						<Col>
							{item && <ItemCount onChange={onChange} initial="0" stock={item.stock}/>}
						</Col>
						<Col className="">
							{showButonFinish && <Button onClick={buy} block>Agregar</Button>}
						</Col>
					</Row>

					<Row>
						<Col className="text-center">
							{showButonFinish &&
							<Link to='/cart'>
								<Button variant="success" block>Comprar</Button>
							</Link>}
						</Col>
					</Row>

				</Col>
			</Row>
			<Row>
				<Col>
					<h3>Descripción</h3>
					{item.description}
				</Col>
			</Row>

		</Container>
	);
};

export default ItemDetail;
