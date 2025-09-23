import './App.css';
import ClassComponent from './classComponent';
import {useState} from 'react'
import FunctionalComponent from './functionalComponent';

function App() {
  const name = "vikrant";
  const [showhide, setShowHide] = useState(true);
  return (
    <div>
        <button onClick={()=>setShowHide(!showhide)}>show/hide</button>
    
       { 
       
       showhide? 
         <>
       <ClassComponent  name={name}/> 
       <FunctionalComponent/>   </>:''
      
       }
      
       
    </div>
  );
}

export default App;
