import router from '../router';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider , QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
    </>
  )
}

export default App