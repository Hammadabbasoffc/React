

import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import AllPasswords from './pages/AllPasswords'


function App() {


  return (
   <>
   
   <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/allpassword' element={<AllPasswords/>}/>
      </Routes>
   </Router>
   </>
  )
}

export default App
