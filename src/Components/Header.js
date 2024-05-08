import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const cartLength = useSelector((state) => state.cart.value.length);

  return (
    <div id="header">
      <div className="header-container">
        <div className="header-counter">🔥 {cartLength}</div>
      </div>
    </div>
  );
}
export { Header };
