import React, { useEffect, useState } from 'react'
import { QuickCart } from '../context/CartContext'

const CartContainer = () => {
    const {items, empty, borrar} = QuickCart()
    const [row, setRow] = useState(items)
    const deleteItem = (item) => {
        borrar(item)
        setRow([...items])
    }

    useEffect(() => {
        setRow([...items])
    }, [items])
    
    const scanCart = () => { 
        console.log(items)
        console.log(row)
    }

    return (
        <div className="text-3xl text-black m-20 py-4">
            <div className="text-6xl text-center font-bold">Carrito</div>
            <table className="table-fixed mx-auto my-10">
                <thead className="bg-brown text-white border-2 border-brown text-2xl">
                    <tr>
                        <th className="px-4">Imagen</th>
                        <th className="px-4">Producto</th>
                        <th className="px-4">Precio</th>
                        <th className="px-4">Cantidad</th>
                        <th className="px-4">Subtotal</th>
                        <th className="px-4">Eliminar</th>
                    </tr>
                </thead>
                <tbody className="bg-white text-black border-2 border-brown">
                    {row.length !== 0 ? 
                                        row.map(i => 
                        <tr key={i.codigo} className="border-2 border-brown py-2 text-center">
                            <td className="text-2xl py-4 px-2"><img src={i.imagen} alt="" className="w-24"/></td>
                            <td className="text-2xl py-4 px-2">{i.nombre}</td>
                            <td className="text-2xl py-4 px-2">${i.precio}</td>
                            <td className="text-2xl py-4 px-2">{i.comprado}</td>
                            <td className="text-2xl py-4 px-2">${i.precio*i.comprado}</td>
                            <td className="text-2xl py-4 px-2"><button className="btn bg-brown text-white" onClick={() => deleteItem(i)}>Eliminar</button></td>
                        </tr>
                    )
                    :
                        <tr className="border-2 border-brown py-2 text-center">
                            <td className="text-2xl py-4 px-2">Vacío</td>
                            <td className="text-2xl py-4 px-2">Vacío</td>
                            <td className="text-2xl py-4 px-2">Vacío</td>
                            <td className="text-2xl py-4 px-2">Vacío</td>
                            <td className="text-2xl py-4 px-2">Vacío</td>
                            <td className="text-2xl py-4 px-2">Vacío</td>
                        </tr>
                    }
                    

                </tbody>
            </table>
            <div className="text-center">
                <button className="btn bg-brown text-white mx-4" onClick={empty}>Vaciar carrito</button>
                <button className="btn bg-brown text-white mx-4" onClick={scanCart}>Revisar carrito</button>
            </div>
        </div>
    )
}

export default CartContainer