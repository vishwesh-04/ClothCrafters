"use client"
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Cardview from "./components/cardview";

export default function Home() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [availableCollections, setAvailableCollections] = useState([]);


  useEffect(() => {

    const fetchLatestProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products?limit=10');
        const data = await response.json();
        setLatestProducts(data.products);
      } catch (error) {
        console.error("Error fetching latest products:", error);
        setLatestProducts([
          { id: 1, name: "Product A", price: 25.99, imageUrl: "/images/product-a.jpg" },
          { id: 2, name: "Product B", price: 49.50, imageUrl: "/images/product-b.jpg" },
          // Add more fallback products
        ]);
      }
    };

    const fetchAvaliableCollections = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products/category');
        const data = await response.json();
        setAvailableCollections(data.categories);
      } catch (error) {
        console.error("Error fetching latest products:", error);
        setAvailableCollections([
          { id: 1, name: "Coming Soon", image: "/image/catA" },
          { id: 2, name: "Coming Soon", image: "/image/catB" },
          { id: 3, name: "Coming Soon", image: "/image/catB" },
        ]);
      }
    };

    fetchLatestProducts();
    fetchAvaliableCollections();
  }, []);

  return (
    <>
      <Navbar />
      <main className="">
        {/* Carousel */}
        <div className="container-fluid p-0 mb-4">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/images/carousel-1.jpg" className="d-block w-100" alt="First slide" width={1920} height={600} style={{ objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src="/images/carousel-2.jpg" className="d-block w-100" alt="Second slide" width={1920} height={600} style={{ objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src="/images/carousel-3.jpg" className="d-block w-100" alt="Third slide" width={1920} height={600} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Latest Arrivals */}
        <div className="container py-5">
          <h2 className="text-center mb-4">Latest Arrivals</h2>
          <div className="overflow-x-scroll w-100" style={{ height: "auto", whiteSpace: "nowrap", scrollbarWidth: "none"}}>
            <div className="d-flex p-2">
              {
                latestProducts.map((item, index) => {
                  return (
                    <div key={`product-${item.id}`} className="col-6 col-lg-3">
                    <Link href={`/product/${item.id}`}  style={{textDecoration: "none"}}>
                      <div className="card mx-2" style={{width: "auto", minWidth:"6rem", maxWidth: "20rem"}}>
                        <img src={item.image} alt="Image product" className="img-fluid" />
                        <div className="card-body text-truncate">
                          <span className="card-title fw-bold font-monospace">{item.title}</span>
                          <br/>
                          <span className="font-monospace">Starting at ₹{item.price}</span>
                        </div>
                      </div>
                    </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>


        {/* Available collections */}
        <div className="container py-5">
          <h2 className="text-center mb-4">Collections</h2>
          <div className="overflow-x-scroll w-100" style={{ height: "auto", whiteSpace: "nowrap", scrollbarWidth: "none"}}>
            <div className="d-flex p-2">
              {
                availableCollections.map((coll, index) => {
                  return (
                    <div key={`coll-${index}`} className="col-6 col-lg-3">
                    {/* <Link href={`/category`}  style={{textDecoration: "none"}}> */}
                      <div className="card mx-2" style={{width: "auto", minWidth:"6rem", maxWidth: "20rem"}}>
                        <img src={coll.image} alt="" className="img-fluid" />
                        <div className="card-body text-truncate text-center">
                          <span className="card-title fs-3 fw-bold font-monospace">{coll}</span>
                        </div>
                      </div>
                    {/* </Link> */}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </>
  );
}
