import img5300 from './images/5300.jpg';
import img5322 from './images/5322.d.jpg';
import img5323 from './images/5323.jpg';
import img5324 from './images/5324.jpg';
import img5328 from './images/5328.jpg';
import img7100 from './images/7100.jpg';
import img7300 from './images/7300.jpg';
import img9091 from './images/9091.jpg';

const products = [
    {
        id: '5322' , 
        name: 'Conjunto Marcela Koury', 
        price: '2399.99', 
        category: 'Ropa Interior Femenina',
        img: img5322,
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño triángulo y coulotte', 
    },
    {
        id: '5323', 
        name: 'Conjunto Marcela Koury', 
        price: '2449.99', 
        category: 'Ropa Interior Femenina',
        img: img5323,
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño c/ taza soft con base y colaless', 
    },
    {
        id: '5324', 
        name: 'Conjunto Marcela Koury', 
        price: '2599.99', 
        category: 'Ropa Interior Femenina',
        img: img5324,
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño Push Up y vedettina', 
    },
    {
        id: '5328', 
        name: 'Corpiño Marcela Koury', 
        price: '1799.99', 
        category: 'Ropa Interior Femenina',
        img: img5328,
        stock: '3',
        description: 'Corpiño Marcela Koury sin relleno de microfibra', 
    },
    {
        id: '9091', 
        name: 'Corpiño Peter Pan', 
        price: '4750.00', 
        category: 'Ropa Interior Femenina',
        img: img9091,
        stock: '3',
        description: 'Corpiño Peter Pan taza ultra soft microfibra', 
    },
    {
        id: '5300', 
        name: 'Pack x 3 de bombachas - Ojalá que Sí', 
        price: '1399.99', 
        category: 'Ropa Interior Femenina',
        img: img5300,
        stock: '3',
        description: 'Vedetina lisa confeccionada en algodón y lycra', 
    },
    {
        id: '7300', 
        name: 'Pack x 3 de bombachas - Ojalá que Sí', 
        price: '1499.99', 
        category: 'Ropa Interior Femenina',
        img: img7300,
        stock: '3',
        description: 'Vedetina estampada confeccionada en algodón y lycra', 
    },
    {
        id: '7100', 
        name: 'Pack x 3 de bombachas - Ojalá que Sí', 
        price: '1360.00', 
        category: 'Ropa Interior Femenina',
        img: img7100,
        stock: '3',
        description: 'Colaless estampada confeccionada en algodón y lycra', 
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
       
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
       
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id ))
        }, 500)
       
    })
}



