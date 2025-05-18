"use client"
import React, { useState, useEffect } from 'react';
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { toast } from 'react-toastify';
import { useCart } from '@/app/contexts/CartContext';

const Product = ({ params }) => {
    const { id } = React.use(params);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [availableColors, setAvailableColors] = useState([]);
    const [productImages, setProductImages] = useState([]);

    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product: ${response.status}`);
                }
                const data = await response.json();
                // make changes as currently for fakeapi
                setProduct(data.product);   
                setLoading(false);

                // Simulate fetching available sizes and colors (replace with actual API data if available)
                const sizes = ['S', 'M', 'L', 'XL'];
                const colors = ['Red', 'Blue', 'Green', 'Black'];
                setAvailableSizes(sizes);
                setAvailableColors(colors);


                setProductImages([data.product.image])   // change to take product images, currently only for fake api
                
                
                if (sizes.length > 0) setSelectedSize(sizes[0]);
                if (colors.length > 0) setSelectedColor(colors[0]);

            } catch (err) {
                setError(err.message || "An error occurred while fetching the product.");
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.warning("Please select a size", {
                className: "bg-warning text-white",
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
            }
            )
            return;
        }
        if (!selectedColor) {
            toast.warning("Please select a size", {
                className: "bg-warning text-white",
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
            })
            return;
        }
        console.log("Adding to cart:", {
            product,
            selectedSize,
            selectedColor,
            quantity
        });
        let productSelected = [product, selectedSize, selectedColor, quantity]
        addToCart(productSelected)
        toast.success(`Added to cart successfully!`, {
            className: "bg-success text-white",
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
        }
        )
    };





    if (loading) {
        return (
            <>
                <Navbar />
                <main className='container vh-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </main>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Navbar />
                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-danger fs-3">Error fetching product details. Please try again later.</p>
                </div>
                <Footer />
            </>
        );
    }

    // if (!product || !product.images || product.images.length === 0) {
    //     return (
    //         <>
    //             <Navbar />
    //             <div className="container-lg">
    //                 <p>Product not found or has no images.</p>
    //             </div>
    //             <Footer />
    //         </>
    //     );
    // }

    return (
        <>
            <Navbar />
            <main className="container">
                <div className="row row-cols-1 rows-cols-md-2 px-2 py-3">
                    <div className="col-md-6">
                        <div className="carousel slide" id="imageView">
                            <div className="carousel-indicators">
                                {productImages.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#imageView"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? "active" : ""}
                                        aria-current={index === 0 ? "true" : undefined}
                                        aria-label={`Slide ${index + 1}`}
                                    ></button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {productImages.map((image, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img src={image} className="d-block w-100 rounded-3" alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#imageView" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#imageView" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-column">
                            <div className="fs-4 fw-bolder">{product.title}</div>
                            {typeof product.price !== 'undefined' && <div className="mt-2 fw-bold">Price: ₹{product.price}</div>}
                            {product.description && <div className="mt-2 text-body-secondary">{product.description}</div>}
                            <div className='container p-3 my-2 gap-4'>
                                <div className='d-flex gap-2 mb-2'>
                                    <div className='fs-6 fw-bold'>Size</div>
                                </div>
                                <div className='d-flex gap-2 flex-wrap mb-2'>
                                    {   // add here size options
                                        Array.from(availableSizes).map((size, index) => {
                                            return (
                                                <div className='form-check' key={`size-${index}`}>
                                                    <input className='btn-check' id={`size-${index}`} name="size-base" type='radio' value={size} onChange={(e) => setSelectedSize(e.target.value)} />
                                                    <label htmlFor={`size-${index}`} className={`btn ${selectedSize === size ? 'active' : ''}`}>{size}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* // for color */}
                                <div className='d-flex gap-2 mb-2'>
                                    <div className='fs-6 fw-bold'>Color</div>
                                </div>
                                <div className='d-flex gap-2 flex-wrap mb-2'>
                                    {   // add here color options
                                        Array.from(availableColors).map((color, index) => {
                                            return (
                                                <div className='form-check' key={`color-${index}`}>
                                                    <input className='btn-check' id={`color-${index}`} name="color-base" type='radio' value={color} onChange={(e) => setSelectedColor(e.target.value)} />
                                                    <label htmlFor={`color-${index}`} className={`btn ${selectedColor === color ? 'active' : ''}`}>{color}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* quantity */}
                                <div className='d-flex gap-2 mb-2'>
                                    <div className='fs-6 fw-bold'>Quantity</div>
                                </div>
                                <div className='d-flex gap-2 mb-2'>
                                    <div className="input-group">
                                        <div type='button' className='btn btn-primary' onClick={(e) => setQuantity(quantity - 1)}>-</div>
                                        <div className='d-flex bg-white justify-content-center align-items-center w-25'>{quantity}</div>
                                        <div type='button' className='btn btn-primary' onClick={(e) => setQuantity(quantity + 1)}>+</div>
                                    </div>
                                </div>
                                <div className='d-flex gap-2 mt-5'>
                                    <button className='btn btn-outline-primary w-100' onClick={handleAddToCart}><i className='bi bi-cart-plus'></i> Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Product;