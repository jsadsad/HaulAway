import axios from 'axios'

export const fetchAllReviews = () => {
  return axios.get('/api/reviews')
}

export const fetchReview = (reviewId) => {
  return axios.get(`/api/reviews/${reviewId}`)
}

export const postReview = (review) => {
  return axios.post('api/reviews', review)
}

export const updateReview = (review) => {
  return axios.patch(`/api/reviews/${review.id}`, review)
}

export const deleteReview = (reviewId) => {
  return axios.delete(`/api/reviews/${reviewId}`)
}
