import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
              

                <Switch>
                   <Route path="/home"  component={HomeScreen}/ >
                   <Route path="/detail"  component={DetailsScreen}/ >
                   <Route path="/detail2/:id/:type"  component={DetailsScreen2}/ >
                  <Route path="/"  component={HomeScreen}/ >
               </Switch>
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
                   <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
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
  state = {
    images: [
      {id: '_C5zsV_p-YI'},
       {id: '58WRkqcAn9o'},
      {id: '9z-veIxii6k'},
      {id: 'AwnggmGaFms'},
      {id: 'Bi0atWiKP'},
      {id: '3cNc1U7nJcs'}
    ]
  }

  id = 10

 toggleImageSelect = (id) => {
    let imagesToUpdate = [...this.state.images];
    let imageToUpdate = imagesToUpdate.find(image => image.id === id);
    this.props.history.push('./detail2/'+ imageToUpdate.id + '/image')
  }
   navigate(){
     this.props.history.push('./detail?id = '+ this.id)
    }
  render() {
    return (
     <div className="app">
        <h1>Home Screen</h1>
        <button  onClick={ () => this.navigate() }>Go to detail id 10</button>
         <div className="sample-images blocks-container">
          {
            this.state.images.map(image => {
              return <img
                src={'https://source.unsplash.com/' + image.id + '/360x360'} 
                onClick={() => this.toggleImageSelect(image.id)} />
            })
          }
        </div>
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


