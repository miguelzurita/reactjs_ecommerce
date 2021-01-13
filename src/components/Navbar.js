import BootstrapNavbar from "react-bootstrap/Navbar";
import './Navbar.css'
import CartWidget from "./CartWidget";


export const Navbar = () => {
	return (
		<BootstrapNavbar>
			<BootstrapNavbar.Brand href="#home">Mi Ecommerce</BootstrapNavbar.Brand>
			<div className="categories">
				<p className="menu-item">Inicio</p>
				<p className="menu-item">Categorias</p>
				<CartWidget />
			</div>
		</BootstrapNavbar>
	)
}