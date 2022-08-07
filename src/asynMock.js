const products = [
    {
        id: '5322' , 
        name: 'Conjunto Marcela Koury', 
        price: '$ 2399.99', 
        category: 'Ropa Interior Femenina',
        img: './5322.d.jpg',
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño triángulo y coulotte', 
    },
    {
        id: '5323', 
        name: 'Conjunto Marcela Koury', 
        price: '$2449.99', 
        category: 'Ropa Interior Femenina',
        img: '',
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño c/ taza soft con base y colaless', 
    },
    {
        id: '5324', 
        name: 'Conjunto Marcela Koury', 
        price: '$2599.99', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño Push Up y vedettina', 
    },
    {
        id: '5328', 
        name: 'Corpiño Marcela Koury', 
        price: '$1799.99', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Corpiño Marcela Koury sin relleno de microfibra', 
    },
    {
        id: '9091', 
        name: 'Corpiño Peter Pan', 
        price: '$4750.00', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Corpiño Peter Pan taza ultra soft microfibra', 
    },
    {
        id: '5300', 
        name: 'Pack x 3 de bombachas', 
        price: '$1399.99', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Vedetina lisa', 
    },
    {
        id: '7300', 
        name: 'Pack x 3 de bombachas', 
        price: '$1499.99', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Vedetina estampada', 
    },
    {
        id: '7100', 
        name: 'Pack x 3 de bombachas', 
        price: '$1360.00', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Colaless estampada', 
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



