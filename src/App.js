import './App.css';
import React, {useState} from "react";
import {Navbar} from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {CartContext} from "./cartContext"

function App() {

	// const [arr, setArr] = useState([])

	return (
		<BrowserRouter>
			<CartContext.Provider value={[1,2,3,4]}>
				<Navbar/>
				<Switch>
					<Route path='/item/:idProduct'>
						<ItemDetailContainer/>
					</Route>
					<Route path='/category/:idCategory'>
						<ItemListContainer/>
					</Route>
					<Route path='/'>
						<ItemListContainer/>
					</Route>
				</Switch>
			</CartContext.Provider>
		</BrowserRouter>
	);
}

export default App;
