
import "./App.css"
import "./App.scss"
import Card from "./components/Card";
import { personas } from "./data/personas";
//import ShowHide from "./components/showhide";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/js/dist/dropdown';

function App() {

  const personaList = personas.map(v => {
    return <Card title={v.name} imagen={v.image} role={v.role} description={v.description} location={v.location} contact={v.contact} />

  });
  

  return <div className='App'>
    <h1> Welcome to Host and clean</h1>
    <p className='home'>Thousands of host users and cleaners to find the closest one in your city.</p>

    <div className='container'>

      {personaList}

    </div>
    {/* <ShowHide/> */}


  </div>

}


export default App;
