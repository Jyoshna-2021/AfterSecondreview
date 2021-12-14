import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import SignInOutContainer from '../login_signup/index'
import Navigation from '../components/navigation/nav'
import Home from '../components/home/home'
import About from '../components/about/About'
import Books from '../components/booklist/booklist'
import Transaction from '../components/transaction/transaction'


function App() {
  return (
    <div>
      <Router>

        <Routes>
          <Route path='/' element={<SignInOutContainer />}/> 
          <Route path='/nav' element={<Navigation/>} />
          <Route path='/home' element={<Home />}  />
          <Route path='/about' element={<About />}/>
          <Route path='/booklist' element={<Books />} />
          <Route path='/transaction' element={<Transaction />} />
        </Routes>
    </Router>
    </div>
  )
}


export default App
