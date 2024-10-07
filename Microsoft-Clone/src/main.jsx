
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import Layout from './Component/Layout'
import Home from './Component/HomeComponent/Home'
import Microsoft365 from './Component/Microsoft365Component/Microsoft-365'
import Teams from './Component/Teams/Teams'
import Copilot from './Component/Copilot/Copilot'
import Windows from './Component/Windows/Windows'
import Surface from './Component/Surface/Surface'
import Xbox from './Component/Xbox/Xbox'
import Support from './Component/Support/Support'
import Viewsitemap from './Component/All-Microsoft/ViewSiteMap'
import Sales from './Component/All-Microsoft/Sales'
import Software from './Component/All-Microsoft/Software'
import Devices from './Component/All-Microsoft/Devices'
import Business from './Component/All-Microsoft/Business'
import Developers from './Component/All-Microsoft/Developers'
import About from './Component/All-Microsoft/About'
import Cart from './Component/Cart/Cart'
import Signup from './Component/Login_Signup/Signup'
import Signin from './Component/Login_Signup/Signin'




const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element= {<Layout/>}>
     <Route index element= {<Home/>}/>
     <Route path ='microsoft-365' element= {<Microsoft365/>}/>
     <Route path ='teams' element= {<Teams/>}/>
     <Route path ='copilot' element= {<Copilot/>}/>
     <Route path ='windows' element= {<Windows/>}/>
     <Route path ='surface' element= {<Surface/>}/>
     <Route path ='xbox' element= {<Xbox/>}/>
     <Route path ='support' element= {<Support/>}/>
   {/* nested routing */}
     <Route path='view-sitemap' element = {<Viewsitemap/>}>
       <Route index element = {<Sales/>}/>
       <Route path='software' element = {<Software/>}/>
       <Route path='devices' element = {<Devices/>}/>
       <Route path='business' element = {<Business/>}/>
       <Route path='developers' element = {<Developers/>}/>
       <Route path='about' element = {<About/>}/>
    </Route>
   {/* nested routing */}
    <Route path='cart' element = {<Cart/>}/>
</Route>
<Route>
<Route path='signup' element = {<Signup/>}/>
<Route path='signin' element = {<Signin/>}/>
</Route>
</>
  )
) 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);
