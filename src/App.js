import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './components/Login';
import Addtask from './components/Addtask';
import Landing from './components/Landing';
import Tasklist from './components/Tasklist';
import Edittask from './components/Edittask';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Landing/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/addtask">
            <Addtask/>
          </Route>
          <Route path="/tasklist">
            <Tasklist/>
          </Route>
          <Route path="/edittask">
            <Edittask/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;