import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const { idCategory } = useParams()

    return (
        <ItemList param={idCategory}/>
    )
}

export default ItemListContainer