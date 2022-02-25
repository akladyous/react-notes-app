import { useState } from 'react';
import NewNote from './NewNote';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

export default function SearchBar() {

    const [openNewNote, setOpenNewNote] = useState(false);
    const handelCloseNewNote = () => setOpenNewNote(false)

    const handleNewNote = (e) => {
        setOpenNewNote(true)
    }
    return (
        <Grid
            sx={{
                border: "1px solid blue",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
            }}
        >
            <InputBase
                className="searchInput"
                sx={{ px: "5px", maxWidth: "90%", flexGrow: 1 }}
                placeholder="Search Notes"
                inputProps={{ "aria-label": "search google maps" }}
            />

            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Button size="small" onClick={handleNewNote}>New</Button>

            <NewNote 
                openNewNote={openNewNote}
                handelCloseNewNote={handelCloseNewNote}
            />
        </Grid>
    );
}