import { BrowserRouter as Router, Route, Routes, Link, Switch} from "react-router-dom";
import './App.css';

//Pages
import Users from './Users/Users.js'
import User from './Users/User.js'
import Login from './Login/Login.js'
import { Container } from "@mui/system";

function App() {

  // All paths
  const AllPaths = [
    { // Users
      name: "Users",
      path: "/users",
      component: <Users/>
    },
    { // User
      name: "User",
      path: "/user:id",
      component: User
    },
    { // Login
      name: "Login",
      path: "/login",
      component: <Login/>
    }
  ]

  return (
    <Routes>
      <Route path="/" element={<Users />}>     
      </Route>
      <Route path="/users" element={<Users />}>     
      </Route>
      <Route path="/user" element={<User />}>     
      </Route>
      <Route path="/login" element={<Login />}>     
      </Route>
    </Routes>
  );
}

export default App;


