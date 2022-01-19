import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Aboutus from './components/pages/Aboutus'
import Contactus from './components/pages/Contactus'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/contactus' component={Contactus} />
        </Switch>
      </Router>
    </>
  )
}

export default App
