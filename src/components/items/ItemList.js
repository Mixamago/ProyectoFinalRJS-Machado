import { useEffect, useState } from "react";
import Item from "./Item";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemList = (param) => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        let listaProductos = []
        const getItems = async () => {
            const db = getFirestore();
            const collectionRef = collection(db, 'productos')
            const snapshot = await getDocs(collectionRef)
            snapshot.docs.map(d => listaProductos.push({codigo:d.id, ...d.data()}))
            listaProductos = listaProductos.sort((a, b) => a.id - b.id)
        };
        const scanItems = () => {
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    resolve(listaProductos);
                }, 2000);
            });
        }
        if(param.param !== undefined){
            getItems()
            scanItems()
                .then(response => {
                    setProducts(response.filter(item => item.categoria === param.param));
                })
        }
        else{
            getItems()
            scanItems()
                .then (response => {
                    setProducts(response)
                })
        }
    }, [param]);
    return (
        <div>
            <div className="flex flex-wrap">
                {products.map(p => <Item key={p.codigo} {...p}/>)}                                          
            </div>
        </div>
    )
}

export default ItemList