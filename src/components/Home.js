import React, { useState } from 'react'
import auth from '../firebase.init';
import Form from './Form';
import Header from './Header';
import TaskList from './TaskList';
import { signOut } from 'firebase/auth';

const Home=()=> {
    const [tasks, setTasks] = useState([]);

  return (
   <>
    <div className='min-w-[450px] min-h-[650px] bg-[#12343b] p-[30px] box-border rounded-[10px] shadow-[3px, 6px, 40px] shadow-[#000] mb-[10px]'>
      
      <div><Header/></div>
      <div><Form
      tasks={tasks}
      setTasks={setTasks}
      /></div>
    <div><TaskList
    tasks={tasks}
    setTasks={setTasks}
    /></div>
    
  
      </div>
   </>
  )
}

export default Home;