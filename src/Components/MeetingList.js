import React from "react";



// const agendaOfMeetings =

function MeetingList({ meeting }) {
    console.log(meeting)
    return (
        <div className="list-of-meetings">
            <p>{meeting.meeting}</p>
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>

        </div>
    )

}
export default MeetingList;
//topics = {meetingsBooked.users}

// {topics.map(({ id, name, city, agenda }) => (<div>
//     <p key={id}> {agenda}</p>
//     <button key={name}>Edit</button>
//     <button key={city}>Delete</button>
// </div>  ))}
