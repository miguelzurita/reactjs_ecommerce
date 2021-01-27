import './App.css';
import React from "react";
import {Navbar} from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<Switch>
				<Route path='/item/:id'>
					<ItemDetailContainer/>
				</Route>
				<Route path='/category/:idCategory'>
					<ItemListContainer/>
				</Route>
				<Route path='/'>
					<ItemListContainer/>
				</Route>

			</Switch>
		</BrowserRouter>
	);
}

export default App;
