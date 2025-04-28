import { useCart } from '../hooks/useCart';
import { useForm } from '../hooks/useForm';

function CartModal({ onClose }) {
  const { cart, removeFromCart, getTotal, clearCart, updateQuantity } = useCart();
  const { values, handleChange, resetForm } = useForm({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10,}$/;
    return re.test(phone.replace(/\D/g, ''));
  };

  const handleSubmit = () => {
    alert(`Order submitted for ${values.name}! Total: $${getTotal()}`);
    resetForm();
    clearCart();
    onClose();
  };

  const isFormValid = 
    values.name.trim() !== '' && 
    values.address.trim() !== '' && 
    values.email.trim() !== '' &&
    values.phone.trim() !== '' &&
    validateEmail(values.email) &&
    validatePhone(values.phone);

  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Cart is empty</p>
          ) : (
            <>
              <ul className="mb-4">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-2">
                    <span className="text-gray-800">
                      {item.name}
                    </span>
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-300"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-3 py-1">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-300"
                      >
                        +
                      </button>
                      <span className="text-green-600 ml-4 mr-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-gray-800">Total: ${getTotal()}</p>
            </>
          )}
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Checkout</h3>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 mb-2 border rounded text-gray-800"
            />
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-2 mb-2 border rounded text-gray-800"
            />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-2 mb-2 border rounded text-gray-800 ${
                values.email && !validateEmail(values.email) ? 'border-red-500' : ''
              }`}
            />
            {values.email && !validateEmail(values.email) && (
              <p className="text-red-500 text-sm mb-2">Please enter a valid email address</p>
            )}
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone (10 digits minimum)"
              className={`w-full p-2 mb-2 border rounded text-gray-800 ${
                values.phone && !validatePhone(values.phone) ? 'border-red-500' : ''
              }`}
            />
            {values.phone && !validatePhone(values.phone) && (
              <p className="text-red-500 text-sm mb-2">Please enter a valid phone number (10 digits minimum)</p>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={resetForm}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
            >
              Reset Form
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600"
            >
              Close
            </button>
            <button
              onClick={handleSubmit}
              disabled={cart.length === 0 || !isFormValid}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-300"
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;