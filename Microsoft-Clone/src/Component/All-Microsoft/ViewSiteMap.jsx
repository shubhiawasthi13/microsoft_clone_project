import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SiteMapImg from '../All-Microsoft/view-site-map.png'
function ViewSiteMap() {
  return (
    <section className='container-fluid mt-5'>
     <center><img src={SiteMapImg} alt="" /></center>
      <section className='site_nav'>
      <Link to ="" className='site_nav_link'>Sales & Support</Link>
      <Link to ="software"  className='site_nav_link'>Software & services</Link>
      <Link to ="devices"  className='site_nav_link'>Devices & Xbox</Link>
      <Link to ="business"  className='site_nav_link'>Business & enterprise</Link>
      <Link to ="developers"  className='site_nav_link'>Developers & IT Pros</Link>
      <Link to ="about"  className='site_nav_link'>About</Link>
      </section>
     <Outlet/>
  </section>


  )
}

export default ViewSiteMap
