import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import mealsData from '../data/meals.json';

function MealList() {
  const [meals,setMeals] = useState(mealsData);
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {meals.map((meal) => (
        <div key={meal.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
          <img
            src={meal.img}
            alt={meal.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          
          <h2 className="text-xl font-semibold text-gray-800">{meal.name}</h2>
          <p className="text-gray-600">{meal.description}</p>
          <p className="text-green-600 font-bold">${meal.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(meal)}
            className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default MealList;
