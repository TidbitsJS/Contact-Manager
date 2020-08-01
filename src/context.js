import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT' :
      let newContacts = JSON.parse(JSON.stringify(state.contacts))
      newContacts.splice(action.payload, 1)
      console.log('DELETE_CONTACT', newContacts, action.payload);
      window.localStorage.setItem('contacts', JSON.stringify(newContacts))
      return {
        ...state,
        contacts: newContacts
      }

     case 'ADD_CONTACT' :
       let contacts = [action.payload, ...state.contacts]
       window.localStorage.setItem('contacts', JSON.stringify(contacts))
       return {
          ...state,
          contacts : contacts
        }

      case 'UPDATE_CONTACT' :
         state.contacts[action.payload.index] = action.payload
         window.localStorage.setItem('contacts', JSON.stringify(state.contacts))
         return {
           ...state,
           contacts : state.contacts
         }

     default :
      return state
  }
}

export class Provider extends Component {
  state = {
      contacts: [],
      dispatch: action => {
        this.setState(state => reducer(state, action))
      }
    }

    async componentDidMount() {
      let contacts = window.localStorage.getItem('contacts')
      if (contacts) contacts = JSON.parse(contacts)
      if (!contacts) contacts = []

      this.setState({contacts: contacts})
    }

    render() {
      return (
        <Context.Provider value = {this.state}>
            {this.props.children}
        </Context.Provider>
      )
    }
}

export const Consumer = Context.Consumer
