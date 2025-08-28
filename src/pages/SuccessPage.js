// src/pages/SuccessPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  
  // Get selected dishes from localStorage
  const selectedDishes = JSON.parse(localStorage.getItem('selectedDishes') || '[]');
  const totalCount = JSON.parse(localStorage.getItem('totalCount') || '0');
  
  return (
    <div className="success-page">
      <div className="success-header">
        <div className="success-icon">✅</div>
        <h1>Party Selection Confirmed!</h1>
        <p>Your selected dishes have been saved for the party.</p>
      </div>
      
      {selectedDishes.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <div className="summary-item">
              <span>Total Dishes:</span>
              <strong>{totalCount}</strong>
            </div>
            <div className="summary-item">
              <span>Selected Category:</span>
              <strong>{selectedDishes[0]?.category?.name || 'Main Course'}</strong>
            </div>
          </div>
          
          <div className="selected-dishes">
            <h3>Selected Dishes:</h3>
            <div className="dish-list-summary">
              {selectedDishes.map((dish, index) => (
                <div key={index} className="dish-summary-item">
                  <span className="dish-name">{dish.name}</span>
                  <span className="dish-type">{dish.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="success-actions">
        <button className="nav-button primary" onClick={() => navigate("/")}>
          Back to Menu
        </button>
        <button className="nav-button secondary" onClick={() => window.print()}>
          Print Receipt
        </button>
      </div>
    </div>
  );
}
