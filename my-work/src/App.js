import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Pappa from './components/Pappa';
// import ContextParent from './components/ContextParent';
import Movie from './components/node api call/Movie';
// import { PersonalDashboard } from './components/PersonalDashboard';

function App() {
  // const [time,setTime] = useState({ms:0, s:0, m:0, h:0});
  return (
   <React.Fragment>
     {/* <PersonalDashboard/> */}
     {/* <ContextParent/> */}
     {/* <Pappa/> */}
     <Movie/>
   </React.Fragment>
  );
}

export default App;
