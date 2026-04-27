import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-10">
        <div className='h-screen underline flex items-center justify-center text-3xl gap-10'>
            <Link to='/product/men'>Men</Link>
            <Link to='/product/women'>Women</Link>
            <Link to='/product/kid'>Kids</Link>
        </div>
     {/* <h2>Product Page</h2> */}
      <Outlet />
     </div>
  )
}

export default Product


//min-h-screen text-8xl underline flex justify-center items-center