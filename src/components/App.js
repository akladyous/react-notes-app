import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home';

// import React, {useState, useEffect, useRef} from "react";
// import CurrentNoteLoader from "../test/CurrentNoteLoader";
// import NoteLoader from "../test/NoteLoader";
// import NoteInfo from "../test/NoteInfo";

export default function App() {

    
    return (

        // <NoteLoader noteId="4 ">
        //     <NoteInfo />
        // </NoteLoader>

        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
};