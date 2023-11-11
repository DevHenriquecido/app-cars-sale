import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './assets/pages/Home'
import VacancyDetails from './assets/pages/VacancyDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/detalhes-vaga/:id_video',
    element: <VacancyDetails />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)