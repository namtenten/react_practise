import React, { Component } from 'react'

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      id: null,
      name: '',
      job: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]:value
    })
  }

//   editUser = user => {
//     // const { name, value } = user
// console.log(user);
//     this.setState(user)
//   }

  submitForm = () => {
    this.props.addUser(this.state)
    this.setState(this.initialState)
  }

  render() {
    // const lastUser = this.props.userList.data[this.props.userList.data.length - 1]
    var { name, job } = this.state;

    // if(id === null){
    //   id = lastUser.id
    // }

    return (
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group mb-3 input-group-sm">
              <div className="input-group-prepend">
                 <span className="input-group-text">Name</span>
              </div>
              <input type="text" className="form-control"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <div className="input-group-prepend">
                 <span className="input-group-text">Job</span>
              </div>
              <input type="text" className="form-control"
                name="job"
                value={job}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button type="button" onClick={this.submitForm} className="btn btn-primary"><i className="fas fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }

}

export default UserForm
