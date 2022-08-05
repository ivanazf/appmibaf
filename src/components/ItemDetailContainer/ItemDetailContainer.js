import { useState, useEffect } from 'react';
import { getProductById } from '../../asynMock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const params = useParams()
    console.log(params)
    useEffect(() => {
        getProductById('1')
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;