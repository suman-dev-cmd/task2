import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './components/home'
import Footer from './components/footer'
export default class App extends Component {
  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

