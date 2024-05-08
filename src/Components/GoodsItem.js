import { useState } from "react";
import { handleCart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
function GoodsItem({ img, name, price, id }) {
  const cartDatas = useSelector((state)=>state.cart.value)
  const dispatch = useDispatch();
  const btn = {
    activeText: "Добавить в корзsину",
    passiveText: "Удалить из корзины",
    activeClass: "product-element__btn_active",
    passiveClass: "",
  };
  const activeBtn = (cartDatas.includes(id) ? btn.passiveText: btn.activeText);
  const activeClass = (cartDatas.includes(id) ? btn.activeClass: btn.passiveClass);
  function handleAddToCart(e) {
    // if (activeBtn === btn.activeText) {
    //   setActiveBtn(btn.passiveText);
    //   setActiveClass(btn.activeClass);
    // } else {
    //   setActiveBtn(btn.activeText);
    //   setActiveClass(btn.passiveClass);
    // }
    dispatch(handleCart(e.target.dataset.id));
  }
  return (
    <li className="product-element">
      <span className="product-element__name">{name}</span>
      <img className="product-element__image" src={img} />
      <span className="product-element__price">🔥 {price} USD</span>
      <button
        className={`product-element__btn ${activeClass}`}
        data-id={id}
        onClick={handleAddToCart}
      >
        {activeBtn}
      </button>
    </li>
  );
}
export { GoodsItem };
