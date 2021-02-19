import React from 'react';
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";

const Item = ({item}) => {
	return (
		<Col className="col-sm-3 text-center">
			<Link to={`/item/${item.id}`}>
				<h4>{item.title}</h4>
				<img src={item.pictureUrl} alt={item.description} className="img-fluid"/>
				<h5>$ {item.price}</h5>
			</Link>
		</Col>
	);
};

export default Item;
