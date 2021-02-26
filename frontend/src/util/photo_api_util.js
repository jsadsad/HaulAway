import axios from 'axios'

export const getPhotos = () => {
  return axios.get('/api/photos/')
}

export const uploadPhoto = (data) => {
  return axios.post('/api/photos/upload', data)
}

export const uploadPhotos = (data) => {
  return axios.post('/api/photos/uploads', data)
}

export const getPhoto = (photoId) => {
  return axios.get(`/api/photos/${photoId}`)
}

export const deletePhoto = (photoId) => {
  return axios.delete(`/api/photos/${photoId}`)
}
