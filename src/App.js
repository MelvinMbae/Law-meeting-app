import './App.css';
import Meeting from '../Components/Meeting';
import React from 'react';
import Header from '../Components/Header';
import MeetingForm from '../Components/MeetingForm';
import MeetingList from '../Data/MeetingList';


function App() {
  return (
    <div className="App">
      <Meeting Description="This Meeting is for Employees to Talk about the Ruling." Completed Task="Confirm if all Tasks have been Completed"/>
      <Header title ="Ruling by Justice Maraga for Safaricom vs Airtel"/>
      <MeetingList />
      <MeetingForm Form="Feedback Form" Tasks="Tick where Appropriate"/>
    </div>
  );
}

export default App;
