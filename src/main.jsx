import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Errorpage from './pages/errorpage.jsx'
import Services from './pages/services.jsx'
import About from './pages/about'
import Contact from './pages/contacts'
import Project from './pages/projects'
import Root from './pages/root.jsx'

const rootFontStyle = {
  fontSize: '20px',
  fontFamily: "popins-Regular",
  color: ' rgb(71, 84, 103)'
}

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <About />,
      },

      {
        path: "contact-us",
        element: <Contact />,
      },

      {
        path: "projects",
        element: <Project />,
      },

    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div style={rootFontStyle}>
      <RouterProvider router={router} />

    </div>

  </React.StrictMode>,
)
