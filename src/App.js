
import React,{useState} from 'react';
import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const[Mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

  })
  setTimeout(()=>{
    setAlert(null);
  },1500)

  }
  const toggleMode = () =>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#083f6f';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
    
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About mode={Mode} />}>
            
          </Route> */}
          <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={Mode}/>
            
          {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
