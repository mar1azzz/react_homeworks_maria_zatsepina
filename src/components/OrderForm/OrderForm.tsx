import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearCart } from "../../store/slices/cartSlice";
import { createOrder } from "../../store/slices/orderSlice";
import Button from "../Button/Button";
import "./OrderForm.css";

const OrderForm: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const loggedInUser = useSelector((state: RootState) => state.user.loggedInUser);

  const [street, setStreet] = useState<string>("");
  const [house, setHouse] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleOrder = () => {
    if (!loggedInUser) {
      setError("You must be logged in to place an order.");
      return;
    }
    if (!street || !house) {
      setError("Street and house fields cannot be empty.");
      return;
    }
    if (cart.length === 0) {
      setError("Your cart is empty. Add items before placing an order.");
      return;
    }

    const order = {
      user: loggedInUser.username,
      cart,
      address: { street, house },
      date: new Date().toISOString(),
    };

    dispatch(createOrder(order));
    dispatch(clearCart());
    console.log("Order created:", order);
    setStreet("");
    setHouse("");
    setError("");
    alert("Order placed successfully!");
  };

  return (
    <div className="order-container">
        <div className="form-group-horizontal">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="form-group-horizontal">
          <label htmlFor="house">House</label>
          <input
            type="text"
            id="house"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-group">
          <Button buttonName="Order" onClickHandler={handleOrder} />
        </div>
    </div>
  );
};

export default OrderForm;
