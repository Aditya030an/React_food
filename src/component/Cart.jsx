import store from "../utils/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  return (
    <div>
        <h1 className="font-bold text-3xl">
            Cart item-{cartItem.length}
        </h1>
    </div>
  );
};

export default Cart;
