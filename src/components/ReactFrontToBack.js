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


import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Head from 'tweetComponents/design/Head.js'
import Tweets from 'tweetComponents/tweet/Tweets.js'
import AddTweet from 'tweetComponents/tweet/AddTweet.js'
import About from 'tweetComponents/pages/About.js'
import NotFound from 'tweetComponents/pages/NotFound.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'AnotherContext.js'

class App extends React.Component {
  render() {
    return(
      <Provider>
        <Router>
          <div className="App">
            <Head branding='Tweet App'/>
            <div className="container">
              <Switch>
                <Route exact path ='/' component={Tweets} />
                <Route exact path ='/tweet' component={AddTweet} />
                <Route exact path ='/about' component={About} />
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
