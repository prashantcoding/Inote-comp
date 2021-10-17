import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About.js';
import NoteState from './context/Notesstate';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div className="container">
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        </Router>
        </NoteState>
    </>
  );
}

export default App;
