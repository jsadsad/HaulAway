import {RECEIVE_USER, RECEIVE_USERS} from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_USERS: 
      return Object.assign({}, action.users.data)
    case RECEIVE_USER:
      return Object.assign({}, {[action.user.data._id]: action.user.data})
    default: 
      return state
  }
}

export default usersReducer