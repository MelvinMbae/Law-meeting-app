import React from "react";
import meetingsBooked from "../Data/List";



// const agendaOfMeetings =

function MeetingList({ topics }) {
    console.log(topics)
    return (
        <div className="list-of-meetings">
            {topics.map(({ id, name, city, agenda }) => (<div>
                <p key={id}> {agenda}</p>
                <button key={name}>Edit</button>
                <button key={city}>Delete</button>
            </div>
            )
            )}




        </div>
    )

}
export default MeetingList;
