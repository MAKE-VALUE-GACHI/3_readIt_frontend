import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://gachi3-be.hpx.kr',
})
