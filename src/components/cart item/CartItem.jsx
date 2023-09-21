import './CartItem.scss'

export default function CartItem({selectedProduct}){
let {imageUrl, name, quantity, price} = selectedProduct

    return (
        <>
    <div className='cart-item'>
    <div className='cart-image'>
    <img src={imageUrl}/>
    </div>
  <div className='cart-other'>
  <p>{name}</p>

  <div className='cart-price'>
  <p className='cart-qty'>{quantity} * </p>
  <p className='price'>${price}</p>
  </div>
  </div>  
    </div>
        </>
    )
}