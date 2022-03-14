import Link from 'next/link';
import React from 'react';
import { BiCameraMovie } from 'react-icons/bi';
import User from '../user/User';

const Header = () => {
  return (
    <div className="sticky mx-auto px-3 sm:px-6 md:px-12 lg:px-32 flex items-center justify-between w-screen h-[10vh] bg-header shadow-2xl">
      <Link href="/" passHref>
        <div className="flex items-center cursor-pointer">
          <BiCameraMovie className="text-3xl font-bold text-purple-500" />
          <h1 className="text-2xl font-bold ml-1 text-purple-600">H-MOVIES</h1>
        </div>
      </Link>

      <User />
    </div>
  );
};

export default Header;
