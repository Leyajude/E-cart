import React from 'react'
import { Badge,Container,Form, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../REDUX/Slices/productSlice';

function Header({insideHome}) {
  const dispatch=useDispatch()
  const wishlistCount = useSelector(state=>state.wishlistReducer).length
  const cartCount= useSelector(state=>state.cartReducer).length
  return (
    <div>
       <Navbar  expand="lg" className="bg-info position-fixed top-0 w-100 " style={{zIndex:'10'}} >
      <Container >
        <Navbar.Brand href="#" style={{color:'white'}}><i className="fa-solid fa-truck-fast"></i><Link to ={'/'} className='text-light fw-bolder' style={{textDecoration:'none'}}> E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto ms-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             {
              insideHome&&
              <Form onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} className="d-flex ms-5 ">
            <Form.Control
              type="search"
              placeholder="Search products!!!"
              className="me-5  "
              aria-label="Search"
            />
        
          </Form>}
        
          </Nav>
        
          <Nav
            className="me-0 ms-5 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  style={{color:'white'}} ><i className="fa-solid fa-heart" style={{color:'red'}}></i><Link to ={'/wishlist'} className='text-light fw-bolder ' style={{textDecoration:'none'}}> WishList</Link><Badge bg="secondary" className='ms-1'>{wishlistCount}</Badge></Nav.Link>
            <Nav.Link style={{color:'white'}}><i className="fa-solid fa-cart-shopping" style={{color:'orange'}}></i> <Link to ={'/cart'} className='text-light fw-bolder' style={{textDecoration:'none'}}>Cart</Link><Badge bg="secondary" className='ms-1'>{cartCount}</Badge></Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header