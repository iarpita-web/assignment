import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import DishList from "../components/DishList";
import SummaryBottomBar from "../components/SummaryBottomBar";
import CategoryTabs from "../components/CategoriesTabs";
import dishesData from "../data/dishes.json";
import FilterToggle from "../components/FilterToggle";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [search, setSearch] = useState("");
  const [vegActive, setVegActive] = useState(true);
  const [nonVegActive, setNonVegActive] = useState(true);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  
  // Filtering logic
  let filtered = dishesData.filter(
    dish =>
      dish.mealType === selectedCategory &&
      ((vegActive && dish.type === "VEG") || (nonVegActive && dish.type === "NON-VEG")) &&
      dish.name.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate category counts
  const categoryCounts = dishesData.reduce((acc, dish) => {
    if (selected.includes(dish.id)) {
      acc[dish.mealType] = (acc[dish.mealType] || 0) + 1;
    }
    return acc;
  }, {});

  const handleContinue = () => {
    if (selected.length > 0) {
      // Save selected dishes to localStorage
      const selectedDishDetails = selected.map(dishId => {
        const dish = dishesData.find(d => d.id === dishId);
        return {
          id: dish.id,
          name: dish.name,
          type: dish.type,
          mealType: dish.mealType,
          category: dish.category,
          description: dish.description
        };
      });
      
      localStorage.setItem('selectedDishes', JSON.stringify(selectedDishDetails));
      localStorage.setItem('totalCount', JSON.stringify(selected.length));
      
      navigate("/success");
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearch(""); // Clear search when changing category
  };

  const handleDishSelect = (dishId) => {
    if (!selected.includes(dishId)) {
      setSelected([...selected, dishId]);
    }
  };

  const handleDishUnselect = (dishId) => {
    setSelected(selected.filter(id => id !== dishId));
  };

  const getCategoryDisplayName = (category) => {
    switch(category) {
      case "STARTER": return "Starters";
      case "MAIN COURSE": return "Main Courses";
      case "DESSERT": return "Desserts";
      case "SIDES": return "Sides";
      default: return category;
    }
  };

  return (
    <div className="menu-page mobile-optimized">
      <div className="page-header">
        <div className="header-content">
          <button className="back-button" onClick={() => navigate(-1)}>
            ←
          </button>
          <h1>Menu</h1>
        </div>
        <SearchBar value={search} onChange={setSearch} />
      </div>
      
      <CategoryTabs 
        value={selectedCategory} 
        onChange={handleCategoryChange} 
        counts={categoryCounts}
      />
      
      <div className="selection-summary">
        <div className="summary-text">
          {getCategoryDisplayName(selectedCategory)} Selected ({categoryCounts[selectedCategory] || 0})
        </div>
        <FilterToggle 
          vegActive={vegActive} 
          nonVegActive={nonVegActive} 
          setVegActive={setVegActive} 
          setNonVegActive={setNonVegActive} 
        />
      </div>
      
      {filtered.length === 0 ? (
        <div className="no-results">
          <p>No dishes found matching your criteria.</p>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : (
        <DishList
          dishes={filtered}
          selected={selected}
          onSelect={handleDishSelect}
          onUnselect={handleDishUnselect}
          navigate={navigate}
        />
      )}
      
      <SummaryBottomBar 
        count={selected.length} 
        onContinue={handleContinue} 
      />
    </div>
  );
}

export default MenuPage;
