import React from 'react'
import {connect} from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import {updateUserInfo} from '../../actions/user_actions'
import './user_edit.css'

class EditUserModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.userId,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName, 
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleSubmit(e) {
    e.preventDefault()
    const updatedUser = Object.assign({}, this.state)
    this.props.updateUserInfo(updatedUser).then(() => this.props.closeModal());
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
        <div className='uem-form-wrapper'>
          <div className='uem-header'>Change Your Name: </div>
          <form onSubmit={this.handleSubmit}>
            <div className='uem-input'> First Name: 
              <input type='text' placeholder='First name'
                    value={this.state.firstName}
                    onChange={this.handleField('firstName')}
              />
            </div>
            <div className='uem-input'> Last Name: 
              <input type='text' placeholder='Last name'
                    value={this.state.lastName}
                    onChange={this.handleField('lastName')}
              />
            </div>
            <div className='uem-buttons' >
              <button type='submit'>Update</button>
              <button onClick={()=> {
                this.props.closeModal()}}>Cancel</button>
            </div>
          </form>

        </div>
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
    closeModal: () => dispatch(closeModal()),
    updateUserInfo: (user) => dispatch(updateUserInfo(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);