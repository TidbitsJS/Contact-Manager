import React from 'react'
import { Consumer } from 'context.js'
import TextInputGroup from 'components/layout/TextInputGroup.js'

class EditContact extends React.Component  {
  state = {
     name: '',
     username: '',
     email: '',
     phone: '',
     website: '',
     errors: {}
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    let contacts = window.localStorage.getItem('contacts')
    if (contacts) contacts = JSON.parse(contacts)
    if (!contacts) contacts = []

    console.log('contacts', contacts);
    const editContact = contacts[id]
    console.log(editContact);

    this.setState({
      name: editContact.name,
      username: editContact.username,
      email: editContact.email,
      phone: editContact.phone,
      website: editContact.website
    })
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault()
    console.log(this.state);

    const { name, username, email, phone, website } = this.state

    if(name === '') {
      this.setState({
        errors: {name: 'Name is Required'}
      })
      return
    }

    if(username === '') {
      this.setState({
        errors: {username: 'Username is Required'}
      })
      return
    }

    if(email === '') {
      this.setState({
        errors: {email: 'Email is Required'}
      })
      return
    }

    if(phone === '') {
      this.setState({
        errors: {phone: 'Phone is Required'}
      })
      return
    }

    if(website === '') {
      this.setState({
        errors: {website: 'Website is Required'}
      })
      return
    }

    var updateContact = {
      name,
      username,
      email,
      phone,
      website
    }

    let { id } = this.props.match.params
    updateContact.index = id
    // const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)

    dispatch({type:'UPDATE_CONTACT', payload: updateContact})

    this.setState({
      name:'',
      username:'',
      email:'',
      phone:'',
      website: '',
      errors: {}
    })

    this.props.history.push('/')
  }

  onFieldChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, username, email, phone, website, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onFieldChange}
                      error={errors.name}
                   />
                   <TextInputGroup
                       label="Username"
                       name="username"
                       placeholder="Enter Username"
                       value={username}
                       onChange={this.onFieldChange}
                       error={errors.username}
                    />
                   <TextInputGroup
                       label="Email"
                       name="email"
                       type="email"
                       placeholder="Enter Email"
                       value={email}
                       onChange={this.onFieldChange}
                       error={errors.email}
                    />
                    <TextInputGroup
                        label="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onFieldChange}
                        error={errors.phone}
                     />
                     <TextInputGroup
                         label="Website"
                         name="website"
                         placeholder="Enter Website"
                         value={website}
                         onChange={this.onFieldChange}
                         error={errors.website}
                      />
                  <div style={{display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                    <input
                      type="submit"
                      value="Update"
                      className="btn btn-outline-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact
