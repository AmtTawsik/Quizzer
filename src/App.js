import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './utils/routes';

function App() {
  return(
      <div className='bg-lime-100'>
        <RouterProvider router={router}></RouterProvider>
      </div>
  )
}

export default App;
