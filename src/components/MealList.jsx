import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';

function MealList() {
  const [meals, setMeals] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/data/meals.json')
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error('Error fetching meals:', err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <div key={meal.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">{meal.name}</h2>
          <p className="text-gray-600">{meal.description}</p>
          <p className="text-green-600 font-bold">${meal.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(meal)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default MealList;