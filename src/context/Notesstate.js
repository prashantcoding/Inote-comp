
import NoteContext from './Notecontext'
import {useState} from "react"

const NoteState=(props)=>{
    const InitialNotes=[
        {
          "_id": "616bbeas3dasdf58a967914e75098",
          "user": "616bbc45d58a967914e75091",
          "title": "mytitle",
          "description": "mydesc",
          "tag": "Love",
          "date": "2021-10-17T06:11:47.833Z",
          "__v": 0
        },
        {
            "_id": "616bbdea3d58a967914e75098",
            "user": "616bbc45d58a967914e75091",
            "title": "mytitle",
            "description": "mydesc",
            "tag": "Love",
            "date": "2021-10-17T06:11:47.833Z",
            "__v": 0
          },
          {
            "_id": "616bbeaadf3ad58a967914e75098",
            "user": "616bbc45d58a967914e75091",
            "title": "mytitle",
            "description": "mydesc",
            "tag": "Love",
            "date": "2021-10-17T06:11:47.833Z",
            "__v": 0
          },
          {
            "_id": "616bbeaa3d5adfa8ea967914e75098",
            "user": "616bbc45d58a967914e75091",
            "title": "mytitle",
            "description": "mydesc",
            "tag": "Love",
            "date": "2021-10-17T06:11:47.833Z",
            "__v": 0
          },
          {
            "_id": "616bbea3dd58aasdfas96g7914e75098",
            "user": "616bbc45d58a967914e75091",
            "title": "mytitle",
            "description": "mydesc",
            "tag": "Love",
            "date": "2021-10-17T06:11:47.833Z",
            "__v": 0
          },
          {
            "_id": "616bbea3d58a9sadfas67a914e75098",
            "user": "616bbc45d58a967914e75091",
            "title": "mytitle",
            "description": "mydesc",
            "tag": "Love",
            "date": "2021-10-17T06:11:47.833Z",
            "__v": 0
          }
        
      ]
      const [notes, setnotes] = useState(InitialNotes)
   return(
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}


    </NoteContext.Provider>)
}
export default NoteState;