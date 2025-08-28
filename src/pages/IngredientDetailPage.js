// src/pages/IngredientDetailPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dishes from "../data/dishes.json";
import ingredients from "../data/ingredients.json";

export default function IngredientDetailPage() {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === Number(id));
  const ingredientData = ingredients.find(item => item.dishId === Number(id));
  const ingredientList = ingredientData ? ingredientData.ingredients : [];
  const navigate = useNavigate();

  if (!dish) {
    return <div>Dish not found.</div>;
  }

  return (
    <div className="ingredient-detail">
      <button 
        className="nav-button" 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: 24 }}
      >
        ← Back to Menu
      </button>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {ingredientList.map((item, idx) => (
          <li key={idx}>
            <span>{item.name}</span>
            <strong>{item.quantity}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
