import './hat.scss'
import { useContext } from 'react'
import { ProductContext } from '../../../contexts/Product.context'
import { CartContext } from '../../../contexts/CartContext'
// import IncrementContainer from '../../../components/increment cart button/cart button/IncrementContainer'
// import { QtyContext } from '../../../contexts/QtyContext.context'


export default function Hat(){
let {products} = useContext(ProductContext)
let {addToCart} = useContext(CartContext)


let addToCartBtn = (idx) => addToCart(idx, products)


  // const updatedProducts = products.map(p => {
  //   if (p.id === idx) {
  //     return { ...p, isClicked: true };
  //   }
  //   return { ...p, isClicked: false };
  // });

  // setProducts(updatedProducts);

  // const updateQtyInContext = updatedProduct.map(el => {
  //   if (el.id === idx) {
  //     console.log(el);
  //     return el.quantity
  //   }
  //   return null
  // })
  // console.log(updateQtyInContext);
  // setQty(updateQtyInContext)






let hatProducts = products.map((el, id) => {

  return (
    <div className='hat-box' key={id}>
      <div className='hat-item'>
        <div className='hat-image'>
          <img src={el.imageUrl} alt={`Product ${id}`} />
        </div>
      
          <button
            className='hat-button'
            onClick= {() =>{
              addToCartBtn(el.id)
            }
            }
          >
          Add to cart
          </button>
        
      </div>
      <div className='hat-price-box'>
        <div className='rating'>
          <p className='name'>{el.name}</p>
        </div>
        <p className='hat-price'>${el.price}</p>
      </div>
    </div>
  );
});


    return(
        <>
          <div className='hat-container'>
     {hatProducts}
        </div>
        </>
    )
    }