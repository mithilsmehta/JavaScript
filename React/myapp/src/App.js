
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
    
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = 'My App - Dark Mode'; this if for changing the title of app 
      // setInterval(() => {
      //   document.title = 'My App is Amazing';
      // }, 2000);
      // setInterval(() =>{
      //   document.title = "Install My App";
      // },1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      // document.title = 'My App - Light Mode'; this is for changing the title of app 
    }
  } 
  return (
    <>
      {/* <Navbar title = "MyApp" aboutText = "About"/> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="MyApp" mode={mode} aboutText = "About" toggleMode={toggleMode}/>
        <Alert alert={alert} />
        <div className='container my-3'>
          <Switch>
            {/* /users --> Component 1
            /users/home --> --> Component 2 */}
            <Route exact path="/about">
            <About/>  
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </>
  );
}

export default App;   
