import { createBrowserRouter} from "react-router-dom";
import Dashboard from "./src/pages/Dashboard";
import Home from "./src/pages/Home";
import Error from "./src/pages/Error";
import TestPage from "./src/pages/TestPage";
import NavLayout from "./Layouts/NavLayout";
import BookDetails from "./src/pages/BookDetails";
import Form from './src/pages/Form';
import ContextPage from "./src/pages/ContextPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <NavLayout/>,
        children: [
            {
                path:'/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/',
                element: <Home/>    
            },
            {
                path: '/test',
                element: <TestPage/> 
            },
            {
                path: '/books/:id',
                element: <BookDetails/>  
            },
            {
                path: '/form',
                element: <Form/>
            },
            {
                path: '/context',
                element: <ContextPage/>
            },
            {
                path: '*',
                element: <Error/>
            }
        ]
    },
    
])

export default router;