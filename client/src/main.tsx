import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
// import React from 'react'
// Pages
import App from './App'
import Home from './pages/Home'

// Creates available paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // the component where the paths are rendered
    children: [
      { path: '/', element: <Home /> },
      // TODO: Create more paths
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)