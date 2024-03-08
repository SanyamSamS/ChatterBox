import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          Test Column 1
        </div>
        <div className="col">
          Test Column 2
        </div>
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default App
