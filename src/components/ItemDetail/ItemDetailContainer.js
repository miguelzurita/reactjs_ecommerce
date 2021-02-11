import React, {useState, useEffect} from 'react';
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getFireStore} from "../../firebase";

const ItemDetailContainer = () => {

	const [product, setProduct] = useState([])
	const {idProduct} = useParams()

	useEffect(() => {

		if (idProduct != null) {
			let db = getFireStore()
			db.collection('products')
				.doc(idProduct)
				.get()
				.then((docRef) => {
					setProduct(docRef.data())
				})
				.catch((error) => {
					console.log("error al recuperar los productos");
				}).finally();
		}
	}, [idProduct]);

	return (
		<Row>
			<ItemDetail item={product}/>
		</Row>
	);
};

export default ItemDetailContainer;
