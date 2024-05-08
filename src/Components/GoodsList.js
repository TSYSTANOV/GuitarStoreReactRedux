import { useEffect, useState } from "react";
import "./GoodsList.css";
import { useDispatch, useSelector } from "react-redux";
import { getGoodsFromServer } from "../Redux/GoodsSlice";
import { GoodsItem } from "./GoodsItem";
import { Spinner } from "./Spinner";
function GoodsList() {
  const dispatch = useDispatch();
  const goodList = useSelector((state) => state.goods.goods);
  useEffect(() => {
    dispatch(getGoodsFromServer());
  }, []);
  return (
    <div id="products">
      <Spinner />
      <ul className="product-container">
        {goodList.map((item) => {
          return <GoodsItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export { GoodsList };
