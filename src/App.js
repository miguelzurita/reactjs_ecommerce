import './App.css';
import React from "react";
import {Navbar} from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	return (
		<>
			<Navbar/>
			<Container>
				<Row>
					<Col><h2 className="title">Las ofertas de la semana</h2></Col>
				</Row>
				<Row>
					<Col>
						<ItemListContainer/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
