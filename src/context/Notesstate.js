
import NoteContext from './Notecontext'
import {useState} from "react"

const NoteState=(props)=>{
    const InitialNotes=[
      ]
      const [notes, setnotes] = useState(InitialNotes)
      //Add a Notes
      const addNote=(title,description,tag)=>{
        //TODO API callsite
        console.log("Adding a new note")
         const note= {
            "_id": "23616a54",
            "user": "616ASDFbbc45d58a967914e75091",
            "title": title,
            "description": description,
            "tag": "Love",
            "date": "2021-10-17T06:11:47.833Z",
            "__v": 0
          };
          setnotes(notes.concat(note))

      }
      //Delete a Notes
      const DeleteNote=(id)=>{
        console.log("deting the note with id "+id)
        const newNotes=notes.filter((note)=>{ return note._id!==id})
        setnotes(newNotes)
      }
      //Edit a Notes
      const EditNote=(id,title,description,tag) =>{
        //API CALLS
        //logic to edit
        console.log ("hii")
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id===id)
          element.title = title;
          element.description = description;
          element.tag = tag;
          
        }
      }
      
   return(
        <NoteContext.Provider value={{notes,setnotes,addNote,DeleteNote,EditNote}}>
            {props.children}


    </NoteContext.Provider>)
}
export default NoteState;