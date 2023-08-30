import { useState } from "react";
import React from "react";

function Form() {
    return (
    <form className="meeting-form">
        <input type="text"className = "new-agenda-input" placeholder="Agenda of Meeting"/> 
        <button type = "submit" className="new-meeting-btn"> Add New Agenda</button>   
    </form>
     )
};

export default Form;