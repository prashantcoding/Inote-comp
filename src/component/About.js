import React from 'react'
import {useContext,useEffect} from 'react'
import NoteContext from '../context/Notecontext'
function About() {
    const a=useContext(NoteContext)
    useEffect(() => {
        a.update()
    },[])
    return (
        
        <div>
            this is About{a.state.name}
        </div>
    )
}

export default About
