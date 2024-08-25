import router from '../router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { SimpleProvider } from './contexts/SimpleContext';
function App() {

  return (
    <>
    <SimpleProvider> 
    <RouterProvider router={router}/>
    </SimpleProvider>
    </>
  )
}

export default App