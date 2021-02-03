import './App.css';
import React from "react";
import {Navbar} from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";

import {CartProvider} from "./CartContext";

function App() {

	return (
		<BrowserRouter>
			<CartProvider>
				<Navbar/>
				<Switch>
					<Route path='/cart'>
						<Cart />
					</Route>
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
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
