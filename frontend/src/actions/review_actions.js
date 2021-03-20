import * as ReviewApiUtil from '../util/review_api_util'

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const RECEIVE_REVEIW_ERRORS = 'RECEIVE_REVEIW_ERRORS'
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS'

const receiveReveiws = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  }
}

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review,
  }
}

const removeReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS,
  }
}

export const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVEIW_ERRORS,
    errors,
  }
}

export const fetchReviews = () => (dispatch) => {
  return ReviewApiUtil.fetchAllReviews()
    .then((reviews) => dispatch(receiveReveiws(reviews)))
    .catch((err) => dispatch(receiveReviewErrors(err.response.data)))
}

export const fetchReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.fetchReview(reviewId)
    .then((review) => dispatch(receiveReview(review)))
    .catch((err) => console.log(err))
}

export const createReview = (review) => (dispatch) => {
  return ReviewApiUtil.postReview(review)
    .then((createReview) => dispatch(receiveReview(createReview)))
    .catch((err) => dispatch(receiveReviewErrors(err.response.data)))
}

export const updateReview = (review) => (dispatch) => {
  return ReviewApiUtil.updateReview(review)
    .then((updateReview) => dispatch(receiveReview(updateReview)))
    .catch((err) => dispatch(receiveReviewErrors(err.response.data)))
}

export const destroyReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
    .catch((err) => console.log(err))
}
