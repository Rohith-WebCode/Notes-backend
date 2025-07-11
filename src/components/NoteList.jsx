import React from 'react'
import '../App.css'; 

const NoteList = ({note,onDelete}) => {
  return (
    <div>
     {note.map((data)=>(
      <div className='the-NoteList'>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <button onClick={()=>onDelete(data.id)}>Delete</button>
        </div>
     ))}
    </div>
  )
}

export default NoteList