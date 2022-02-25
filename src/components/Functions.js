import {useState} from 'react'

export default function Functions() {

    const [notes, setNotes] = useState(false)
    const [reminders, setReminders] = useState(false)
    const [archive, setArchive] = useState(false)
    const [trash, setTrach] = useState(false)

    return (
        notes, reminders, archive, trash
    )
}
