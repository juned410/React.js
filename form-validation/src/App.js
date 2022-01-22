import './App.css';
import background from './asset/img.jpg';
import { Singup } from './components/Singup';

function App() {
  return (
    <div className="container mt-3">
       <div className="row">
         <div className="col-md-5">
          <Singup/>  
         </div>
         <div className="col-md-7">
           <img className="img.fluid " src={background} alt="" style={{width:756, height:1100}}/>
         </div>
       </div>
    </div>
  );
}

export default App;
