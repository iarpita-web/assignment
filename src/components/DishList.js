import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes, selected, onSelect, onUnselect, navigate }) {
  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          isSelected={selected.includes(dish.id)}
          onAdd={() => onSelect(dish.id)}
          onRemove={() => onUnselect(dish.id)}
          onIngredients={() => {
            // Navigate to ingredient page using React Router
            navigate(`/ingredient/${dish.id}`);
          }}
        />
      ))}
    </div>
  );
}

export default DishList;
