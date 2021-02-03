import * as React from "react";
import {useEffect, useState} from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
	const [products, setProducts] = useState([])

	const addProduct = (product, quantity) => {
		product.quantity = quantity
		if (!isInCart(product.id)) {
			console.log("no existe lo agrego");
			//agregar
			setProducts([...products, product])
		} else {
			console.log("ya existe sumar cantidad");
			console.log(product);
			// const indexProductRemove = products.findIndex(item => item.id === product.id);
			// products[indexProductRemove].quantity = quantity;
			// setProducts([...products, product])
			setProducts(products.map(item => item.id === product.id ? product : item))
			// setProducts(products);
		}
	}

	useEffect(() => {
		// console.log("products:" + products.length)
		console.log("products:")
		console.log(products);
	}, [products])

	const removeProduct = (idProduct) => {
		const indexProductRemove = products.findIndex(item => item.id === idProduct);
		products.splice(indexProductRemove, 1);
		return products;
	}

	const clear = () => {
		setProducts([])
	}

	const isInCart = (idProduct) => {
		return products.some(item => item.id === idProduct)
	}

	// return <CartContext.Provider value={[addProduct, removeProduct, clear, products, children]}>
	// return <CartContext.Provider value={[addProduct, removeProduct, clear, products]}>
	return <CartContext.Provider value={[addProduct, products, setProducts]}>
		{children}
	</CartContext.Provider>
}
