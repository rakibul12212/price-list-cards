import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
const [open,setOpen] = useState(false);

    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About',
          path: '/about'
        },
        {
          id: 3,
          name: 'Contact',
          path: '/contact'
        },
        {
          id: 4,
          name: 'Products',
          path: '/products'
        },
        {
          id: 5,
          name: 'Services',
          path: '/services'
        },
        
      ];
      
    return (
        <nav>
          <div onClick={()=>setOpen(!open)} className='md:hidden p-4'>
            {/* boro device er jonno hidden hoye jabe */}

            {/* <span>{open === true ? 'open' :'close'}</span> */}
            {/* span er vitore condition */}

            <span>
              {
                open === true ? 
                    <XMarkIcon className="h-6 w-6 text-purple-500 "/>
                    :<Bars3Icon className="h-6 w-6 text-purple-500" />
              }
              </span>
           
           
          
          </div>

          <ul className={`md:flex absolute md:static duration-500 pl-10 pb-4 mx-10 bg-purple-400 ${open ? 'top-10':'-top-48'}`}>
            {/* conditional css class */}
            {
              routes.map(route=> <Link 
                key={route.id}
                route={route}>
              </Link>)
            }
          </ul>

        </nav>
    );
};

export default Navbar;