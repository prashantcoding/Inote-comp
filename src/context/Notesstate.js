
import NoteContext from './Notecontext'
import {useState} from "react"

const NoteState=(props)=>{
    const s1={
        "name":"harry",
        "class":"cse"
    }
    const [state, setstate] = useState(s1)
    const update=()=>{
        setTimeout(()=>{
            setstate({
                "name":"Jerry",
                "class":"cse"
            })
        },1000)
    }
    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}


    </NoteContext.Provider>)
}
export default NoteState;