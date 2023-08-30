import React from "react";
import { useState } from "react";
import MeetingForm from "./MeetingForm";

function Meetings() {

    const [meetings, setMeeting] = useState([])

    const addMeeting = meeting => {
        setMeeting([...meetings, { meeting: meeting }])

        console.log(meetings)
    }
    return (
        <div className="meeting-list">
            <MeetingForm addMeeting={addMeeting} />

        </div>
    )
};

export default Meetings;