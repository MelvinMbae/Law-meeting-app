import { useState } from "react";
import React from "react";

function MeetingForm() {
    const [value, setValue] = useState("")
    return (
        <form className="meeting-form">
            <input type="text" className="new-agenda-input" placeholder="Agenda of Meeting" onChange={(e) => console.log(e.target.value)} />
            <button type="submit" className="new-meeting-btn"> Add New Agenda</button>
        </form>
    )
};

export default MeetingForm;