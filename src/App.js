import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
 const [note,setNote] = useState([])

  const addNote = async(note)=>{
    await fetch('/add-note',{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(note)
    }) 
    getNote()
  }

  const getNote = async()=>{
   const res= await fetch('/note')
   const data = await res.json()
   setNote(data)
  }  

  const deleteNote = async(id)=>{    
    await fetch(`/delete?id=${id}`,{
      method:'DELETE'
    })

    getNote()
  }

  useEffect(() => {
   getNote()
  },[])
  
  
  return (
    <div className="App">
      <h1>hi note app</h1>
      <NoteForm onAdd={addNote}/>
      <NoteList note={note} onDelete={deleteNote}/>
      
    </div>
  );
}

export default App;
