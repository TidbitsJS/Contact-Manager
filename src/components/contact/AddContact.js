import React from 'react'
import { Consumer } from 'context.js'
import TextInputGroup from 'components/layout/TextInputGroup.js'

class AddContact extends React.Component  {
  state = {
     name: '',
     username: '',
     email: '',
     phone: '',
     website: '',
     errors: {}
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

    const newContact = {
      name,
      username,
      email,
      phone,
      website
    }

    // const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact)
    dispatch({type:'ADD_CONTACT', payload: newContact})

    this.setState({
      name:'',
      username:'',
      email:'',
      phone:'',
      website:'',
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
              <div className="card-header">Add Contact</div>
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
                      value="Add Contact"
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

export default AddContact
