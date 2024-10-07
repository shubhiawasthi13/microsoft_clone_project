import React from 'react'
import {Link} from 'react-router-dom'
import Homeslider1 from '../HomeComponent/home-1.png'
import Homeslider2 from '../HomeComponent/home-2.png'
import Icon14 from '../HomeComponent/icon1nd4.svg'
import Icon2 from '../HomeComponent/icon-2.svg'
import Icon3 from '../HomeComponent/icon-3.svg'
import Card from './Card'
import Card1 from '../HomeComponent/card-1.png'
import Card2 from '../HomeComponent/card-2.webp'
import Card3 from '../HomeComponent/card-3.webp'
import Card4 from '../HomeComponent/card-4.png'
import Card5 from '../HomeComponent/card-5.png'
import Card6 from '../HomeComponent/card-6.png'
import Card7 from '../HomeComponent/card-7.jpeg'
import Card8 from '../HomeComponent/card-8.png'
import Gamepass from '../HomeComponent/gamepass.png'
import Facebook from '../HomeComponent/fb-icon.png'
import Twitter from '../HomeComponent/twiter-icon.png'
import Utube from '../HomeComponent/utube-icon.png'

function Home() {
  return (
       <>
       {/* home section start here */}
   <section id='home'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src= {Homeslider1} className="d-block w-100" alt="home-slider"/>
    </div>
    <div className="carousel-item">
      <img src= {Homeslider2} className="d-block w-100" alt="home-slider"/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </section>
  
       {/* Home Icon section start here */}
    <section className="container m-auto p-4 mt-4 my-4 icon_container">
      <div className="row">
      <div className="col-md-3 col-sm-6 text-center">
       <center>
       <img src={Icon14} alt="Icon-1" /><br/>
       </center>
        <Link to ="/microsoft-365">Choose your Microsoft 365</Link>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
     <center>
        <img src={Icon2} alt="Icon-2" /><br/>
        </center>
        <Link to ="#" className='text-center'>Shop Xbox</Link>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
      <center>
        <img src={Icon3} alt="Icon-3" /><br/>
        </center>
        <Link to ="#" className='text-center'>Get Winows 11</Link>
      </div>
      <div className="col-md-3 col-sm-6 text-center">
      <center>
      <img src={Icon14} alt="Icon-4" /><br/>
      </center>
        <Link to ="#" className='text-center'>Explore Surface Devices</Link>
      </div>
      </div>
      
    </section>

          {/* HomeCard Section start here */}
          <section className="container-fluid w-100 m-auto mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                  <Card 
                   cardimg ={Card1}
                   title ="Maximise the everyday with Microsoft 365"
                   text= "Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan."
                   cardbtn= "For one person"
                   />
                </center>
              </div>
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                <Card 
                   cardimg ={Card2}
                   title ="Xbox Series X"
                   text= "The fastest, most powerful Xbox ever."
                   cardbtn= "Shop Xbox Series"/>
                </center>
              </div>
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                <Card 
                   cardimg ={Card3}
                   title ="Xbox Series 5"
                   text= "Next-gen performance in the smallest Xbox ever"
                   cardbtn= "Shop Xbox Series 5"/>
                </center>
              </div>
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                <Card 
                   cardimg ={Card4}
                   title ="Designed for life today - and tomorrow"
                   text= "The next-generation of games. Your goals. Friends and family. Windows 11 was made to bring you closer to everything you love."
                   cardbtn= "See if your PC is ready"/>
                </center>
              </div>
            
            </div>
          </section>

          {/* Game section start here */}
          <section className="game_pass">
  
             <div className='pass_info'>
            <center>
            <div>
                <h3 className='fw-bold'>Game Pass</h3>
                <p>Play new games on day one, plus, enjoy hundreds of high quality games with friends on console and PC.</p>
                <button className='btn btn-primary fw-bold'>Join now</button>
             </div>
            </center>
             </div>

             <div className='pass_banner'>
              <img src={Gamepass} alt="game-banner" />
             </div>
        
          </section>

          {/* busniess card start here */}
          <section className="container-fluid w-100 m-auto mt-5 mb-5">
            <h2 className='text-dark business_head'>For business</h2>
            <div className="row">
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                  <Card 
                   cardimg ={Card5}
                   title ="Surface for Business"
                   text= "No matter what you do, there’s a Surface to help you do it."
                   cardbtn= "Shop now"
                   />
                </center>
              </div>
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                <Card 
                   cardimg ={Card6}
                   title ="Get Microsoft Teams for your business"
                   text= "Online meetings, chat, real-time collaboration, and shared cloud storage – all in one place."
                   cardbtn= "Find the right plan for your business"/>
                </center>
              </div>
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                <Card 
                   cardimg ={Card7}
                   title ="Winodows 11 for business"
                   text= "Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all."
                   cardbtn= "Learn more"/>
                </center>
              </div>
              <div className="col-md-3 col-sm-6 mt-3">
                <center>
                <Card 
                   cardimg ={Card8}
                   title ="Microsoft 365 Copilot"
                   text= "Save time and focus on the things that matter most with AI in Microsoft 365 for business."
                   cardbtn= "Listen more"/>
                </center>
              </div>
            
            </div>
          </section>

            {/* social container start here */}
          <section className="social_icon container-fluid ">
           <span>Follow Microsoft</span>
            <Link to="#">
            <img src={Facebook} alt="facebook" />
            </Link>
            <Link to="#"  >
            <img src={Twitter} alt="twiter" />
            </Link>
            <Link to="#">
            <img src={Utube} alt="utube" />
            </Link>
          
          </section>
    </>
  )
}

export default Home
