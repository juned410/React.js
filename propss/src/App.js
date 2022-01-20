import logo from './logo.svg';
import './App.css';
// import { FunComp } from './components/FunComp';
// import { ClassComp } from './components/ClassCom';
import { ParentPropss } from './components/ClassComponent/ParentPropss';

function App() {
  // const name= MohammedJuned;
  // const id=UID696203;
  // const mob=9359306022;
  return (
    <div className="App">
      <ParentPropss/>
      {/* <Parent/> */}
      {/* <FunComp/> */}
      {/* <ClassComp/> */}
      {/* <Parent name={userName} id={userID} mob={userMobile} /> */}
    </div>
  );
}

export default App;
