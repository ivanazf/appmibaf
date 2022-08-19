import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asynMock';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
        //console.log(products)
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()
    
   
    //useEffect(() => {
    //    const onResize = () => {
    //        console.log('cambio tamaño de ventana')
    //    }
    //    window.addEventListener('resize', onResize)
    //}, [])
    
    //return () => {
    //    window.removeEventListener('resize', onResize)
    //}
    useEffect(()=> {
        window.addEventListener('resize',() => console.log('Cambié el tamaño de ventana'))
        
        return () => {

        }
    }, [])

    useEffect(() => {
        setLoading(true)
        const asynFunction = categoryId ? getProductsByCategory : getProducts

        asynFunction(categoryId).then(products => {
            setProducts(products)
        }).catch(error =>{
            console.log(error)
        }).finally (()=>{
            setLoading(false)
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
        <div>
            <h1>{greeting}</h1>
                <h2>{categoryId || ''}</h2>
                    {/*<ul>*/}
                    {/*{productsComp}*/}
                    {/*{products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>*/}
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;