import { useState } from "react"

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const[finished,setFinised]=useState(isFinished)
    const[isEditing,setIsEditing]=useState(false)
    const [editText,setEdotText]=useState(todoData)
    return(
        <>
            <input type="checkbox" checked={finished} onChange={(e)=>{
                setFinised(e.target.checked)
                changeFinished(e.target.checked)
            }}/>
            {(isEditing)?<input type="text" value={editText} onChange={e=>setEdotText(e.target.value)}/>: todoData}



            <button onClick={()=>{
                setIsEditing(!isEditing)
                onEdit(editText)
            }}    >{(!isEditing)?'Edit':'Save'}</button>
            <button onClick={onDelete}>Delete</button>
            <br/>
        </>
    )
}
export default Todo