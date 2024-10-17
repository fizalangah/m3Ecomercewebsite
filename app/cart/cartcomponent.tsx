"use client"
import { useState, ChangeEvent } from "react";

export default function Cartcomponent() {
  const [quantity, setQuantity] = useState(1); // To track the item quantity
  const [showCart, setShowCart] = useState(false); // To control cart visibility
  const [selectedItem, setSelectedItem] = useState({
    name: "",
    price: 0,
  });

  // Handle item selection from radio buttons
  const handleItemSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let price = 0;

    // Set price based on the selected value
    if (value === "1 item") price = 116.95;
    if (value === "2 item") price = 111.10;
    if (value === "3 item") price = 105.25;

    setSelectedItem({ name: value, price });
  };

  // Show cart with the selected item
  const handleShowCart = () => {
    if (selectedItem.name) {
      setShowCart(true);
    }
  };

  // Increase the quantity of the item
  const handleAddCart = () => {
    setQuantity(quantity + 1);
  };

  // Decrease the quantity of the item
  const handleRemoveItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="relative">
      {/* Apply blur effect to the background when cart is visible */}
      <div className={`transition-all ${showCart ? "filter blur-sm" : ""}`}>
        <div className="bg-gray-50 w-[300px] h-[300px] rounded-xl border-2 border-gray-400 mt-20">
          <div className="flex flex-col justify-start items-start text-start mt-10 gap-y-10 ml-10">
            <div className="flex flex-row">
              <input
                className=""
                type="radio"
                name="item"
                value="1 item"
                onChange={handleItemSelection}
              />
              1 item
              <p className="ml-[100px] text-sm text-blue-300">€116,95 /item</p>
            </div>

            <div className="flex flex-row">
              <input
                className=""
                type="radio"
                name="item"
                value="2 item"
                onChange={handleItemSelection}
              />
              2 items
              <p className="ml-[50px] text-sm text-blue-300">
                Save 5% €111,10/item
              </p>
            </div>

            <div className="flex flex-row">
              <input
                className=""
                type="radio"
                name="item"
                value="2 item"
                onChange={handleItemSelection}
              />
              3 items
              <p className="ml-[30px] text-sm text-blue-300">
                Save 10% €105,25/item
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleShowCart}
          className="ml-10 text-2xl font-bold mt-10 bg-black text-white p-2 rounded-xl mb-10"
        >
          Add to cart
        </button>
      </div>

      {/* Cart Section */}
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white h-[300px] w-[300px] p-5 rounded-lg shadow-lg">
            <h6 className="text-xl font-bold">
              {selectedItem.name} - €{selectedItem.price}/item
            </h6>
            <h6 className="pt-4 text-xl font-bold">Quantity: {quantity}</h6>
            <div className="mt-5 space-x-10 text-xl font-semibold">
              <button onClick={handleAddCart}>+</button>
              <button onClick={handleRemoveItem}>-</button>
            </div>
            <h6 className="pt-4 text-xl font-bold">
              Total: €{(selectedItem.price * quantity).toFixed(2)}
            </h6>
            <button
              onClick={() => setShowCart(false)}
              className="mt-4 text-white bg-red-500 p-2 rounded-xl"
            >
              Close Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
