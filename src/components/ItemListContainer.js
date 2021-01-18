import React from 'react';
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
	return (
		<div>
			Texto de ejemplo para reemplazar por el catalogo
			<br/>
			<br/>
			Con stock 5:
			<ItemCount stock="5" initial="1" />

			Sin stock:
			<ItemCount stock="0" initial="0" />

		</div>
	);
};

export default ItemListContainer;
