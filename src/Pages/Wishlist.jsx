import React from 'react'
import Header from '../Components/Header'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addToCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function Wishlist() {
  const cart=useSelector(state=>state.cartReducer)
  const wishlist=useSelector(state=>state.wishlistReducer)
  const dispatch= useDispatch()

  const handleCart=(product)=>{
    const exisitingProduct=cart?.find(item=>item.id==product.id)
    if(exisitingProduct){
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))
      toast.success ("product added to your cart!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWishlistItem(product.id))

    }
  }
  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '100px' }}>

     { wishlist?.length>0?
       
        <Row>
         {wishlist?.map(product=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title.slice(0,16)}...</Card.Title>
                <div className='d-flex justify-content-between'>
<button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn'>
  <i className='fa-solid fa-heart-circle-xmark text-primary'></i>
</button>
<button onClick={()=>handleCart(product)} className='btn'>
  <i className='fa-solid fa-cart-plus text-success'></i>
</button>


                </div>
              </Card.Body>
            </Card>
          </Col>))
         
         }
        </Row>:
         <div style={{ height: '70vh' }} className='w-100 d-flex justify-content-center align-items-center flex-column'>
         <img className='img-fluid' style={{borderRadius:'500px',width:'400px'}} src="https://media.istockphoto.com/id/1397445926/vector/3d-shopping-cart-with-cloud-for-online-shopping-and-digital-marketing-ideas-basket-and.jpg?s=612x612&w=0&k=20&c=q_XSOPUBHg7Vcd0QnmdPzYgWzWX1-VtZC-pvk53elVk=" alt="" />
         <h3>Your cart is empty!!!</h3>
       </div>
       }
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Wishlist