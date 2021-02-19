import React, {useContext} from 'react';
import './CartWidget.css'
import * as Icon from 'react-bootstrap-icons'
import {CartContext} from "../../context/CartContext";

const CartWidget = () => {
	const cartContext = useContext(CartContext);

	return (
		<div>
			<Icon.Cart3 className="product-cart" id="cart-icon" size="32"/>
			<span className='badge badge-warning' id='cart-label-count'>{cartContext.getQuantity()}</span>
		</div>
	);
};

export default CartWidget;
