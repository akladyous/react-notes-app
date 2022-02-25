import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const NoteObj = {
    "id": 0,
    "title": "",
    "content": "",
    "image": null,
    "labels": null,
    "dateTime": null,
    "reminder": null,
    "trash": false,
    "archived": false,
    "likes": 0,
    "notes": true
}

const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 250,
    bgcolor: "background.paper",
    border: "2px solid blue",
    boxShadow: 24,
    p: 4,
};
export default function NoteData(props) {
    const { openNewNote, handelCloseNewNote } = props;
    const NoteObject = new Object(NoteObj);
    NoteObject.id = crypto.randomUUID();
    const [noteTitle, setNoteTitle] = useState('')
    const [noteContent, setNoteContent] = useState('')

    const CancelNote = ()=>{
        setNoteTitle('');
        setNoteContent('');
        handelCloseNewNote();
    }
    const handleNoteTitle = (e) =>{
        setNoteTitle(e.target.value)
    }
    useEffect(()=>{
        NoteObject.title = noteTitle
    },[noteTitle])

    const handleNoteContent = (e) =>{
        setNoteContent(e.target.value)
    }
    useEffect(()=>{
        NoteObject.content = noteContent;
    },[noteContent])


    const saveNote = () => {
        fetch(`http://localhost:3501/notes/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(NoteObject),
        })
            .then((res) => res.json())
            .then((noteItem) => {
                console.log(noteItem)
            })
            .catch((err) => {
                console.log(err);
            });
        // setNoteListState(!noteListState);
        CancelNote();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openNewNote}
                onClose={CancelNote}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 300 }}
            >
                <Fade in={openNewNote}>
                    <Box>
                        <Box sx={style}>
                            <TextareaAutosize
                                maxRows={1}
                                aria-label="maximum height"
                                placeholder="Title"
                                style={{
                                    width: 500,
                                    height: 25,
                                    border: "1",
                                }}
                                defaultValue=""
                                value={noteTitle}
                                onChange={handleNoteTitle}
                            />

                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Write your note here..."
                                style={{
                                    width: 500,
                                    height: 200,
                                    border: "1",
                                }}
                                defaultValue=""
                                value={noteContent}
                                onChange={handleNoteContent}
                            />

                            <Stack direction="row" spacing={1}>
                                <Button
                                    size="small"
                                    onClick={saveNote}
                                >
                                    Save
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
