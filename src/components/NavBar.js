import React from "react";
import { Link } from "react-router-dom";
import { QuickCart } from "./context/CartContext";

const NavBar = () => {
    const cartList = QuickCart()
    const cartCount = () => {

    }
    const cartAmount = cartList.length

    return (
    <div className="navbar bg-brown flex justify-between">
        <div>
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white inline-block stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabIndex="0" className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow bg-brown rounded-box w-52">
                    <li><Link to="/category/bombillas">Bombillas</Link></li>
                    <li><Link to="/category/mates">Mates</Link></li>
                    <li><Link to="/category/tapones">Tapones</Link></li>
                    <li><Link to="/category/termos">Termos</Link></li>                   
                </ul>
            </div>
            <Link to='/'><button className="btn btn-ghost normal-case text-xl text-white">Tomate un Mate</button></Link>
        </div>
        <div className="navbar-center hidden lg:flex text-xl">
            <div>
                <Link to="/category/bombillas"><button className="btn mx-12 text-lg bg-brown text-white border-2 border-brown hover:text-gold hover:border-2 hover:border-gold hover:bg-black">Bombillas</button></Link>
                <Link to="/category/mates"><button className="btn mx-12 text-lg bg-brown text-white border-2 border-brown hover:text-gold hover:border-2 hover:border-gold hover:bg-black">Mates</button></Link>
                <Link to="/category/tapones"><button className="btn mx-12 text-lg bg-brown text-white border-2 border-brown hover:text-gold hover:border-2 hover:border-gold hover:bg-black">Tapones</button></Link>
                <Link to="/category/termos"><button className="btn mx-12 text-lg bg-brown text-white border-2 border-brown hover:text-gold hover:border-2 hover:border-gold hover:bg-black">Termos</button></Link>
            </div>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{cartAmount !== undefined ? cartAmount : 0}</span>
                    </div>
                </label>
                <div tabIndex="0" className=" text-center mt-3 card card-compact dropdown-content w-52 bg-ivory shadow border-2 border-brown">
                    <div className="card-body">
                        <span className="font-bold text-lg text-black">{cartAmount !== undefined ? cartAmount : 0} artículos</span>
                        <div className="card-actions">
                            <button className="btn btn-block bg-brown text-white border-2 border-brown hover:bg-gold hover:text-brown"><Link to="/carrito">Ver carrito</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default NavBar;
