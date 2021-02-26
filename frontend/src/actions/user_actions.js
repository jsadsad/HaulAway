import {getUser, getUsers, updateUser} from '../util/user_api_util'

export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

export const receiveUsers = users => ({
  type: RECEIVE_USERS, 
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER, 
  user
})

export const fetchUsers = () => dispatch => (
  getUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => console.log(err))
)

export const fetchUser = id => dispatch => (
  getUser(id)
    .then(user => dispatch(receiveUser(user)))
    .catch(err => console.log(err))
)


export const updateUserInfo = (user) => (dispatch) => {
  return updateUser(user)
    .then((updatedUser) => dispatch(receiveUser(updatedUser)))
    .catch((error) => console.log(error))
}