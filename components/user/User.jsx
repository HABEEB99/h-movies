import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

// const Logout = () => {
//   return (
//     <div className="absloute top-0 right-10">
//       <button className="bg-btn text-white text-xl font-bold">Logout</button>
//     </div>
//   );
// };

const User = () => {
  const [logout, setLogout] = useState(false);
  //   const handleLogout = () => {
  //     setLogout(!logout);
  //   };
  return (
    <div className=" cursor-pointer">
      {!logout ? (
        <BsFillPersonFill
          onClick={() => setLogout(true)}
          className="text-4xl text-btn"
        />
      ) : (
        <div onClick={() => setLogout(false)} className="">
          <button className="hover:bg-btn border-btn border-2 rounded-lg hover:text-white text-2xl font-bold w-40 h-12">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
