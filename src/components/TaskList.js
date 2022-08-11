import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const  TaskList=({tasks,setTasks})=> {

    const handleDelete = ({id}) =>{
        // console.log(id);
        setTasks(tasks.filter((task)=>task.id !== id))
    };

    const handleComplete = (item)=>{
        // console.log(item);
        setTasks(
            tasks.map(task=>{
                // console.log(task)
                if(item.id === task.id){
                    return {...task, complete: !(task.complete)};
                };
                return task;
            })
        )
        
    }
  return (
    <div>
        {
            tasks.map(task=>(
                <li key={task.id} className='flex my-[20px] mr-[35px] border border-solid border-[#ccc] rounded-[10px] pl-[10px] max-h-[50px]'>
                    <input
                    type='text'
                    value={task.title}
                    onChange={(e)=>e.preventDefault()}
                    className={`${task.complete ? 'line-through opacity-[.6] decoration-white' : ''} w-[220px] bg-[#12343b] border-none text-white text-[20px] pl-[10px] mr-[15px]`}
                    />
                    <div>
                        <button className='text-[#ff6c6c] mr-[10px] border-none outline-none cursor-pointer bg-transparent text-[28px] rounded-full' onClick={()=>handleComplete(task)}>
                        {
                            task.complete ?
                            <FontAwesomeIcon icon={faXmark} />:
                            <FontAwesomeIcon icon={faCheckCircle} />
                        }
                        </button>

                        <button className='text-red-800 border-none outline-none cursor-pointer bg-transparent text-[28px] rounded-full' onClick={()=>handleDelete(task)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))
            
        }
    </div>
  )
}

export default TaskList;