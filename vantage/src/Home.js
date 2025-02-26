import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import Navbar from './components/Navbar';// Adjust the path if necessary

const AmazonClone = () => {
    return (
        <div>
            <header>
            <Navbar />
            
            </header>
            <div className="hero-section">
            <img src={process.env.PUBLIC_URL + '/hero2.jpg'} alt="Description" />
                <div className="hero-msg">
                    <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. <a href="#">Click here to go to amazon.in</a></p>
                </div>
            </div>

            <div className="shop-section">
                {[
                    { title: 'Health & Personal Care', img: 'https://i.ibb.co/yftkdg1/box1_image.jpg', path: '/health' },
                    { title: 'Clothes', img: 'https://i.ibb.co/q9hZbm9/box3.jpg', path: '/clothing' },
                    { title: 'Furniture', img: 'https://i.ibb.co/pdyycMB/box4.jpg', path: '/furniture' },
                    { title: 'Electronics', img: 'https://i.ibb.co/dkZSVKb/box5.jpg', path: '/electronics' },
                    { title: 'Beauty Picks', img: 'https://i.ibb.co/tzj5G6h/box6.jpg', path: '/beauty' },
                    { title: 'Pet Care', img: 'https://i.ibb.co/V9dS1N1/box7.jpg', path: '/pet' },
                    { title: 'New Arrival In Toys', img: 'https://i.ibb.co/rGLpq93/box8.jpg', path: '/toys' },
                    { title: 'Discover Fashion Brands', img: 'https://i.ibb.co/r50fDCF/box9.jpg', path: '/footwear' }
                ].map((item, index) => (
                    <div key={index} className="box1 box">
                        <div className="box-content">
                            <h2>{item.title}</h2>
                            <div className="box-img" style={{ backgroundImage: `url(${item.img})` }}></div>
                            <p><Link to={item.path}>See all deals</Link></p>
                        </div>
                    </div>
                ))}
            </div>

            <footer>
                <div className="foot-panel1">Back To Top</div>
                <div className="foot-panel2">
                    <ul>
                        <li><p>Get To Know Us</p></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Amazon Devices</a></li>
                        <li><a href="#">Amazon Science</a></li>
                    </ul>
                    <ul>
                        <li><p>Connect with Us</p></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                    <ul>
                        <li><p>Make Money with Us</p></li>
                        <li><a href="#">Sell on Amazon</a></li>
                        <li><a href="#">Sell Under Amazon Accelerator</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Self-Publish with Us</a></li>
                        <li><a href="#">Host an Amazon Hub</a></li>
                    </ul>
                    <ul>
                        <li><p>Amazon Payment Products</p></li>
                        <li><a href="#">Amazon Business Card</a></li>
                        <li><a href="#">Shop with Points</a></li>
                        <li><a href="#">Reload Your Balance</a></li>
                        <li><a href="#">Amazon Currency Converter</a></li>
                    </ul>
                </div>
                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>
                <div className="foot-panel4">
                    <div className="pages">
                        <a href="#">Conditions of Use</a>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Your Ads Privacy Choices</a>
                    </div>
                    <div className="copyright">
                        © 1996-2024, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AmazonClone;
