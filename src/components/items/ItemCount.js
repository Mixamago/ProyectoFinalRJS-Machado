import React, { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';

const ItemCount = (stock) => {

    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(false);
    const insideCart = useContext(CartContext);

    const addCount = () => {
            if(count < stock.stock){
                setCount(count + 1);
            }
    };

    const subsCount = () => {
        if(count !== 0){
            setCount(count - 1);
        }
    }

    const subsItem = () => {
        console.log(add)
        setAdd(false)
        setCount(0)
    }

    return (
    <>
        <div className="flex flex-col gap-3">
            {add ?
                <button onClick={subsItem} className="btn w-48 bg-brown text-white border-brown border-2 hover:bg-gold hover:text-brown">Ver el carrito</button>
            :
                <>
                    <div className="flex justify-between">
                        <button onClick={subsCount} className="btn text-2xl font-bold mx-3 bg-brown text-white border-brown border-2 hover:bg-gold hover:text-brown">-</button>
                        <div className="self-center text-brown text-4xl">{count}</div>
                        <button onClick={addCount} className="btn text-2xl font-bold mx-3 bg-brown text-white border-brown border-2 hover:bg-gold hover:text-brown">+</button>                
                    </div>
                </>
            }
        </div>
    </>
    )
}

export default ItemCount