// src/components/Header.js
import React from 'react';
import { FaStar, FaBookmark, FaShareAlt } from 'react-icons/fa';
import '../App.css'

function Header() {
  return (
    <div className="header">
      <div className="background-image">
        {/* Background image */}
      </div>
      <div className="profile-info">
        <img src="/person.jpg" alt="User Avatar" className="avatar" />
        <div>
          <h2>Healthy Food</h2>
          <p>Vegan Restaurant</p>
          <div className="rating">
            <FaStar /> 3.8
          </div>
        </div>
        <div className="actions">
          <button><FaBookmark /> Save</button>
          <button><FaShareAlt /> Share</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
