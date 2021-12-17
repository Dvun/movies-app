import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const callApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})


callApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {

    return config
  },
  (error) => {
    
    return Promise.reject(error)
  }
)


callApi.interceptors.response.use(
  (config: AxiosResponse) => {
    
    return config
  },
  (error) => {
    
    return Promise.reject(error)
  }
)


export default callApi