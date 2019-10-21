import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  browserHistory,
  Link,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom";

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
         <h1>app</h1>
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/home">Also Home</Link>
                  </li>
                  <li>
                    <Link to="/detail">Detail</Link>
                  </li>
                 </ul>

                <Switch>
                   <Route path="/home"  component={HomeScreen}/ >
                   <Route path="/detail"  component={DetailsScreen}/ >
                  <Route path="/"  component={HomeScreen}/ >
               </Switch>
      </div>
   </Router>
      </div>
    );
  }
}
export default App;

class HomeScreen extends React.Component {
 constructor() {
    super();
  }
   navigate(){
     this.props.history.push('./detail')
    }
  render() {
    return (
     <div className="app">
        <h1>Home Screen</h1>
          <button  onClick={ () => this.navigate() }>Go to detail</button>
        
      </div>
    );
  }
}

class DetailsScreen extends React.Component {
  version = React.version
  render() {
      return (
     <div className="app">
        <h1>{this.version}</h1>
      </div>
    );
  }
}



