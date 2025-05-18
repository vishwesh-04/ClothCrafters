"use client"
import { toast } from "react-toastify";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";

const CartView = () => {

    const { cartItems, clearCart } = useCart();

    const calculateTotal = () => {
        let total = 0.0;
        cartItems.forEach(item => {
            // at 0th there is product
            // at 1st there is selectedsize
            // at 2nd there is selectedcolor
            // at 3rd there is quantity
            total += (Number.parseFloat(item[0].price) * Number.parseInt(item[3]))
        });
        return total
    }

    const handleCheckout = () => {
        if (cartItems.length == 0) {
            toast.error("Please add to cart first to checkout", {
                className: "bg-danger text-white",
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
            }
            )
            return
        }

        
    }

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="cartoffcanvas">
                <div className="offcanvas-header border-bottom border-dark">
                    <span className="offcanvas-title fs-4 fw-light">{cartItems.length} items in cart</span>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body p-0">
                    <div className="" id="cart-list">
                        <ul className="list-group list-group-flush">
                            {
                                cartItems.map((item, index) => {
                                    return (
                                        <li className="list-group-item" key={`cart-item-${index}`}>
                                            <CartItem item={item} />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <footer className="container-fluid border-top border-dark gap-3 px-3">
                    <div className="row mt-2">
                        <div className="fs-4 d-flex justify-content-between">
                            <span className="fw-bold">Total:</span><span>₹ {calculateTotal()}</span>
                        </div>
                    </div>
                    <div className="row mb-2 gap-2">
                        <button className="btn btn-outline-success" onClick={handleCheckout}>Checkout <i className="bi bi-basket"></i></button>
                        <button className="btn btn-outline-danger" onClick={() => {
                            clearCart()
                        }}>Clear Cart <i className="bi bi-trash-fill"></i></button>
                    </div>
                </footer>
            </div>
        </>

    )
}


const CartItem = ({ item }) => {
    const { removeFromCart } = useCart();
    return (
        <div className="container">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item[0].image} alt="Image 1" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="d-flex flex-column gap-2">
                        <div className="fw-bolder text-truncate">{item[0].title}</div>
                        <div className="fw-bold">Size: <span className="fw-light">{item[1]}</span></div>
                        <div className="fw-bold">Color: <span className="fw-light">{item[2]}</span></div>
                        <div className="fw-bold">Quantity: <span className="fw-light">{item[3]}</span></div>
                        <div className="d-inline-block"><button className="btn btn-outline-danger" onClick={() => {
                            removeFromCart(item)
                        }}><i className="bi bi-trash fs-4"></i> Remove this item</button></div>
                    </div>
                </div>
            </div>

        </div>
    )
}




export default CartView;