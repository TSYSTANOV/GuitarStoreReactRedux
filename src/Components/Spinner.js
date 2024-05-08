import { useSelector } from "react-redux";
import "./Spinner.css";
function Spinner() {
  const loadDataGoods = useSelector((state) => state.goods.isLoading);
  const loadDataCart = useSelector((state) => state.cart.isLoading);

  return (
    <>
      {loadDataGoods.isLoading || loadDataCart.isLoading ? (
        <div className="spinner-container">
          <div className="lds-roller ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export { Spinner };
