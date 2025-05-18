"use client"
import { useCart } from "../contexts/CartContext";
import CartView from "./cartview";


const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <>  
      <nav className="navbar navbar-expand-lg sticky-top p-3 translucent fw-light">
        <div className="container">
          <a className="navbar-brand fw-bold" type="button" href="/">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="ClothCrafters" width="30" height="24" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapsed" aria-controls="navbarCollapsed" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapsed">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 nav-underline" id="myTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link" aria-current="page" href="/"><i className="bi bi-house"></i> Home</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" aria-current="page" href="/products"><i className="bi bi-shop"></i> Shop</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" aria-current="page" href="/about-us"><i className="bi bi-person"></i> About Us</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" aria-current="page" role="button" data-bs-toggle="offcanvas" href="#cartoffcanvas">
                  <span className="bi bi-cart"> Cart ({cartItems.length})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartView />
    </>
  )
}

export default Navbar;