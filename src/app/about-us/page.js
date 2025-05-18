"use client"

import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <main className="container">
                <section id="about-us" className="py-3">
                    <div className="d-flex fs-3 justify-content-center mb-3 font-monospace">
                        Welcome to ClothCrafters, Where Style Meets Craftsmanship.
                    </div>
                    <div className="d-flex flex-column font-monospace">
                        <p>At ClothCrafters, we believe that clothing is more than just fabric; it's a form of self-expression, an extension of your personality, and a way to connect with the world around you. Founded with a passion for quality and an eye for the latest trends, ClothCrafters is your destination for discovering unique and stylish garments for every individual.</p>

                        <p>Our journey began with a simple vision: to curate collections that inspire confidence and celebrate individuality. We meticulously source fabrics, collaborate with talented designers, and pay close attention to every detail, ensuring that each piece in our collection reflects our commitment to excellence.</p>

                        <p>Our journey began with a simple vision: to curate collections that inspire confidence and celebrate individuality. We meticulously source fabrics, collaborate with talented designers, and pay close attention to every detail, ensuring that each piece in our collection reflects our commitment to excellence.</p>

                        <p>Whether you're searching for the perfect everyday essentials, a statement piece for a special occasion, or the latest runway-inspired looks, ClothCrafters offers a diverse range of garments to suit your unique style and needs. We believe that fashion should be inclusive and accessible, which is why we strive to offer collections that cater to all audiences.</p>

                        <p>Beyond the clothes themselves, we are dedicated to providing an exceptional shopping experience. From our user-friendly website to our attentive customer service, we aim to make your journey with ClothCrafters enjoyable and seamless.</p>
                    </div>

                    <div className="font-monospace">
                        <span className="fw-bolder">Our Values</span>
                        <ul className="gap-1">
                            <li><span className="fw-bold">Quality:</span> We are committed to offering garments crafted with the finest materials and exceptional attention to detail.</li>
                            <li><span className="fw-bold">Style:</span> We stay ahead of the curve, bringing you the latest trends and timeless classics.</li>
                            <li><span className="fw-bold">Inclusivity:</span> We believe fashion is for everyone and strive to offer diverse collections for all.</li>
                            <li><span className="fw-bold">Customer Satisfaction:</span> Your happiness is our priority. We are dedicated to providing excellent service and support.</li>
                        </ul>
                    </div>
                </section>
                <section id="contact" className="border-top py-3">
                    <div className="d-flex fs-3 justify-content-center mb-3 font-monospace">
                        Get in touch
                    </div>
                    <div className="container">
                        <form action="mailto:vbpatil2004@gmail.com" method="post" enctype="text/plain">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" id="name" name="name" required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" id="email" name="email" required className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message:</label>
                                <textarea id="message" name="message" rows="5" required className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-outline-primary mb-3">Send Email</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AboutUs;