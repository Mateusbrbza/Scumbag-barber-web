import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';

import { useStateContext } from '../contexts/ContextProvider';
import icon from '../assets/avatar.png';
import { RiLinksFill } from 'react-icons/ri';


const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <=900) {
      setActiveMenu(false);
    }
  }


  return (
    <div 
    className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
    >
      {activeMenu && (
        <>
        <div className="flex justify-between items-center">
          <Link to="/"
          onClick={handleCloseSidebar}
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold
          tracking-tight dark:text-white text-slate-900"
          >
            <SiShopware /> <span>Scumbag Barber</span>
          </Link>
          <button
          type="button"
          onClick={() => {}}
          className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="mt-10">
          
        </div>
        </>
      )}
    </div>
  )
}

export default Sidebar;