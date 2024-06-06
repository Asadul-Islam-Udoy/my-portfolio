import React, { useEffect, useState } from 'react'
import './Navbar.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Singup from '../auth/Singup';
import Singin from '../auth/Singin';
function Navbar() {
    const [singup,setSingup] = useState(false)
    const [singin,setSingin] = useState(false)
    const[link,setLink] = useState(0);
    const linkObj = [
        {name:"Home"},
        {name:"Skills"},
        {name:"Projects"},
        {name:"Abouts"},
        {name:"Contract"}
    ];
  return (
    <>
    {singup && <Singup setSingin={setSingin} />}
    {singin && <Singin setSingup={setSingup}/>}
     <div className='navbar__container'>
       <div className='navbar__box'>
         <div className='navbar__left'></div>
         <div className='navbar__right'>
            {linkObj.map((i,index)=>(
            <li><a onClick={()=>setLink(index)} style={link === index?{color:'gold',borderBottom:'gold'}:{}} href={`#${i.name}`}>{i.name}</a></li>
            ))}
         </div>
       </div>
       <p onClick={()=>setSingup((pre)=>!pre)} className='singup__section'><ExitToAppIcon className='singup__icon'/>Sing-up</p>
     </div>
    </>
  )
}

export default Navbar