function ShoppingItem({name,price,id}){
    return (
        <tr>
        <td className='shopping-element__name'>🔥 {name}</td>
        <td className='shopping-element__price'>{price} USD</td>
        <td className='shopping-element__name'><button data-id={id}>Delete</button></td>
        </tr>
    )
}
export {ShoppingItem}