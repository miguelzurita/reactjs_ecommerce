import React, {useEffect, useState, createContext} from "react";

export const CartContext = createContext();

/**
 * Provider Personalizado
 * @param props
 * @returns {*}
 * @constructor
 */
export const CartProvider = (props) => {
	const [products, setProducts] = useState([])

	const addProduct = (product, quantity) => {
		product.quantity = parseInt(quantity)
		if (!isInCart(product.id)) {
			// console.log("no existe lo agrego");
			//agregar
			setProducts([...products, product])
		} else {
			//modificar cantidad
			setProducts(products.map(item => item.id === product.id ? product : item))
		}
	}

	const removeProduct = (idProduct) => {
		setProducts(products.filter((element) => element.id !== idProduct));
	}

	const clear = () => {
		setProducts([])
	}

	const isInCart = (idProduct) => {
		return products.some(item => item.id === idProduct)
	}

	const getQuantity = () => {
		let amount = 0;
		products.map((item) => (amount = amount + item.quantity));
		return amount;
	};

	const getTotal = () => {
		let total = 0;
		products.map((item) => (total = total + item.price * item.quantity));
		return total;
	};

	return (
		<CartContext.Provider value={{products, addProduct, removeProduct, clear, getQuantity, getTotal}}>
			{props.children}
		</CartContext.Provider>
	)
}
