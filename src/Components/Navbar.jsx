import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MdClose } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import './navbar.css';
import logo from "../assets/logo.png";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeNav = () => {
        setMenu(false);
    };

    return (
        <div className='fixed w-full'>
            <div>
                <div className={`flex flex-col md:flex-row justify-between p-5 md:px-32 px-5 bg-purple shadow-md`}>
                    <div className='flex items-center cursor-pointer mb-4 md:mb-0'>
                        <span>
                            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                        </span>
                        <h1 className='text-2xl md:text-3xl font-semibold text-white'>AT-DIGITAL</h1>
                    </div>
                    <nav className={`${menu ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center text-lg text-white font-small gap-6`}>
                        <Link to='servicers' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>SERVICERS</Link>
                        <Link to='aboutus' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>ABOUT US</Link>
                        <Link to='contactus' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>CONTACT US</Link>
                        <Link to='careers' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>CAREERS</Link>
                    </nav>
                    <div className='md:hidden flex items-center absolute right-5 top-5' onClick={handleChange}>
                        {menu ? (
                            <MdClose size={25} color='white' />
                        ) : (
                            <BiMenu size={25} color='white' />
                        )}
                    </div>
                </div>

                <div className={`${menu ? "flex" : "hidden"} md:hidden flex-col absolute bg-purple text-white left-0 top-20 font-semibold text-center pt-8 pb-4 gap-8 w-full transition-transform duration-300`}>
                    <Link to='servicers' spy={true} duration={300} className='hover:text-black cursor-pointer' onClick={closeNav}>SERVICERS</Link>
                    <Link to='aboutus' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>ABOUT US</Link>
                    <Link to='contactus' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>CONTACT US</Link>
                    <Link to='careers' spy={true} duration={500} className='hover:text-black cursor-pointer' onClick={closeNav}>CAREERS</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;


