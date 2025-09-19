import './App.css';
import ClassComponent from './classComponent';
import {useState} from 'react'

function App() {
  const name = "vikrant";
  const [showhide, setShowHide] = useState(true);
  return (
    <div>
        <button onClick={()=>setShowHide(!showhide)}>show/hide</button>
       { showhide? <ClassComponent  name={name}/>:''}
    </div>
  );
}

export default App;
