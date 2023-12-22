import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Cards from '../../src/Components/Cards'
import { Routes, Route ,BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/cards' element={<Cards />}></Route>
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;