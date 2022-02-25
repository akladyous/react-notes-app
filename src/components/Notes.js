import { useState, useEffect } from 'react';
import { Grid} from '@mui/material'
import NotesCard from './NotesCard'

export default function Notes({query}) {
    console.log(query)
    const [noteLists, setNoteLists] = useState([]);
    const [noteListState, setNoteListState] = useState(false);
    useEffect(() => {
        fetch("http://localhost:3501/notes")
            .then((res) => res.json())
            .then((note) => {
                setNoteLists(note);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <Grid
            sx={{
                border: "1px solid blue",
                borderRadius: "5px",
                mt: "5px",
                Height: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
            }}
        >
            {noteLists
                .filter((noteitem) => Boolean(noteitem[query]) === true)
                .map((note) => (
                    <NotesCard
                        key={note.id}
                        note={note}
                        noteListState={noteListState}
                        setNoteListState={setNoteListState}
                    />
                ))}
        </Grid>
    );
}
