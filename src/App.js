import React from 'react';
import './App.css';
import Hello from './hello';

function App({name}) {
  return <div>
             <Hello course="BootCamp-2020"></Hello>
             <br/><br/>
             <h3>Thanks BootCamp Team for helping us to Develop App in a great way</h3>
             <h4>by {name}</h4>
         </div>;
}

export default App;
