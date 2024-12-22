import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Overviews from '../src/pages/Dashboard/Overviews'
import MyCourses from './pages/MyCourses'
import ClassContent from './components/myCourses/ClassContent'
const Routes = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path='/' element={<Home />}>
                <Route index element={<Overviews />} />
                <Route path='/my-courses' element={<MyCourses />} />
                <Route path='/class-content/:id' element={<ClassContent/>} />
            </Route>
        </Route>

    ))
    return (
        <RouterProvider router={router} />
  )
}

export default Routes
