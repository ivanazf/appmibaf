const products = [
    {
        id: '5322' , 
        name: 'Conjunto Marcela Koury', 
        price: '$ 1499.99', 
        category: 'Ropa Interior Femenina',
        img: './public/images/5322.d.jpg',
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño triángulo y coulotte', 
    },
    {
        id: '5323', 
        name: 'Conjunto Marcela Koury', 
        price: '', 
        category: 'Ropa Interior Femenina',
        img: '',
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño c/ taza soft con base y colaless', 
    },
    {
        id: '5324', 
        name: 'Conjunto Marcela Koury', 
        price: '', 
        category: 'Ropa Interior Femenina',
        img: './',
        stock: '3',
        description: 'Conjunto Marcela Koury en lycra de corpiño Push Up y vedettina', 
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



