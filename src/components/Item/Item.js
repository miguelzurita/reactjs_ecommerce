import React from 'react';
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './Item.css'

const Item = ({item}) => {
	return (
		<Col className="col-sm-3 text-center item mb-4">
			<Link to={`/item/${item.id}`}>
				<Card>
					<Card.Body>
						<h4>{item.title}</h4>
						<img src={item.pictureUrl} alt={item.description} className="img-fluid mb-2"/>
						<h5>$ {item.price}</h5>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default Item;
