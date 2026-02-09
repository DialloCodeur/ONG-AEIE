import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Home from "./pages/home.jsx"
import Presentation from "./pages/presentation.jsx"
import Areas_of_intervention from "./pages/areas_of_intervention.jsx"
import News from "./pages/news.jsx"
import Contribute from "./pages/contribute.jsx"

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/presentation",
        element: <Presentation />
      },
      {
        path: "/areas",
        element: <Areas_of_intervention />
      },
      {
        path: "/news",
        element: <News />
      },
      {
        path: "/contribute",
        element: <Contribute />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
