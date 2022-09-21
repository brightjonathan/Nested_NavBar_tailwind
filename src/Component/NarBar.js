import { useState } from 'react';
import cloud from '../assets/cloud-icon-8.png';
import { Link } from 'react-router-dom'
import NarList from './NarList';
import Button from './Button';
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const NarBar = () => {

    
  const [nav, setNav] = useState(false);

  
  const handleClick = () =>{
    setNav(!nav)
  }


  return (
    <>
     <nav className='bg-white'>
      <div className='flex items-center font-medium justify-around'>

        <div className='z-50 p-5 md:w-auto w-full flex justify-between '>
            <img src={ cloud } alt='logo' className='w-8 h-9 md:cursor-pointer' />

            <div className='md:hidden' onClick={handleClick}>
             {!nav ? <MenuIcon className='w-7'/> : <XIcon className='w-7'/>}
            </div> 
        </div>

        <ul className='md:flex hidden uppercase items-center gap-8 font-[poppins]'>
            <li> 
                <Link to='/' className='py-7 px-3 inline-block'> Home </Link> 
            </li>

            <NarList /> 
        </ul>

        <div className='md:block hidden' >
            <Button />
        </div>
         
         {/* Mobile navbar  */}
        <ul  className={` md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${nav ? "left-0" : "left-[-100%]"} `} >
            <li>
            <Link to='/' className='py-7 px-3 inline-block'> Home </Link> 
            </li>

            <NarList />
            <div className='py-5' >
            <Button />
        </div>
            
        </ul>


      </div>
    </nav>

    </>
   
  )
}

export default NarBar



