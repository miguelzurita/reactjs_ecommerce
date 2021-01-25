import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './ItemDetail.css'
import Container from "react-bootstrap/Container";

const ItemDetail = ({item}) => {
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
