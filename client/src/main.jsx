import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chats from './pages/Chats.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  }, 
  {
    path: '/chats',
    element: <Chats></Chats>
  }, 
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
     <RouterProvider router={router} ></RouterProvider>
     </ChakraProvider>
  </React.StrictMode>,
)
