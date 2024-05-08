import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, openCart } from "../Redux/CartSlice";
import { ShoppingItem } from "./ShoppingItem";
import "./Shopping.css";
function Shopping() {
  const dispatch = useDispatch()
  const openCartHandler = useSelector((state) => state.cart.openCart);
  const goodsInCart = useSelector((state)=>state.cart.value)
  const goodsList = useSelector((state)=> state.goods.goods)
  const getGoodsFromListViaCartList = goodsList.filter((item)=>{
    if(goodsInCart.includes(item.id)){
      return item
    } 
  })
  const sumGoodsInCart = () => {
    return getGoodsFromListViaCartList.reduce((acc,item)=>{
      acc += item.price
      return acc
    },0)
  }
  function handleCloseCart(){
    dispatch(openCart())
  }
  function handleTableBody(e){
    if(e.target.tagName !== 'BUTTON') return
    dispatch(deleteFromCart(e.target.dataset.id))
  }
  if(openCartHandler){
    return <div id="shopping">
        {goodsInCart.length > 0 ? 
         <div className='shopping-container'>
         <div className='shopping__close' onClick={handleCloseCart}></div>
       <table>
         <thead>
           <tr>
             <td className='shopping-element__name'>Название товара</td>
             <td className='shopping-element__name'>Цена</td>
           </tr>
         </thead>
         <tbody onClick={handleTableBody}>
          {getGoodsFromListViaCartList.map((item)=>{
            return <ShoppingItem key={item.id} {...item}/>
          })}
         <tr>
           <td className='shopping-element__name'>Summary:</td>
           <td className='shopping-element__price'>{sumGoodsInCart()} USD</td>
         </tr>
         </tbody>
       </table>
        </div>
        : <div className='shopping-container'>
          <div className='shopping__close' onClick={handleCloseCart}></div>
          Корзина пустая</div>}
       
      </div>;
  }
}

export { Shopping };
