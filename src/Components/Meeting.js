import React from "react";
import { useState } from "react";
import MeetingForm from "./MeetingForm";
import MeetingList from "./MeetingList";

function Meetings() {

    const [meetings, setMeeting] = useState([])

    const addMeeting = meeting => {
        setMeeting([...meetings, { meeting: meeting }])

        console.log(meetings)
    }
    return (
        <div className="form">
            <MeetingForm addMeeting={addMeeting} />
            
            {meetings.map((meeting, index) => (<MeetingList key={index} meeting={meeting}/>))}

        </div>
    )
};

export default Meetings;