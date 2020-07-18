import React from 'react'
import{ 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'

import './App.css'
import './component/Carousel/Carousel'

import Home from './views/Home'
import Profile from './views/Profile/Profile1'
import Login from './views/Login'
import RegisterView from './views/Register'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/GymProfile/:id" children={<Profile/>}>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <RegisterView/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
