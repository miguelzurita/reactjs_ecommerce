import React from 'react';
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";

const Item = ({item}) => {
	return (
		<Col>
			<Link to={`/item/${item.id}`}>
				<div>{item.title}</div>
				<div>{item.price}</div>
				<img src={item.pictureUrl} alt={item.description}/>
			</Link>
		</Col>
	);
};

export default Item;
