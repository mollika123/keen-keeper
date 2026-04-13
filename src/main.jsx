import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './root/Root';
import Home from './pages/Home';
import Error from './pages/Error';
import TimeLine from './pages/TimeLine';
import Stats from './pages/Stats';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
element:<Home></Home>
      },
      {
        path: '/timeline',
        element:<TimeLine></TimeLine>
      },
      {
        path: '/stats',
        element:<Stats></Stats>
      }
    ],
    errorElement:<Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
