import { useState, useEffect } from "react";
import { Route, Switch} from "react-router-dom";
import { Grid } from "@mui/material";
import Header from "./Header";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Notes from "./Notes";
import Reminders from "./Reminders";
import Archive from "./Archive"
import Labels from "./Labels"
import Trash from "./Trash";

const style = {
        width: "100%",
        mt: "70px",
        mx: "15px",
        p: "5px",
        height: "600px",
        display: { xs: "flex", xl: "flex" },
        justifyContent: "flex-start",
    }

export default function Home() {
    const [mainStatus, setMainStatus] = useState(false)
    
    useEffect(()=>{
        console.log("home useeffect")
        setMainStatus(!mainStatus)
    },[])

    return (
        <Grid display="flex">
            <Header />
            <Grid sx={style}>
                <SideBar />
                <Grid sx={{ pl: "5px", flexGrow: 5 }}>
                    <SearchBar />
                    <Switch>
                        <Route
                            path="/trash"
                            component={() => (
                                <Trash
                                    query={"trash"}
                                    mainStatus={mainStatus}
                                    setMainStatus={setMainStatus}
                                />
                            )}
                        />
                        <Route
                            path="/reminders"
                            component={() => <Reminders query={"reminder"} />}
                        />
                        <Route
                            path="/labels"
                            component={() => <Labels query={"labels"} />}
                        />
                        <Route
                            path="/notes"
                            component={() => <Notes query={"notes"} />}
                        />
                        <Route
                            path="/archive"
                            component={() => <Archive query={"archive"} />}
                        />
                    </Switch>
                </Grid>
            </Grid>
        </Grid>
    );
}
