import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

//Pages
import HomePage from './HomePage/HomePage'
import Users from './Users'

function App() {

  // All paths
  const AllPaths = [
    { // Home Page
      name: "Home Page",
      path: "/homepage",
      component: HomePage
    },
    { // Users
      name: "Users",
      path: "/users",
      component: Users
    }
  ]

  return (
    <Router>
      {AllPaths.map((e) => (<Route path={e.path} component={e.component}/>))}
    </Router>
  );
}

export default App;
