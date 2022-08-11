import React from 'react';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const  Header=()=> {
  const logout = () => {
    signOut(auth);
};
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-white text-center my-[30px] font-bold text-2xl'>To Dos List</h1>
        <button onClick={logout} type='submit' className='w-[70px] text-[15px] p-[5px] rounded-[10px] border-none bg-red-800 hover:bg-red-700 text-slate-300 cursor-pointer'>Sign Out</button>
    </div>
  )
}

export default Header;