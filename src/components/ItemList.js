import React from 'react';
import Item from "./Item";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({items}) => {

	return (
		<Row>
			{items.map(item =>
				<Col>
					<Item key={item.id} item={item}/>
				</Col>
			)}
		</Row>
	);
};

export default ItemList;
