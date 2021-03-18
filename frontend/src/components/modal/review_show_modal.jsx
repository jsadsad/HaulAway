import React from 'react'
import {connect} from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import {fetchUsers} from '../../actions/user_actions'

class ReviewShowModal extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  render() {
    return <div>modal hello</div>
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewShowModal);