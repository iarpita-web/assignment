// src/components/CategoryTabs.jsx
import React from "react";

const CATEGORIES = [
  { key: "STARTER", label: "Starter" },
  { key: "MAIN COURSE", label: "Main Course" },
  { key: "DESSERT", label: "Desert" },
  { key: "SIDES", label: "Sides" }
];

export default function CategoryTabs({ value, onChange, counts = {} }) {
  return (
    <div className="category-tabs-container">
      <div className="category-tabs-scroll">
        {CATEGORIES.map(cat => {
          const count = counts[cat.key] || 0;
          return (
            <button
              key={cat.key}
              onClick={() => onChange(cat.key)}
              className={`category-tab ${value === cat.key ? 'active' : ''}`}
            >
              <span className="tab-label">{cat.label}</span>
              <span className="tab-count">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
