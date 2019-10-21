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
                    <Link to="/detail?id=10&type=type1">Detail with type v1</Link>
                  </li>
                   <li>
                    <Link to="/detail2/10/type1">Detail with type v2</Link>
                  </li>
                 </ul>

                <Switch>
                   <Route path="/home"  component={HomeScreen}/ >
                   <Route path="/detail"  component={DetailsScreen}/ >
                   <Route path="/detail2/:id/:type"  component={DetailsScreen2}/ >
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
  id = 10
 constructor() {
    super();
  }
   navigate(){
     this.props.history.push('./detail?id = '+ this.id)
    }
  render() {
    return (
     <div className="app">
        <h1>Home Screen</h1>
          <button  onClick={ () => this.navigate() }>Go to detail id 10</button>
        
      </div>
    );
  }
}

class DetailsScreen extends React.Component {
  search = this.props.location.search 
  render() {
      return (
     <div className="app">
        <h1>{this.search}</h1>
      </div>
    );
  }
}

class DetailsScreen2 extends React.Component {
  id = this.props.match.params.id
  type = this.props.match.params.type
  render() {
      return (
     <div className="app">
        <h1>Id =  {this.id}</h1>
        <h1>Type =  {this.type}</h1>
      </div>
    );
  }
}



