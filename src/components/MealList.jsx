import { useCart } from '../hooks/useCart';
import margherita from '/images/margherita-pizza.jpg'
import grilledChicken from '/images/grilled-chicken-salad.jpg'
import pasta from '/images/pasta-carbonara.jpg'

const mealsData = [
  {
    "id": 1,
    "name": "Margherita Pizza",
    "description": "Classic pizza with tomato, mozzarella, and basil.",
    "price": 12.99,
  },
  {
    "id": 2,
    "name": "Grilled Chicken Salad",
    "description": "Fresh greens with grilled chicken and vinaigrette.",
    "price": 9.99,
  },
  {
    "id": 3,
    "name": "Pasta Carbonara",
    "description": "Creamy pasta with bacon and parmesan.",
    "price": 14.99,
  }
];

function MealList() {
  const { addToCart } = useCart();
  const firstMeal = mealsData[0];
  const secondMeal = mealsData[1];
  const thirdMeal = mealsData[2];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {firstMeal && (
        <div key={firstMeal.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
          <img
            src={margherita}
            alt={firstMeal.name}
            className="w-full h-60 object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{firstMeal.name}</h2>
          <p className="text-gray-600">{firstMeal.description}</p>
          <p className="text-green-600 font-bold">${firstMeal.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(firstMeal)}
            className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      )}
      {secondMeal && (
        <div key={secondMeal.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
          <img
            src={grilledChicken}
            alt={secondMeal.name}
            className="w-full h-60 object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{secondMeal.name}</h2>
          <p className="text-gray-600">{secondMeal.description}</p>
          <p className="text-green-600 font-bold">${secondMeal.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(secondMeal)}
            className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      )}
      {thirdMeal && (
        <div key={thirdMeal.id} className="bg-white p-4 rounded shadow hover:shadow-lg">
          <img
            src={pasta}
            alt={thirdMeal.name}
            className="w-full h-60 object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{thirdMeal.name}</h2>
          <p className="text-gray-600">{thirdMeal.description}</p>
          <p className="text-green-600 font-bold">${thirdMeal.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(thirdMeal)}
            className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default MealList;