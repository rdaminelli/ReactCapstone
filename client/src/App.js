import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Post from "./pages/Post"
import Text from "./pages/Text"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import "./style.scss"


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Nav/>
      <Home/>
      <Footer/>
    </div>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/post/:id",
    element: <div>
    <Nav/>
    <Post/>
    <Footer/>
  </div>,
  },
  {
    path: "/text",
    element: <div>
    <Nav/>
    <Text/>
    <Footer/>
  </div>,
  },
]);

function App() {
  return (
    <div className="page">
      <div className="card">
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App;
