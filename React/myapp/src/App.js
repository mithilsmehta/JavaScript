
import './App.css';
// let name ="React";
// let rollno ="25";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
{/* <Navbar title = "MyApp" /> */}
{/* <Navbar/> */}
<Navbar title = "MyApp"/>
<div className='container'>
<TextForm heading ="Enter the Text to Analyze"/>
</div>
    </>
  );
}

export default App;   
