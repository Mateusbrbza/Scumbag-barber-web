import React, { useEffect } from 'react';
import { AiOutlineMenu, } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import profile from '../assets/avatar.png';
import { useStateContext} from '../contexts/ContextProvider';


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
    const { setActiveMenu, handleClick,
        screenSize, setScreenSize } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton 
        title="Menu"
        // onClick={() => {}}
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="red"
        icon={<AiOutlineMenu />}
        />
    <div className="flex">
        <NavButton 
        title="Notifications"
        // onClick={() => {}}
        customFunc={() => handleClick('notification')}
        color="red"
        icon={<RiNotification3Line />}
        />

    <div
    className="flex items-center gap-2 cursor-poiner p-1 hover:bg-light-gray rounded-lg"
    onClick={() => handleClick('userProfile')}
    // onClick={() => {}}
    >
        <img
        className="rounded-full w-8 h-8"
        src={profile}
        alt="user-profile"
        />
        <p>
            <span className="text-gray-400 text-14">
                Olá,
            </span> {' '}
            <span className="text-gray-400 font-bold ml-1 text-14">
                Miguel.
            </span>
        </p>
        <MdKeyboardArrowDown
        className="text-gray-400 text-14"
        />
    </div>
    </div>
    </div>
  )
}

export default Navbar;