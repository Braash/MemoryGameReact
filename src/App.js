import './App.css'; // Import App stylesheet.
import MemGame from './Components/MemGame'; // Import Memgame component.
import Display from './Components/Header'; // Import Display component.
import Howtoplay from './Components/Howtoplay'; // Import Howtoplay component.
import { BrowserRouter, Route } from "react-router-dom"; // Import Browser router.

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Display />
          <Route exact path="/MemGame" component={MemGame}/> {/* Link to MemGame component. */}
          <Route exact path="/Howtoplay" component={Howtoplay}/> {/* Link to MemGame component. */}
      </div>
    </BrowserRouter>
  ); 
}


export default App; // Export App component.
