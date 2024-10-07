import React from 'react'
import {Link} from 'react-router-dom'

function Cart() {
  return (
    <section className="cart container m-5">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <h3 className='fs-3 py-3'>Cart</h3>
          <hr/>
          <p className='fs-5'>Your cart is empty</p>
        </div>

        <div className="col-md-4 col-sm-12">
           <Link to="#" className='fw-bold text-primary fs-5 cart_link'>Keep Shopping</Link>
        </div>
      </div>
    </section>
  )
}

export default Cart
