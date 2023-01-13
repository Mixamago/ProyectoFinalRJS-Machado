import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({id, nombre, precio, imagen, detalle}) => {
    return (
        <div className="card border-2 border-brown w-52 bg-white mx-5 mt-10 rounded-lg">
            <figure className="border-b-2 border-b-brown">
                <img src={imagen} alt="Shoes" className="" />
            </figure>
            <div className="card-body p-2 items-center text-center">
                <h2 className="card-title text-2xl text-black">{nombre}</h2>
                <p className="text-black">{detalle}</p>
                <p className="text-xl text-gold font-bold">${precio.toLocaleString()}</p>
                <div className="card-actions">
                    <NavLink to={`item/${id}`} className="btn bg-brown text-white border-brown border-2 hover:bg-gold hover:text-brown">Más información</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item