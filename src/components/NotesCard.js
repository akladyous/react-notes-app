import { useState } from "react";
import NoteData from "./NoteData"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function NotesCard(props) {
    const { note, noteListState, setNoteListState } = props;
    const [openModal, setOpenModal] = useState(false);    
    const handleCloseModal = () => setOpenModal(false)
    const handelOpenModel = (e) => {
        console.log(openModal)
        setOpenModal(true)
    }
    return (
        <Card
            sx={{
                maxHeight: 250,
                maxWidth: 380,
                border: "1px solid blue",
                m: "5px",
                // p: "5px",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                // justifyItems: "end"
            }}
        >
            <CardContent sx={{ p: "7px" }}>
                <Typography
                    // wordWrap="break-word"
                    sx={{
                        fontSize: 18,
                        fontWeight: "bold",
                    }}
                    color="text.secondary"
                    gutterBottom
                >
                    {note.title}
                </Typography>

                <Typography
                    // wordWrap="break-word"
                    sx={{ fontSize: 13 }}
                >
                    {`${note.content.substr(0, 200).trim()} ...`}
                    {/* {note.content} */}
                    {/* <br /> */}
                </Typography>
            </CardContent>
            <CardActions sx={{ px: "5px", pb: "1px" }}>
                <Button size="small" onClick={handelOpenModel}>
                    Open Note
                </Button>
            </CardActions>
            <NoteData
                openModal={openModal}
                handleClose={handleCloseModal}
                note={note}
                noteListState={noteListState}
                setNoteListState={setNoteListState}
            />
        </Card>
    );
}
