import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Products', path: '/productd' },
        { id: 3, name: 'Order', path: '/order' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]

    return (
        <nav className='bg-blue-300 w-full py-3'>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
            </div>
            <ul className={`md:flex w-full justify-center md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-160px]'} absolute`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;