import React from 'react'
import Upload from './components/Upload'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Success from './components/Success'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">

          <Route exact path='/'>
            <Upload />
          </Route>

          <Route path='/success'>
            <Success />
          </Route>
          
        </div>
      </Switch>
    </Router>
  )
}

export default App;
