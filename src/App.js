import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from 'components/contact/Contacts.js'
import AddContact from 'components/contact/AddContact.js'
import Header from 'components/layout/Header.js'
import About from 'components/pages/About.js'
import NotFound from 'components/pages/NotFound.js'
import Test from 'components/test/Test.js'
import EditContact from 'components/contact/EditContact.js'
import { Provider } from 'context.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'App.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <div className="App" style={{outline:'none'}}>
          <Header branding="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component = {Contacts} />
              <Route exact path="/contact/add" component = {AddContact} />
              <Route exact path="/contact/edit/:id" component = {EditContact} />
              <Route exact path="/about" component = {About} />
              <Route exact path="/test" component = {Test} />
              <Route component = {NotFound}></Route>
            </Switch>
          </div>
        </div>
       </Router>
      </Provider>
    )
  }
}

export default App
