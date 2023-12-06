
import "./App.css"
import Card from "./components/Card";
import { personas } from "./data/personas";
//import ShowHide from "./components/showhide";

function App() {
  const personaList = personas.map(v => {
    return <Card title={v.name} imagen={v.image} description={v.description} location={v.location}/>

  });

  return <div className='App'>
    <h1> Welcome to Host and clean</h1>
    <div className='container'>
     {personaList}
    
    </div>
    {/* <ShowHide/> */}
  </div>
}

export default App;
