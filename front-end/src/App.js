
import './App.css';
import Homepage from './Homepage/Homepage.js';

import {Route, Routes} from "react-router-dom";
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
    <>
    <Routes>
      <Route path="/" element={<Homepage />}>     
      </Route>
      <Route path="/users" element={<Users />}>     
      </Route>
      <Route path="/user" element={<User />}>     
      </Route>
      <Route path="/login" element={<Login />}>     
      </Route>
    </Routes>
    </>
  );
}

// Front page image, Italy: Photo by <a href="https://unsplash.com/@andersjilden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anders Jildén</a> on <a href="https://unsplash.com/s/photos/wallpaper?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Front page image, Dunes: Photo by <a href="https://unsplash.com/@danesduet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Olah</a> on <a href="https://unsplash.com/s/photos/wallpaper-4k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Vancouver bridge: Photo by <a href="https://unsplash.com/@ryanqyao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ryan Yao</a> on <a href="https://unsplash.com/s/photos/vancouver-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Vancouver arena: Photo by <a href="https://unsplash.com/@jhana_ellard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jhana Ellard</a> on <a href="https://unsplash.com/s/photos/vancouver-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Heart Icon: <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by Futuer - Flaticon</a>
  

export default App;



    // <div className="App">
    //   <nav>
    //     <div id="Icons">
    //       <Logo></Logo>
    //       <Logo></Logo>
    //       <Logo></Logo>
    //     </div>
    //   </nav>
    //   <header className="App-header">
    //     <table>
    //       <tr>
    //         <td colspan='3'><b>Welcome!</b> Are you a</td>
    //       </tr>
    //       <tr>
    //         <td><button>guest</button></td>
    //         <td><p> or a </p></td>
    //         <td><button>host</button></td>
    //       </tr>
    //     </table>
    //   </header>
    // </div>