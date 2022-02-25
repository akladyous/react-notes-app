import {List, ListSubheader, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";

export default function SideBar() {

    return (
        <Grid sx={{minWidth: "200px", flexGrow: 1,}}>
            <List
                sx={{width: "100%"}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Main Menu
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={(e) => { e.stopPropagation() }}>
                    <ListItemIcon>
                        <LightbulbOutlinedIcon />
                    </ListItemIcon>
                    <Link to="/notes" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="Notes" />
                    </Link>
                </ListItemButton>
                
                <ListItemButton onClick={(e) => { e.stopPropagation() }}>
                    <ListItemIcon>
                        <NotificationsNoneOutlinedIcon />
                    </ListItemIcon>
                    <Link to="reminders" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="Reminders" />
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={(e) => { e.stopPropagation() }}>
                    <ListItemIcon>
                        <ArchiveOutlinedIcon />
                    </ListItemIcon>
                    <Link to="/archive" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="Archive" />
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={(e) => {e.stopPropagation() }}>
                    <ListItemIcon>
                        <LabelImportantIcon />
                    </ListItemIcon>
                    <Link to="/labels" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="Labels" />
                    </Link>
                </ListItemButton>

                <ListItemButton onClick={(e) => {e.stopPropagation()}}>
                    <ListItemIcon>
                        <DeleteOutlinedIcon />
                    </ListItemIcon>
                    <Link to="/trash" style={{ textDecoration: 'none' }}>
                        <ListItemText primary="Trash" />
                    </Link>
                </ListItemButton>
            </List>
        </Grid>
    );
}