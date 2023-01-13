import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { QuickCart } from '../context/CartContext';

const ItemDetail = () => {
    const {id} = useParams()
    const [item, setItem] = useState()
    const {purchase, items} = QuickCart()

    useEffect(() => {
        let listaProductos = []
        const getItems = async () => {
            const db = getFirestore();
            const collectionRef = collection(db, 'productos')
            const snapshot = await getDocs(collectionRef)
            snapshot.docs.map(d => listaProductos.push({codigo:d.id, ...d.data()}))
            listaProductos = listaProductos.sort((a, b) => a.id - b.id)
            const target = listaProductos.find(i => i.id === parseInt(id))
            setItem(target)
        };
        getItems()
    }, [id])
    const purchaseItem = () => {

        const thisItem = {
            categoria:item.categoria,
            codigo:item.codigo,
            id:item.id,
            imagen:item.imagen,
            nombre:item.nombre,
            precio:item.precio,
            stock:item.stock,
            comprado:1,
        }
        purchase(thisItem);
    }
    
    return (
        <>
            { item && <div className="card card-side bg-white mx-20 my-32 border-2 border-brown border-2">
            <figure className="border-r-2 border-r-brown"><img src={item.imagen} alt=""/></figure>
            <div className="card-body">
                <h2 className="card-title text-black font-bold">{item.nombre}</h2>
                <p className="text-black">{item.detalle}</p>
                <p className="text-black font-bold">${item.precio}</p>
                <p className="text-black font-bold">Stock: {item.stock}</p>
                <div className="card-actions justify-center">
                    <ItemCount stock={item.stock}/>
                    <button onClick={purchaseItem} className="btn w-48 bg-brown text-white border-brown border-2 hover:bg-gold hover:text-brown">Agregar al carrito</button>
                </div>
            </div>
            </div>}
        </>
    )
}

export default ItemDetail