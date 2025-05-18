"use client"
import { useCart } from "../contexts/CartContext";

const Checkout = ()=>{

    const {cartItems} = useCart()

    return (
        <div className="container border border-dark vh-100">
            
        </div>
    )
}

export default Checkout;