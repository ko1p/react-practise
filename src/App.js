import React, {Component} from 'react'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import './App.css'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {

  state = {
    isLoggedIn: false
  }


  render() {
    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
              exact 
              to="/" 
              activeClassName={'link-active'}
              
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
              to="/about"
              activeStyle={{color:'blue'}}
              >About</NavLink>
            </li>
            <li>
              <NavLink 
              to={{
                pathname: '/cars'
              }}
              >Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        
        <Switch>
          <Route 
            path='/'
            exact
            render={() => <h1 style={{textAlign: 'center'}}>Home page</h1>}
          />

          { this.state.isLoggedIn ? <Route path='/about' component={About}/> : null
          }


          <Route 
            path='/cars'
            exact
            component={Cars}
          /> 

          <Route 
            path='/cars/:name'
            exact
            component={CarDetail}
          /> 

          <Redirect 
            to='/'
          />
          {/* <Route 
            render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 NOT FOUND</h1>}
          />  */}
        </Switch>
          <div style={{textAlign: 'center'}}>
            <h3>Is i logged in now? {this.state.isLoggedIn ? 'answer: TRUE' : 'answer: FALSE'}</h3>
            <button onClick={() => this.setState({isLoggedIn: !this.state.isLoggedIn})}>TOGGLE LOGIN STATUS</button>
          </div>
      </div>
    );
  }
}

export default App
