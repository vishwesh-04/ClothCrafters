"use client"
import { useState, useEffect } from "react";
import Cardview from "../components/cardview";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import Link from "next/link";

export default function Products() {

    // all usestates

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [prodList, setProdList] = useState([]);
    const [sortOpt, setSortOpt] = useState('');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // fetchProd function

    const fetchProd = async () => {
        try {
            const data = await fetch("https://fakestoreapi.in/api/products")
                .then((data) => {
                    return data.json()
                });
            console.log(data.products)
            setIsLoading(false)
            let initialProd = Array.from(data.products)
            let sortedList = initialProd
            console.log(sortedList)
            switch (sortOpt) {
                case "price_asc":
                    sortedList.sort((a, b) => a.price - b.price);
                    break;
                case "price_desc":
                    sortedList.sort((a, b) => b.price - a.price);
                    break;
                case 'name_asc':
                    sortedList.sort((a, b) => a.title.localeCompare(b.name));
                    break;
                case 'name_desc':
                    sortedList.sort((a, b) => b.title.localeCompare(a.name));
                    break;
                default:
                    sortedList = initialProd;
                    break;
            }
            setProdList(sortedList)
        }
        catch (err) {
            setError(err.message || "Error loading products list")
            setIsLoading(false)
        }

    };

    // handlesorting function

    const handleSorting = (opt) => {
        setSortOpt(opt)
    }

    // useeffect function

    useEffect(() => {
        fetchProd();

        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [sortOpt])



    return (

        <>
            <Navbar />

            <main className="container pe-4">
                <div className="row my-auto">
                    <strong className="fs-3">Clothing</strong>
                </div>
                <div className="row my-auto">
                    <div className="d-flex justify-content-end">
                        <div className="btn-group">
                            <button type="button" className={`btn btn-md fw-light dropdown-toggle fs-6 ${(windowWidth < 992) ? "" : "visually-hidden"}`} data-bs-target="#filter" data-bs-toggle="collapse">Filter</button>

                            <button className="btn btn-sm dropdown-toggle fs-6 fw-light mx-auto" type="button" data-bs-toggle="dropdown">Sort by</button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" type="button" onClick={() => {
                                        handleSorting("featured")
                                    }}>Featured</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" type="button" onClick={() => {
                                        handleSorting("price_asc")
                                    }}>Low to High</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" type="button" onClick={() => {
                                        handleSorting("price_desc")
                                    }}>High to Low</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" type="button" onClick={() => {
                                        handleSorting("name_asc")
                                    }}>Name(A to Z)</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" type="button" onClick={() => {
                                        handleSorting("name_desc")
                                    }}>Name(Z to A)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className={`container-lg ${(windowWidth < 992) ? "collapse" : ""}`} id="filter">
                            <div className="d-flex flex-column p-3 border border-tertiary rounded-3 gap-2">
                                <div className="mb-2 fw-bold">Price</div>
                                <div className="input-group flex-column gap-2">
                                    <div>
                                        <input type="radio" className="btn-check" id="price1" name="prices" autoComplete="off" />
                                        <label htmlFor="price1" className="btn">Under ₹500</label>
                                    </div>
                                    <div>
                                        <input type="radio" className="btn-check" id="price2" name="prices" autoComplete="off" />
                                        <label htmlFor="price2" className="btn">₹500 to ₹1000</label>
                                    </div>
                                    <div>
                                        <input type="radio" className="btn-check" id="price3" name="prices" autoComplete="off" />
                                        <label htmlFor="price3" className="btn">₹1000 to ₹2000</label>
                                    </div>
                                    <div>
                                        <input type="radio" className="btn-check" id="price4" name="prices" autoComplete="off" />
                                        <label htmlFor="price4" className="btn">Over ₹2000</label>
                                    </div>
                                </div>

                                <div className="mb-2 fw-bold">Size</div>
                                <div className="input-group flex-column gap-2">
                                    <div>
                                        <input type="radio" className="btn-check" id="size-s" name="sizes" autoComplete="off" />
                                        <label htmlFor="size-s" className="btn">S</label>
                                    </div>
                                    <div>
                                        <input type="radio" className="btn-check" id="size-m" name="sizes" autoComplete="off" />
                                        <label htmlFor="size-m" className="btn">M</label>
                                    </div>
                                    <div>
                                        <input type="radio" className="btn-check" id="size-l" name="sizes" autoComplete="off" />
                                        <label htmlFor="size-l" className="btn">L</label>
                                    </div>
                                    <div>
                                        <input type="radio" className="btn-check" id="size-xl" name="sizes" autoComplete="off" />
                                        <label htmlFor="size-xl" className="btn">XL</label>
                                    </div>
                                </div>

                                <div className="flex mt-2">
                                    {windowWidth < 992 && <button className="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#filter">Apply</button>}
                                    {windowWidth > 992 && <button className="btn btn-outline-primary" type="button">Apply</button>}
                                </div>
                            </div>

                        </div>
                    </div>


                    {!isLoading && !error && <div className="col-md-9">
                        <div className="row row-cols-1 row-cols-lg-3">
                            {
                                prodList.map((prod) => {
                                    return (

                                        <div className="col my-2" key={prod.id}>
                                            <Link href={`/product/${prod.id}`} style={{ textDecoration: "none" }} ><Cardview prod={prod}></Cardview></Link>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>}
                    {isLoading && !error && <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-lg-3 d-flex justify-content-center align-items-center h-100">
                            <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>}

                    {error && <div className="col-md-9">
                        <div className="row row-cols-2 row-cols-lg-3 d-flex justify-content-center align-items-center h-100">
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="text-danger fs-3">Error fetching product details. Please try again later.</p>
                            </div>
                        </div>
                    </div>}


                </div>
            </main>
            <Footer />
        </>
    )

}