import React from 'react'
import {connect} from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import './user_edit.css'

class EditUserModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.userId,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName, 
      email: this.props.user.email
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleSubmit(e) {
    e.preventDefault()
   
  }

  handleField(field) {
    // this.props.clearErrors()

    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  render() {
    return (
      <div className='user-edit-modal-wrapper'>
        {/* <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.email}</p> */}
        <form>
          <div> First Name:
            <input type='text' placeholder='First name'
                  value={this.state.firstName}
                  onChange={this.handleField('firstName')}
            />
          </div>
          <div> Last Name:
            <input type='text' placeholder='Last name'
                  value={this.state.lastName}
                  onChange={this.handleField('lastName')}
            />
          </div>
          <div> email:
            <input type='text' placeholder='Email Address'
                  value={this.state.email}
                  onChange={this.handleField('email')}
            />
          </div>
          <div>
            <button type='submit'>Update</button>
            <button onClick={()=> {
              this.props.closeModal()}}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
 }



const mapStateToProps = state => {
  return {
    userId: state.session.user.id,
    user: state.entities.users[state.session.user.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);