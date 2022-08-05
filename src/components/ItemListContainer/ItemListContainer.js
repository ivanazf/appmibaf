import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asynMock';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    //console.log(products)

    const { categoryId } = useParams()
        
    useEffect(() => {
        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId).then(products => {
            setProducts(products)
        })


    //    if(!categoryId) {
    //      getProducts().then(products => {
    //            setProducts(products)
    //    })
    // }else{
    //    getProductsByCategory(categoryId).then(products => {
    //        setProducts(products)
    //    })
    // }
    }, [categoryId]);

    // const productsComp = products.map(prod=> <li key={prod.id}>{prod.name}</li>)
    //console.log(productsComp)
    return (
        <>
            <h1>{greeting}</h1>
            {/*<ul>*/}
                {/*{productsComp}*/}
                {/*{products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>*/}
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;