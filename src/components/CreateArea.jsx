import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [expanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }

    function expand() {
        setExpanded(true);
    }
    
    return (
        <div>
            <form className="create-note">
                {expanded && (
                <input 
                onChange={handleChange} 
                name="title" 
                value={note.title} 
                placeholder="Title" />
                )}

                <textarea 
                onClick={expand}
                name="content"
                placeholder="Take a note..."
                value={note.content}
                onChange={handleChange}
                rows={expanded ? 3 : 1} />
                
                <Zoom in={expanded}>
                    <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea