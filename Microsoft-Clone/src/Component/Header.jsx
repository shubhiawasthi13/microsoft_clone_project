import React, { useRef } from 'react'
import{NavLink, Link} from 'react-router-dom'
import Mainlogo from '../assets/micro-logo.png'
import SerachIcon from '../assets/search-icon.png'
import CartIcon from '../assets/cart-icon.png'
import UserIcon from '../assets/user-icon.png'


function Header() {
    const NavRef = useRef();
    const MicroRef = useRef();

    const showNavbar = () => {
        NavRef.current.classList.toggle("show_navitem")
      }
      const removeNavbar = () => {
        NavRef.current.classList.remove("show_navitem")
      }
      const showMicro = () => {
        MicroRef.current.classList.toggle("show_micro")
      }
      const removeMicro = () => {
        MicroRef.current.classList.remove("show_micro")
      }
  return (
   <header className='header'>
    {/* left nav-item */}
      <div className="left-nav">
      <Link to = "./"
         onClick={removeNavbar}
         >
         <img src={Mainlogo} alt="microsoft-logo"/>
       </Link>
      </div>
 
    {/* middle nav-item */}
        <ul ref={NavRef}>
            <li>
                <NavLink to ="/microsoft-365"
                onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
                Microsoft 365
                </NavLink>
            </li>
            <li>
                <NavLink to ="/teams"
                    onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
             Teams
                </NavLink>
            </li>
            <li>
                <NavLink to ="/copilot"
                 onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
                Copilot
                </NavLink>
            </li>
            <li>
                <NavLink to ="/windows"
                 onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
                Windows
                </NavLink>
            </li>
            <li>
                <NavLink to ="/surface"
                 onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
                Surface
                </NavLink>
            </li>
            <li>
                <NavLink to ="/xbox"
                 onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
                Xbox
                </NavLink>
            </li>
            <li>
                <NavLink to ="/support"
                 onClick={removeNavbar}
                className={({isActive}) =>
                    `${isActive ? "activelink" : "text-dark"} nav_link` 

                }
                >
                Support
                </NavLink>
            </li>
        </ul>
        
    {/* right nav-item */}
        <div className="right_nav">
             <button onClick={showMicro}>All Microsoft ^</button>
                <img src={SerachIcon} alt="search-icon" className='icon'/>
                <Link to ="/cart"> <img src={CartIcon} alt="cart-icon" className='icon'/></Link>
               <Link to ="/signin"><img src={UserIcon} alt="user-icon" className='user-icon'/></Link>
        </div>

    {/* menu-button start*/}
        <div className='menu-btn' onClick={showNavbar}>|||</div>
    {/* menu-button close */}
      
     {/* All microsoft item here */}
   <div className="all_micro container-fluid" ref={MicroRef}>
    <div className="row">
    <div className='col-md-2'>
        <h5>Software</h5>
        <p>Windows Apps</p>
        <p>AI</p>
        <p>OneDrive</p>
        <p>Outlook</p>
        <p>Skytype</p>
        <p>OneNote</p>
        <p>Micrsoft Teams</p>
    </div>
    <div className='col-md-2'>
    <h5>PCs & Devices</h5>
        <p>shop X box</p>
        <p>Accessories</p>
    </div>
    <div className='col-md-2'>
    <h5>Entertainment</h5>
        <p>Xbox Games Pass Ultimate</p>
        <p>Xbox games</p>
        <p>PC games</p>
        <p>Windowa digital games</p>
    </div>
    <div className='col-md-2'>
    <h5>Business</h5>
        <p>Microsoft Cloud</p>
        <p>Microsoft Security</p>
        <p>Azure</p>
        <p>Dynamics 365</p>
        <p>Mocrosoft 365 for business</p>
        <p>Microsoft Industry</p>
        <p>Microsoft power Plateform</p>
        <p>Windows 365</p>
    </div>
    <div className='col-md-2'>
    <h5>Developer & IT</h5>
      <p>Developer Center</p>
      <p>Documentation</p>
      <p>Microsoft Learn</p>
      <p>Microsoft Tech Community</p>
      <p>Azure Marketplace</p>
      <p>AppSource</p>
      <p>Visual Studio</p>
    </div>
    <div className='col-md-2'>
    <h5>Other</h5>
        <p>Free download & security </p>
        <p>Education</p>
        <p>Licensing</p>
    </div>
    </div>
    {/* Sitemap linkh start here */}
    <div className='link_box'>
    <Link to ="/view-sitemap" onClick={removeMicro} className='site_link'>VIEW SITEMAP</Link>
    </div>
     {/* Sitemap linkh end here */}
   </div>
  
   </header>
  )
}

export default Header
