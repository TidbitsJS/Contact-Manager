import React from 'react'

class AnotherAddContact extends React.Component  {

  constructor(props) {
    super(props)

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }

  onSubmit = (e) => {
    e.preventDefault()
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact);
  }

  static defaultProps = {
    name : 'Smith',
    email: 'smith@gmail.com',
    phone: '9867456903'
  }


  render() {
    const { name, email, phone } = this.props
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                defaultValue = {name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                defaultValue = {email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone"
                defaultValue = {phone}
                ref={this.phoneInput}
              />
            </div>
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
  }
}

export default AnotherAddContact
