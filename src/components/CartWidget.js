import React from 'react';
import './CartWidget.css'
import * as Icon from 'react-bootstrap-icons'
// import Cart from 'react-bootstrap-icons'

const CartWidget = () => {
	return (
		<div>
			<Icon.Cart3 className="product-cart" id="cart-icon" size="32"/>
			<span className='badge badge-warning' id='cart-label-count'>1</span>
		</div>
	);
};

export default CartWidget;
