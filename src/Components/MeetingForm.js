import { useState } from "react";
import React from "react";

function MeetingForm({ addMeeting }) {
    const [value, setValue] = useState("")
    const formSubmission = e => {
        e.preventDefault();

        addMeeting(value);
    }
    return (
        <form className="meeting-form" onSubmit={formSubmission}>
            <input type="text" className="new-agenda-input" placeholder="Agenda of Meeting" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className="new-meeting-btn"> Add New Agenda</button>
        </form>
    )
};

export default MeetingForm;