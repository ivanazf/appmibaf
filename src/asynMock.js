const products = [
    {
        id: '' , 
        name: '', 
        price: '', 
        category: 'Ropa interior femenina',
        img: '',
        stock: '',
        description: '', 
    },
    {
        id: '', 
        name: '', 
        price: '', 
        category: '',
        img: '',
        stock: '',
        description: '', 
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
       
    })
}



