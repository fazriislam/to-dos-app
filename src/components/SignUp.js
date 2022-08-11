import React, { useState } from 'react';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp=()=> {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, gloading, gerror] = useSignInWithGoogle(auth);
      let perr;

      if (error || gerror) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading || gloading) {
        return (<p>Loading...</p>);
      }

      const handleSubmit = async () =>{
        await createUserWithEmailAndPassword(email, pass);
        navigate('/')
      }

      const handleGoogleSignup = async () =>{
        await signInWithGoogle();
        navigate('/');
      }

  return (
    <div className='min-w-[450px] min-h-[150px] bg-[#12343b] p-[30px] box-border rounded-[10px] shadow-[3px, 6px, 40px] shadow-[#000] mb-[10px]'>
    <div className='flex flex-col items-center gap-3 mb-3'>
    <form className='flex flex-col items-center gap-3'>
        <input onChange={(e) => setEmail(e.target.value)} name='email' type='email' placeholder='Enter your email' required className='outline-none w-[260px] p-[15px] text-[20px] text-white bg-black border border-solid border-[#c89666] rounded-[10px]'></input>
        <input onChange={(e) => setPass(e.target.value)} name='pass' type='password' placeholder='Enter your password' required className='outline-none w-[260px] p-[15px] text-[20px] text-white bg-black border border-solid border-[#c89666] rounded-[10px]'></input>
        
 
        <button
        onClick={handleSubmit}
        type='submit' className='w-[100px] mt- p-[15px]  rounded-[10px] border-none bg-[#f1af71] hover:bg-orange-400 cursor-pointer'>Sign Up</button>
    </form>
    </div>
    <hr/>
    <div className='text-center'>
    <button
     onClick={handleGoogleSignup}
    type='submit' className='w-[200px] mt- p-[15px] mt-3 rounded-[10px] border-none bg-orange-400 hover:bg-orange-600 cursor-pointer'>Sign Up with Google</button>
    </div>
    <div>
        <p className='text-white text-center'><small>Already have an account? <Link to='/login'>Sign In</Link></small></p>
    </div>
    </div>
  )
}

export default SignUp;