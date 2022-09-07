import React, {  } from 'react';
import { AiOutlineMenu, } from 'react-icons/ai';


const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <button 
    type="button" 
    onClick={customFunc} 
    style={{color}}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
        <span 
        style={{ background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
    </button>
)

const Navbar = () => {
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton 
        title="Menu"
        onClick={() => {}}
        color="red"
        icon={<AiOutlineMenu />}
        />
    </div>
  )
}

export default Navbar;