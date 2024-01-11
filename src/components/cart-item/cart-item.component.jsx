import {
  CartItemContainer,
  ItemDetails,
  ItemName,

} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageurl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageurl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span className='price'>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem;
