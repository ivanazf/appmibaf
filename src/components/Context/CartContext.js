import { useState, createContext } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart,productToAdd])
        } else {
             const cartUpdate = cart.map(prod => {
                if(prod.id === productToAdd = {
                    const productUpdated = {
                    ...prod,
                    quantity:
                }
                return productUpdated
                }else {
                    return prod
                }
             })
            setCart(cartUpdated)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWhithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWhithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }
return(
    <CartContext.Provider value={{cart, addItem, getQuantity, isInCart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartContext;