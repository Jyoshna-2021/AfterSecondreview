import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Navigation from './nav'
import Home from './home'
import About from './About'
import Books from './booklist'
import Transaction from './transaction'
import SignInOutContainer from '../containers'
// import Footer from './footer'

function Path() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        
        <Route path='/' element={<SignInOutContainer />} />
          <Route path='/home' element={<Home />}  />
          <Route path='/about' element={<About />} />
          <Route path='/booklist' element={<Books />} />
          <Route path='/transaction' element={<Transaction />} />
          
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  )
}


export default Path
