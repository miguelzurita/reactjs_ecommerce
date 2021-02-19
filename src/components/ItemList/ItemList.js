import React from 'react';
import Item from "./../Item/Item";

import Row from "react-bootstrap/Row";

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
