import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout.jsx'
import CategoryNews from './pages/CategoryNews.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import NewsDetails from './pages/NewsDetails.jsx'
import PrivetRouter from './components/privetRouters/PrivetRouter.jsx'

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
    path: "news/:id",
    element: (
      <PrivetRouter> 
        <NewsDetails></NewsDetails> 
      </PrivetRouter>),
    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
