import {useEffect} from 'react';

const MercadoLibre = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?=auto')
        .then(response => response.json())
            .then(json => {
                setProducts(json.results)
            })
               
    }, [])
    console.log(products)
    return(
        <>
            <h1>MercadoLibre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange=
            </form>
            <div>
                {products.map(prod => {
                    return (
                        <div dhey={prod.id}>
                            <p>{prod.title}</p>
                            <img src={prod.thumbnail} alt={prod.title}/>

                    )
                })}
            </div>
    )
}

export default MercadoLibre;