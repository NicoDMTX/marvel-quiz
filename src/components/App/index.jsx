import '../../App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header/index'
import Landing from '../Landing/index'
import Footer from '../Footer/index'
import Welcome from '../Welcome/index'
import Login from '../Login/index'
import Signup from '../Signup/index'
import ErrorPage from '../ErrorPage/index'

function App() {

  return (
    <Router>
      <Header/>

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>

      <Footer/>
    </Router>
  )
}

export default App
