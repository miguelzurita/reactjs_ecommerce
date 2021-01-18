import React from 'react';

const Item = ({item}) => {
	return (
		<div>
			<div>{item.title}</div>
			<div>{item.price}</div>
			<img src={item.pictureUrl} alt={item.description}/>
		</div>
	);
};

export default Item;
