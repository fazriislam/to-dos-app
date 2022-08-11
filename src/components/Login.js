import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Login=()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }

      const handleLogin = async ()=>{
        await signInWithEmailAndPassword(email, password);
        navigate('/');
      }

  return (
    <div className='min-w-[450px] min-h-[150px] bg-[#12343b] p-[30px] box-border rounded-[10px] shadow-[3px, 6px, 40px] shadow-[#000] mb-[10px]'>
        <form className='flex flex-col items-center gap-3'>
        <input onChange={(e) => setEmail(e.target.value)} name='email' type='email' placeholder='Enter your email' required className='outline-none w-[260px] p-[15px] text-[20px] text-white bg-black border border-solid border-[#c89666] rounded-[10px]'></input>
        <input onChange={(e) => setPassword(e.target.value)} name='pass' type='password' placeholder='Enter your password' required className='outline-none w-[260px] p-[15px] text-[20px] text-white bg-black border border-solid border-[#c89666] rounded-[10px]'></input>
        <button onClick={handleLogin} type='submit' className='w-[100px] mt- p-[15px]  rounded-[10px] border-none bg-[#f1af71] hover:bg-orange-400 cursor-pointer'>Sign in</button>
    </form>
    <div>
        <p className='text-white text-center'><small>New here? <Link to='/signup'>Sign Up</Link></small></p>
    </div>
    </div>
  )
}

export default Login;