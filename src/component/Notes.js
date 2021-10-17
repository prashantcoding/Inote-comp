import React,{useContext} from "react"
import NoteContext from "../context/Notecontext";
import NoteItem from "../component/NoteItem"
const Notes = () => {
    const context=useContext(NoteContext)
  const{notes,setNotes}=context;
    return (
        <div className="row my-3">
    <h1>Your Notes</h1>
    {notes.map((notes)=>{
      return <NoteItem key={notes._id} note={notes}/>
    })}
    </div>
    )
}

export default Notes
