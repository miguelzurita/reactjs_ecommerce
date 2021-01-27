import BootstrapNavbar from "react-bootstrap/Navbar";
import './Navbar.css'
import CartWidget from "./CartWidget";
import React from "react";
import {Link, NavLink} from "react-router-dom";


export const Navbar = () => {
	return (
		<BootstrapNavbar>
			<NavLink to={`/`}>
				{/*<BootstrapNavbar.Brand href="#home">Mi Ecommerce</BootstrapNavbar.Brand>*/}
				Ecommerce
			</NavLink>
			<div className="categories">
				<NavLink to={`/`}>
					<p className="menu-item">Catalogo</p>
				</NavLink>
				<NavLink to={`/category/2`}>
					<p className="menu-item">Remeras</p>
				</NavLink>
				<NavLink to={`/category/3`}>
					<p className="menu-item">Jeans</p>
				</NavLink>
				<CartWidget/>
			</div>
		</BootstrapNavbar>
	)
}