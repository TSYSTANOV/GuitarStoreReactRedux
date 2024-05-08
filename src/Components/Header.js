import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { openCart } from "../Redux/CartSlice";

function Header() {
  const dispatch = useDispatch()
  const cartLength = useSelector((state) => state.cart.value.length);
  function handleOpenCart(){
    dispatch(openCart())
  }
  return (
    <div id="header">
      <div className="header-container">
        <div className="header-counter" onClick={handleOpenCart}>🔥 {cartLength}</div>
      </div>
    </div>
  );
}
export { Header };
