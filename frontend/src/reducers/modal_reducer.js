import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const _null = {
  name: null,
  userId: null
}

export default function modalReducer(state = _null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {name: action.modal, userId: action.userId};
    case CLOSE_MODAL:
      return _null;
    default:
      return state;
  }
}
