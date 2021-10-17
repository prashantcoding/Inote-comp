import React,{useContext,useState} from "react";
import NoteContext from "../context/Notecontext"
function Addnote() {
    const context=useContext(NoteContext)
    const [note, setnote] = useState({title:"",description:"",tag:""})
  const{addNote}=context;
  const handleClick=(e)=>{
      e.preventDefault();
        addNote(note.title,note.description,note.tag);
  }
  const onChange=(e)=>{
        setnote({...note,[e.target.name]:e.target.value})
}
    return (
        
        <div>
            <div>
        <div className="container my-3">
      <h1>Add a Note </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      
      </div>
        </div>
    )
}

export default Addnote
