import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout.jsx'
import CategoryNews from './pages/CategoryNews.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path: "/category/:id",
        loader: async({ params }) => {
          // const URL = `https://openapi.programming-hero.com/api/news/category/${params.id}`
          const news = await fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          const data = await news.json()
          return data.data
        },
        element: <CategoryNews></CategoryNews>,
      },
      

    ]
  },
  {
    path: "news",
    element: <div>News layout</div>,
  },
  {
    path: "auth",
    element: <div>Login</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
