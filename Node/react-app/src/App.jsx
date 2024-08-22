import './App.css';
import Dashboard from './pages/Dashboard';
import AddBookModal from './components/AddBookModal';

function App() {

  return (
    <>
    <button className='btn btn-primary' data-bs-toggle='modal' data-bs-target="#addModal">Add Book</button>
    <AddBookModal/>
    <Dashboard/>
    </>
  )
}

export default App