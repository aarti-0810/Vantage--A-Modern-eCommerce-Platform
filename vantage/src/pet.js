import { get, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { database } from './components/firebaseConfig';
import { useCart } from './components/CartContext'; // Import useCart context
import Navbar from './components/Navbar'; // Import Navbar component
import './categories.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import CartMessage from './CartMessage';

export default function Pet() {
  const [items, setItems] = useState([]);
  const { addToCart } = useCart(); // Destructure addToCart from useCart
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const petcareRef = ref(database, 'items/pet');
        const petcareSnapshot = await get(petcareRef);

        const petcareItems = petcareSnapshot.exists()
          ? Object.entries(petcareSnapshot.val()).map(([id, data]) => ({
              id,
              ...data,
            }))
          : [];
        
        setItems(petcareItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);
  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.product_name} added to cart`);
    setShowMessage(true);
  };

  // Function to navigate to the cart page
  const goToCart = () => {
    navigate('/cart'); // Replace with your actual cart page route
  };

  return (
    <div>
      <Navbar />
      <header>
        <div className="navbar">
          <div className="nav-logo border">
            <a href="https://ibb.co/zf8gCrZ">
              <img src="https://i.ibb.co/dKbvXrD/Logo.png" alt="logo" />
            </a>
          </div>
          <div className="nav-address border">
            <p className="add-first">Deliver to </p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot"></i>
              <p className="add-sec">India</p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option>All</option>
            </select>
            <input placeholder="Search Amazon" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="accounts border">
            <p>Hello, </p>
            <div>
              <select className="account-dropdown">
                <option>Account & Lists</option>
              </select>
            </div>
          </div>
          <div className="returns border">
            <p>Returns</p>
            <p style={{ fontWeight: 'bold' }}>& Orders</p>
          </div>
          <div className="cart border" onClick={goToCart}>
            <p>
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </p>
          </div>
        </div>
        <div className="panel">
          <div className="panel-all border">
            <p><i className="fa-solid fa-bars"></i> All</p>
          </div>
          <div className="panel-ops">
            <a className="border" href="#">Today's Deals</a>
            <a className="border" href="#">Customer Service</a>
            <a className="border" href="#">Registry</a>
            <a className="border" href="#">Gift Cards</a>
            <a className="border" href="#">Sell</a>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="card">
              <img src={item.img_url} alt={item.product_name} className="image" />
              <h2 className="product-name">{item.product_name}</h2>
              <p className="price">₹{item.price}</p>
              <p className="description">{item.description}</p>
              <button className="go-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <CartMessage message={message} showMessage={showMessage} setShowMessage={setShowMessage} />
      </main>
    </div>
  );
}