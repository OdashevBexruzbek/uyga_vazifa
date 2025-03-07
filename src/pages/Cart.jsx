import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/useGlobal";

function Cart() {
  const { data } = useContext(GlobalContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems((prevItems) => [...prevItems, ...data]);
  }, [data]);

  return (
    <div className="cart-container">
      <ul className="card-container">
        {cartItems.map((item) => (
          <li key={item.id} className="card">
            <img src={item.thumbnail} alt={item.description} />
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <p>Stock: {item.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
