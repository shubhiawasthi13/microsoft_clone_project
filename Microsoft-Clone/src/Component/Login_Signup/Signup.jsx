import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/micro-logo.png'

function Signup() {
  return (
    <section className="sign_container">
    <div className='form_container'>
      <img src={logo} alt="logo" />
       <h3>Create account</h3>
       <form action="#">
        <input type="email" placeholder='someone@example.com' /><br/>
       <Link to= "#">Get a new email address</Link>
       <div className="sign_btn">
        <button className='btn btn-primary'>Next</button>
       </div>
       </form>
    </div>
    </section>
  )
}

export default Signup
