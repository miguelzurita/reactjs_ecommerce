import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ItemDetail.css'
import Container from "react-bootstrap/Container";
import ItemCount from "../ItemCount";
import {Link, NavLink} from "react-router-dom";

const ItemDetail = ({item}) => {

	const [productQuantity, setProductQuantity] = useState(0)
	const [showButonFinish, setShowButonFinish] = useState(false)

	const onAdd = (quantity) => {
		setProductQuantity(quantity)
	}

	useEffect(()=>{
		if (productQuantity > 0) {
			setShowButonFinish(true)
		}else{
			setShowButonFinish(false)
		}
	}, [productQuantity])

	return (
		<Container>
			<Row>
				<Col>
					<div className="text-center">
						<img src={item.pictureUrl} alt={item.description}/>
					</div>

				</Col>
				<Col>
					<h5>{item.title}</h5>
					<div className='price'>${item.price}</div>
					{item && <ItemCount onAdd={onAdd} initial="0" stock={item.stock}/>}
					<Row>
						<Col className="text-center">
							{showButonFinish && <NavLink to='/cart'>Terminar compra</NavLink>}
						</Col>
					</Row>

				</Col>
			</Row>
			<Row>
				<Col>
					<h3>Description</h3>
					{item.description}
				</Col>
			</Row>

		</Container>
	);
};

export default ItemDetail;
