import BootstrapNavbar from "react-bootstrap/Navbar";
import './Navbar.css'
import CartWidget from "./../CartWidget/CartWidget";
import React, {useContext} from "react";
import {Link, NavLink} from "react-router-dom";
import {CartContext} from "../../context/CartContext";

export const Navbar = () => {
	const cartContext = useContext(CartContext);

	return (
		<BootstrapNavbar>
			<NavLink to={`/`}>
				FilVAR
			</NavLink>
			<div className="categories">
				<NavLink exact={true}  to={`/`} activeClassName='route-active'>
					<p className="menu-item">Catalogo</p>
				</NavLink>
				<NavLink to={`/category/1`} activeClassName='route-active'>
					<p className="menu-item">Aire</p>
				</NavLink>
				<NavLink to={`/category/2`} activeClassName='route-active'>
					<p className="menu-item">Aceite</p>
				</NavLink>
				<NavLink to={`/category/3`} activeClassName='route-active'>
					<p className="menu-item">Combustible</p>
				</NavLink>
				<NavLink to={`/category/4`} activeClassName='route-active'>
					<p className="menu-item">Habitáculo</p>
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