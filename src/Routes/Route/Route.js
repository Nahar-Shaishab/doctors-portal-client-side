import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home"
import Login from "../../Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Appointment from "../../Pages/Appointment/Appointment/Appoinment";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/signup', 
               element:<SignUp></SignUp>
            },
             {
                 path: '/appointment',
                 element: <Appointment></Appointment>
             }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    }
])

export default Router;