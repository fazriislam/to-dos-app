import React from 'react';
import {v4 as uuidV4} from "uuid";

const Form=({tasks,setTasks})=> {
    const handleFormSubmit = e=>{
        e.preventDefault();
        const task = e.target.input.value;
        setTasks([...tasks, {id: uuidV4(),title:task, complete:false}]);
        e.target.input.value = '';
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input name='input' type='text' placeholder='Enter your task' required className='outline-none w-[260px] p-[15px] mr-[25px] text-[20px] text-white bg-black border border-solid border-[#c89666] rounded-[10px]'></input>
        <button type='submit' className='w-[70px] p-[15px] hover:bg-orange-400 rounded-[10px] border-none bg-[#f1af71] cursor-pointer'>Add</button>
    </form>
  )
}

export default Form;