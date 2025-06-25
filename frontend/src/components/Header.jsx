import React from 'react'
import { Link } from 'react-router'
import {logo} from '../assets/'
const Header = () => {
  return (
     <header className="w-full  bg-white  py-4 border-b border-b-[#e6ebf4]">
        <div className='flex justify-between items-center max-container padding-x'>
            <Link to="/">
                <img src={logo} alt="logo" className="w-28 object-contain" />
            </Link>

            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
        </div>
      
    </header>
  )
}

export default Header
