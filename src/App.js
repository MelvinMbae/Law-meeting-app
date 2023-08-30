import React, { useSyncExternalStore } from 'react';
import "./App.css"
import Header from './Components/Header';
import Meetings from './Components/Meeting';
import MeetingList from './Components/MeetingList';
import meetingsBooked from './Data/List';

function App() {
  return (
    <div className="App">
      <Header />
      <Meetings />
      <MeetingList topics = {meetingsBooked.users}/>
      
    </div>
  );
}

export default App;