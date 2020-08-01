import React, { Component } from 'react'
import { Consumer } from 'context.js'
import Contact from './Contact'

class Contacts extends Component {

  render() {

    return(
      <Consumer>
        {value => {
          const { contacts } = value
          return(
            <React.Fragment>
            <h1 className="display-4 mb-2">
              <span className="text-danger">Contact</span> List
            </h1>
              {contacts.map((contact, index) => <Contact
                key={index}
                index={index}
                contact={contact} />
              )}
            </React.Fragment>
          )
        }}
      </Consumer>
    )

  }
}

export default Contacts
