import React from 'react'
import { useState } from 'react'

export default function AddNote({ handleAddNote, handleToggleDarkMode}) {
    const [noteText, setnoteText] = useState('')
    const characterLimit = 200 

    const handleChange = (event) =>{
        if (characterLimit - event.target.value.length >=0) {
         setnoteText(event.target.value)    
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setnoteText('')
        }
    }
    return (
        <div className="note ">
            <textarea 
            cols="8" 
            rows="5"
            placeholder='Add note'
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="note-footer p-3">
                <small>{characterLimit - noteText.length}</small> 
                <button className="btn btn-info text-white" onClick={handleSaveClick}>Add Note</button>
            </div>
        </div>
    )
}
