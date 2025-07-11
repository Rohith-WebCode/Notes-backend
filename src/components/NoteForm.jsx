import React, { useState } from 'react'

const NoteForm = ({onAdd}) => {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
    
      const handleSubmit = async(e)=>{
        e.preventDefault();
        await onAdd({title,description});    
        setTitle("")
        setDescription("")
      }
  return (
    <div>    
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}/><br/>
            <input value={description} onChange={(e)=>setDescription(e.target.value)}/><br/>
            <button type='submit'>Add Note</button>
        </form>  
        </div>
  )
}

export default NoteForm