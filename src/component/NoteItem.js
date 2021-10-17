import React,{useContext} from "react";
import NoteContext from "../context/Notecontext"
function NoteItem(props) {
  const context=useContext(NoteContext)
  const{DeleteNote}=context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" >
        <div className="card-body my-3">
        <div className="d-flex align-itme:center ">
        <h5 className="card-title">{note.title}</h5>
           
           <i className="fas fa-trash mx-2"onClick={()=>{
             DeleteNote(note._id)
           }}></i>
           <i className="fas fa-edit"></i>    
             </div>
         
          <p className="card-text">
            {note.description} 
            
            
            
            
          </p>
          
          
          </div>
          
        </div>
     
    </div>
  );
}

export default NoteItem;
