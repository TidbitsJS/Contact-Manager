import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Consumer } from 'context.js'

class Contact extends Component {
  state = {
    showContactInfo: false
  }

  onShowClick = (e) => {
    console.log(this.state);
    this.setState({
      showContactInfo: !this.state.showContactInfo
    })
  }

   onDeleteClick = async (index, dispatch) => {

    dispatch({type: 'DELETE_CONTACT', payload: index})

  }

  render() {
    const { name, username, email, phone, website } = this.props.contact
    const { index } = this.props
    const { showContactInfo } = this.state

    return (

      <Consumer>
        {value => {
          const { dispatch } = value
          return(
            <div className="card card-body mb-3">
              <h4 style={{textAlign:'start', userSelect:'none'}}>
                <i
                  className="fas fa fa-user"
                  style={{marginLeft: '1rem', marginTop: 12, paddingRight:'1rem', marginBottom:5, cursor:'pointer'}}
                  onClick={this.onShowClick}></i>
                  {name}

                  <i className="fa fa-times"
                     style={{cursor:'pointer', float:'right', color:'red', marginTop: 12}}
                     onClick={this.onDeleteClick.bind(this, index, dispatch)}></i>

                  <Link to={`contact/edit/${index}`}>
                      <i className="fa fa-pencil"
                         style={{cursor:'pointer', float:'right', color:'black', marginTop: 12, marginRight:'2rem'}}></i>
                  </Link>
                </h4>
                {showContactInfo ? (
                  <ul className="list-group" style={{marginTop: 10}}>
                    <li className="list-group-item">Username : {username}</li>
                    <li className="list-group-item">Email : {email}</li>
                    <li className="list-group-item">Phone : {phone}</li>
                    <li className="list-group-item">Website : {website}</li>
                  </ul>
                ) : null}

            </div>
          )
        }}
      </Consumer>

    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact
