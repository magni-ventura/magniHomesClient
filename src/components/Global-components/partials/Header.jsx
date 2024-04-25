import { useState } from 'react';



export default function Header() {

    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => {
      setExpanded(!expanded);
    };


  return (
    <div className="navbar">
      <div className="navbar-brand">MagniHomes</div>
      <button className="navbar-toggle" onClick={handleToggle}>
        <span className="toggle-icon">&#9776;</span>
      </button>
      
      <div className={`navbar-menu ${expanded ? 'expanded' : ''}`}>
        
        <a href="#" className="nav-link">Home</a>

        <a href="#" className="nav-link">About Us</a>

        <a href="#" className="nav-link">Services</a>

        <a href="#" className="nav-link">Profile</a>

        <a href="#" className="nav-link">Contact Us</a>

        <a href="#" className="nav-link">SignIn</a>

        <a href="#" className="nav-link">SignUp</a>

        <form className="search-form">
          <input type="text" placeholder="Search" className="search-input" />

          <button type="submit" className="search-button">Search</button>

        </form>
      </div>
    </div>
  );
}


