import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

//Pages
import Users from './Users/Users.js'
import User from './Users/User.js'
import Login from './Login/Login.js'

function App() {

  // All paths
  const AllPaths = [
    { // Users
      name: "Users",
      path: "/users",
      component: Users
    },
    { // User
      name: "User",
      path: "/user",
      component: User
    },
    { // Login
      name: "Login",
      path: "/login",
      component: Login
    }
  ]

  return (
  <>
    {/* <div style={{ margin: "1rem"}}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/200/294/original/house-png.png"
          class="rounded-3"
          style={{ height: "5rem" }}
          alt="Refuge Me"
        />
        <h1>Find home again</h1> */}
    {/* <Users/> */}
    <User/>
    {/* <Login/> */}

    {/* <Router>
      <Routes>
        {AllPaths.map((e) => (<Route path={e.path} component={e.component}/>))}
      </Routes>
    </Router> */}

    {/* </div> */}
  </>
  );
}

export default App;
