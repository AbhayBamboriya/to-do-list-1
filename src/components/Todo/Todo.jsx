import { useState } from "react";

// for printing todo data
function Todo({todoData,isFinished,changeFinished}){
    const[finished,setFinised]=useState(isFinished)
    return(
        <div>
                {/* chaked property used in input to checking the checkbox 
                basicaaly it tells it is finished or not */}
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setFinised(e.target.checked)
                changeFinished(e.target.checked)
            }}/>     
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo;    
// abhay    