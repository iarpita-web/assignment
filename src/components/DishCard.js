import React, { useState } from 'react';

function DishCard({ dish, isSelected, onAdd, onRemove, onIngredients, navigate }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescription = () => {
    if (showFullDescription) {
      return dish.description;
    }
    return dish.description.length > 50 
      ? dish.description.substring(0, 50) + "..." 
      : dish.description;
  };

  // Use dish image if available, otherwise use category image
  const imageUrl = dish.image || dish.category?.image || 'https://via.placeholder.com/80x80?text=No+Image';

  return (
    <div className={`dish-card ${isSelected ? "selected" : ""}`}>
      <div className="dish-content">
        <div className="dish-info">
          <div className="dish-header">
            <h3>{dish.name}</h3>
            <div className={`dish-type-indicator ${dish.type === "VEG" ? "veg" : "non-veg"}`}></div>
          </div>
          
          <p className="dish-description">
            {getDescription()}
            {dish.description.length > 50 && (
              <button className="read-more-btn" onClick={toggleDescription}>
                {showFullDescription ? "Read less" : "Read more"}
              </button>
            )}
          </p>
          
          <div className="dish-actions">
            <button className="ingredients-link" onClick={onIngredients}>
              <span className="ingredients-icon">👜</span>
              Ingredient
            </button>
          </div>
        </div>
        
        <div className="dish-right">
          <div className="dish-image-container">
            <img src={imageUrl} alt={dish.name} className="dish-image" />
          </div>
          <button 
            className={`action-btn ${isSelected ? 'remove' : 'add'}`}
            onClick={isSelected ? onRemove : onAdd}
          >
            {isSelected ? "Remove" : "Add +"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
