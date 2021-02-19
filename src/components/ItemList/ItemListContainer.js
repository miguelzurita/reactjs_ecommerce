import React, {useEffect, useState} from 'react';
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

import {getFireStore} from "../../firebase";

const ItemListContainer = () => {

	const [products, setProducts] = useState([])
	const {idCategory} = useParams()

	//Al recibir el parametro
	useEffect(() => {
		// setLoading(true)
		const itemCollection = getFireStore().collection("products");

		let listProducts = itemCollection;

		//si hay una categoria se filtran los productos
		if (idCategory > 0) {
			listProducts = itemCollection.where('idCategory', '==', idCategory);
		}

		//consultar a firebase los productos
		listProducts.get().then((querySnapshot) => {
			if (querySnapshot.size === 0) {
				// console.log("no results");
				setProducts([])
			} else {
				setProducts(querySnapshot.docs.map(doc => {
					return {...doc.data(), id: doc.id}
				}))
			}
		}).catch((error) => {
			console.log("error al recuperar los productos");
			console.log(error);
		}).finally();

	}, [idCategory])

	return (
		<Container>
			<ItemList items={products}/>
		</Container>
	);
};

export default ItemListContainer;
