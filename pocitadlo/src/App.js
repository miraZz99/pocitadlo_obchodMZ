import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Pocitadlo from './Pocitadlo';
import Obchody from './Obchody'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/pocitadlo">
              <Obchody />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
