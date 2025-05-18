const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-body-secondary h-auto mt-4">
                <div className="container p-5">
                    <div className="row mb-3">
                        <div className="col-auto my-auto">
                            <div className="fw-bold mb-3">ClothCrafters</div>
                            <div><p>Discover the latest fashion trends and high-quality clothes for everyone.</p></div>
                        </div>
                        <div className="col-auto">
                            <div className="">
                                <div className="fw-bold">Shop</div>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Mens</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Womens</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Kids</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="">
                                <div className="fw-bold">About</div>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Contact</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <div className="col">
                        <div className="">
                                <div className="fw-bold"></div>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Mens</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Womens</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Kids</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                    <div className="row justify-content-between border-top border-subtle">
                        <div className="col-auto mt-2">
                            <span>© 2025 ClothCrafters. All rights reserved.</span>
                        </div>
                        <div className="col-auto">
                            <div className="flex">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Mens</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Womens</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link link-secondary" href="#">Kids</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;