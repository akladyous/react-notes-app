import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

export default function NoteData(props) {

    const { openModal, 
            handleClose, 
            note,
            noteListState,
            setNoteListState } = props;

    const [text, setText] = useState(note.content);
    const [trashed, setTrashed] = useState(note.trashed);

    const handleText = (e) => {
        setText(e.target.value);
    };
    useEffect(() => {
        note.content = text;
    }, [text]);
    
    const handleTrashed = (e) => {
        setTrashed(!trashed)
    }
    useEffect(()=> {
        note.trash = trashed
        note.notes = false
        trashNote()
    },[trashed])


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

    const saveNote = () => {
        // fetch(`http://localhost:3501/notes/${note.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(note),
        // })
        //     .then((res) => res.json())
        //     .then((noteItem) => {
        //         // console.log(noteItem)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // setNoteListState(!noteListState)
        handleClose();
    };

    const trashNote = () => {
        // fetch(`http://localhost:3501/notes/${note.id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(note),
        // })
        //     .then((res) => res.json())
        //     .then((noteItem) => {
        //         // console.log(noteItem)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // setNoteListState(!noteListState);
        handleClose();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 300 }}
            >
                <Fade in={openModal}>
                    <Box>
                        <Box sx={style}>
                            <Typography variant="h6" component="h2">
                                {note.title}
                            </Typography>
                            <TextareaAutosize
                                maxRows={10}
                                aria-label="maximum height"
                                placeholder="Maximum 4 rows"
                                style={{
                                    width: 500,
                                    height: 200,
                                    border: "none",
                                }}
                                // defaultValue={text}
                                value={text}
                                onChange={handleText}
                            />
                            {/* <Typography sx={{ mt: 2 }}>{note.title}</Typography> */}

                            <Stack direction="row" spacing={1}>
                                <Button size="small" onClick={saveNote}>
                                    Save
                                </Button>
                                {/* <Button size="small" onClick={handleTrashed}>
                                    Trash
                                </Button> */}
                                {/* <Button size="small">Delete</Button> */}

                                <IconButton
                                    color="secondary"
                                    aria-label="reminder"
                                >
                                    <AlarmIcon />
                                </IconButton>

                                <IconButton
                                    color="secondary"
                                    aria-label="archive"
                                >
                                    <ArchiveOutlinedIcon />
                                </IconButton>

                                <IconButton aria-label="label">
                                    <LabelOutlinedIcon />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
