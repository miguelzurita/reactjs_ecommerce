import './App.css';
import React from "react";
import {Navbar} from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
	return (
		<>
			<Navbar/>
			<Container>
				{/*<Row>
					<Col><h2 className="title">Las ofertas de la semana</h2></Col>
				</Row>*/}
				{/*<Row>
					<Col>
						<ItemListContainer/>
					</Col>
				</Row>*/}
				<h2 className='text-center'>Item Detail Container</h2>
				<Row>
					<Col>
						<ItemDetailContainer/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;
