// import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { RoutedTabs, NavTab } from "react-router-tabs";

// import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   browserHistory,
//   Link,
//   useRouteMatch,
//   useHistory,
//   useParams
// } from "react-router-dom";

// class App extends Component {

//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div className="app">
//          <h1>app</h1>
//       <Router>
//               <div>
              

//                 <Switch>
//                    <Route path="/home"  component={HomeScreen}/ >
//                    <Route path="/detail"  component={DetailsScreen}/ >
//                    <Route path="/detail2/:id/:type"  component={DetailsScreen2}/ >
//                   <Route path="/"  component={HomeScreen}/ >
//                </Switch>
//                  <ul>
//                   <li>
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li>
//                     <Link to="/home">Also Home</Link>
//                   </li>
//                   <li>
//                     <Link to="/detail?id=10&type=type1">Detail with type v1</Link>
//                   </li>
//                    <li>
//                     <Link to="/detail2/10/type1">Detail with type v2</Link>
//                   </li>
//                  </ul>
                  
//       </div>
//    </Router>

//     <Tabs>
//     <TabList>
//        <Tab>Categories </Tab>
//       <Tab>Shopping List</Tab>
//     </TabList>

//     <TabPanel>
        
//     </TabPanel>
//     <TabPanel>
//       <h2>shopping list... to be created</h2>
//     </TabPanel>
//   </Tabs> 


//       </div>
//     );
//   }
// }
// export default App;

// class HomeScreen extends React.Component {

//  constructor() {
//     super();
//   }
//   state = {
//     images: [
//       {id: '_C5zsV_p-YI'},
//        {id: '58WRkqcAn9o'},
//       {id: '9z-veIxii6k'},
//       {id: 'AwnggmGaFms'},
//       {id: 'Bi0atWiKP'},
//       {id: '3cNc1U7nJcs'}
//     ]
//   }

//   id = 10

//  toggleImageSelect = (id) => {
//     let imagesToUpdate = [...this.state.images];
//     let imageToUpdate = imagesToUpdate.find(image => image.id === id);
//     this.props.history.push('./detail2/'+ imageToUpdate.id + '/image')
//   }
//    navigate(){
//      this.props.history.push('./detail?id = '+ this.id)
//     }
//   render() {
//     return (
//      <div className="app">
//         <h1>Home Screen</h1>
//         <button  onClick={ () => this.navigate() }>Go to detail id 10</button>
//          <div className="sample-images blocks-container">
//           {
//             this.state.images.map(image => {
//               return <img
//                 src={'https://source.unsplash.com/' + image.id + '/360x360'} 
//                 onClick={() => this.toggleImageSelect(image.id)} />
//             })
//           }
//         </div>
//       </div>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   search = this.props.location.search 
//   render() {
//       return (
//      <div className="app">
//         <h1>{this.search}</h1>
//       </div>
//     );
//   }
// }

// class DetailsScreen2 extends React.Component {
//   id = this.props.match.params.id
//   type = this.props.match.params.type
//   render() {
//       return (
//      <div className="app">
//         <h1>Id =  {this.id}</h1>
//         <h1>Type =  {this.type}</h1>
//       </div>
//     );
//   }
// }












// https://github.com/chacestew/react-router-tabs

import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";

import './App.css';
import './tab.css';

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  browserHistory,
  Link,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom";

// with default styles:
// import "styles/react-router-tabs.css";


class App extends React.Component {
   render() {
    return (
        <div>
        <Router>
        <div>
         <Switch>
            <Route path="/time"  component={TimeScreen}/ >
            <Route path="/ordering"  component={OrderingScreen}/ >
            <Route path="/detail/:id/:type"  component={DetailsScreen}/ >
            <Route path="/ordered"  component={OrderedScreen}/ >
        </Switch>
        </div>

        <div className="nav-tabbar" >
         <NavTab to="/time">Time Registration</NavTab>
         <NavTab to="/ordering">Order Goods</NavTab>
         <NavTab to="/ordered">Ordered</NavTab>
        </div>

     

     
      </Router>
    </div>
    );
  }
}
export default App;

 class OrderingScreen extends React.Component {

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
    this.props.history.push('./detail/'+ imageToUpdate.id + '/image')
  }
   navigate(){
     this.props.history.push('./detail/ = '+ this.id +'/image')
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
  id = this.props.match.params.id
  type = this.props.match.params.type
  render() {
      return (
     <div className="app">
        <h1>Detail screen</h1>
        <h3>Id =  {this.id}</h3>
        <h3>Type =  {this.type}</h3>
      </div>
    );
  }
}

class TimeScreen extends React.Component {
  search = this.props.location.search 
  render() {
      return (
     <div className="app">
        <h1>Time registration screen</h1>
      </div>
    );
  }
}
class OrderedScreen extends React.Component {
  search = this.props.location.search 
  render() {
      return (
     <div className="app">
        <h1>Orderd screen</h1>
      </div>
    );
  }
}