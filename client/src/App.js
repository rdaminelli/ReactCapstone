import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Post from "./pages/Post"
import Text from "./pages/Text"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

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
    path: "/register",
    element: <Register/>,
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
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
