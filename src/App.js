import React from 'react';
import "./App.css"
import MeetingForm from './Components/MeetingForm';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MeetingForm Form="Feedback Form" Tasks="Tick where Appropriate" />
    </div>
  );
}

export default App;