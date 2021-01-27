import React from 'react';
import Item from "./Item";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({items}) => {

	return (
		<Row>
			{items.map(item =>
				<Item key={item.id.toString()} item={item}/>
			)}
		</Row>
	);
};

export default ItemList;
