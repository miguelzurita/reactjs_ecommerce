import BootstrapNavbar from "react-bootstrap/Navbar";
import './Navbar.css'
import CartWidget from "./CartWidget";
import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {CartContext} from "../CartContext";


export const Navbar = () => {
	const cartContext = useContext(CartContext);

	return (
		<BootstrapNavbar>
			<NavLink to={`/`}>
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
				{
					cartContext.products.length > 0 && (
						<Link to={`/cart`}>
							<CartWidget/>
						</Link>
					)
				}


			</div>
		</BootstrapNavbar>
	)
}