import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/micro-logo.png'
function Signin() {
  return (
    <section className="sign_container">
    <div className='form_container'>
      <img src={logo} alt="logo" />
       <h3>Sign in</h3>
       <form action="#">
        <input type="text" placeholder='Email, Phone, or Skype' /><br/>
       <p>No account?<Link to= "/signup">Create one!</Link></p>
       <div className="sign_btn">
        <button className='btn btn-primary'>Next</button>
       </div>
       </form>
    </div>
    </section>
   
  )
}

export default Signin
