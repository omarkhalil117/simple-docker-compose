import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";

const router = createBrowserRouter([
    {
        path:'/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/',
        element: <Home/>    
    },
])

export default router;