// src/components/FilterToggle.jsx
import React from "react";

export default function FilterToggle({ vegActive, nonVegActive, setVegActive, setNonVegActive }) {
  return (
    <div className="filter-toggle-container">
      <div className="filter-toggle">
        <div 
          className={`filter-icon ${vegActive ? 'active' : 'inactive'}`}
          onClick={() => setVegActive(v => !v)}
        >
          🥬
        </div>
        <div 
          className={`filter-icon ${nonVegActive ? 'active' : 'inactive'}`}
          onClick={() => setNonVegActive(nv => !nv)}
        >
          🍗
        </div>
      </div>
    </div>
  );
}
