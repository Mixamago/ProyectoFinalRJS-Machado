import React, { createContext, useContext, useState } from 'react'

const CartContext = React.createContext({
    items:[],
    purchase: () => {},
    empty: () => {}
})
const QuickCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    const purchase = (item) => {
        const target = items.find((i) => i.id == item.id);
        if(target !== undefined){
            console.log("Ese artículo ya está")
            console.log("Ahora tienes:" + target.comprado)
            target.comprado = target.comprado + 1
        }
        else{
            console.log("Este artículo no está")
            setItems(items => [...items, item])
        }
    }
    const borrar = (item) => {
        const tempList = items
        console.log(tempList)
        const target = tempList.find((i) => i.id == item.id);
        console.log(target)
        if(target.comprado === 1 ){
            let targetIndex = tempList.findIndex(i => i.id == item.id)
            console.log(targetIndex)
            tempList.splice(targetIndex, 1)
            console.log(tempList)
            setItems(tempList)
        }
        else{
            target.comprado = target.comprado - 1
            setItems(tempList)
            console.log(tempList)
        }
    }

    const empty = () => {
        setItems([])
    }
    const cart = {
        items:items,
        purchase:purchase,
        empty:empty,
        borrar:borrar
    }



    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider, QuickCart}