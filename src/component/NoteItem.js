import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" >
        <div className="card-body my-3">
        <div className="d-flex align-itme:center ">
        <h5 className="card-title">{note.title}</h5>
           
           <i className="fas fa-trash mx-2"></i>
           <i className="fas fa-edit"></i>    
             </div>
         
          <p className="card-text">
            {note.description} Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            
            
            Ipsum.
            
          </p>
          
          
          </div>
          
        </div>
     
    </div>
  );
}

export default NoteItem;
