import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <div className='bg-info text-white'>
      <div style={{height:'300px'}} className='container mt-5 w-100 '>
        <div className="footer-content d-flex justify-content-between">
          <div style={{width:'400px'}} className="media mt-5">
              <h5 className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-truck-fast me-3"></i><b>E CART</b></h5>
              <p style={{textAlign:'justify'}}>Design and built with all the love in the world by the bootstrap team with the help of our Contributors</p>
              <span>Code licenced MIT, docs CC BY 3.0.</span>
              <span>Currently v5.3.2.</span>
          </div>
          <div className="links d-flex flex-column mt-5">
              <h5>Links</h5>
              <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
              <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist </Link>
              <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
              <Link to={'/view/:id'} style={{textDecoration:'none',color:'white'}}>View </Link>

          </div>
          <div className="guides d-flex flex-column mt-5">
              <h5>Guides</h5>
              <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
              <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
              <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
  
          </div>
          <div className="contact mt-5 ">
              <h5>Contact Us</h5>
              <div className="d-flex">
                  <input type="text" className='form-control me-1' placeholder='Email id Please' />
                  <button className='btn btn-primary'><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className='icons d-flex justify-content-between mt-3'>
                <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-twitter fa-1x'></i></a>
                <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-instagram fa-1x'></i></a>
                <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-facebook fa-1x'></i></a>
                <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-linkedin fa-1x'></i></a>
                <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></a>
                <a href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>
  
              </div>
          </div>
         </div>
         <p className='text-center mt-5'>CopyRight&copy;2024 Media Player.Built with React</p>
      </div>
   </div>
  )
}

export default Footer