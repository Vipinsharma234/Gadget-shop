
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AvatarDemo from "./common/AvatarDemo"
import Layout from "./common/Layout"

import Signin from "./pages/Signin"
import { Signup } from "./pages/Signup"



// import { Button } from "./components/ui/button"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children: [
        {
          path: "/",
          element: <AvatarDemo/>
        },
        {
          path:"/Signin",
          element:<Signin/>
        },
        {
          path:"/signup",
          element:<Signup/>
          
        }
        
      ]
    }
  ])
  

  return (
    <>
 

 <RouterProvider router={router}/>
 
      
    </>
  )
}

export default App
