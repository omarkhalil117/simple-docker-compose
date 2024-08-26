import router from '../router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store';
// import { SimpleProvider } from './contexts/SimpleContext';
function App() {

  return (
    <>
    {/* <SimpleProvider>  */}
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    {/* </SimpleProvider> */}
    </>
  )
}

export default App