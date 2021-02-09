import React, {useEffect, useState, createContext} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [products, setProducts] = useState([])

	const addProduct = (product, quantity) => {
		product.quantity = quantity
		if (!isInCart(product.id)) {
			// console.log("no existe lo agrego");
			//agregar
			setProducts([...products, product])
		} else {
			//modificar cantidad
			setProducts(products.map(item => item.id === product.id ? product : item))
		}
	}

	useEffect(() => {
		// console.log("products:" + products.length)
		console.log("products:")
		console.log(products);
		console.log("length:" + products.length);
	}, [products])

	const removeProduct = (idProduct) => {
		console.log("remover producto:" + idProduct);
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

	// return <CartContext.Provider value={[addProduct, removeProduct, clear, products, children]}>
	// return <CartContext.Provider value={[addProduct, removeProduct, clear, products]}>
	return (
		<CartContext.Provider value={{products, addProduct, removeProduct, clear, getQuantity, getTotal}}>
			{props.children}
		</CartContext.Provider>
	)
}
