import axios from 'axios'
const tornodaBaseURL = '/api';

const fetchInstance = axios.create({
  baseURL: process.env.BASE_API
  // timeout: 2000,
})

// request拦截器
fetchInstance.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

// response拦截器
fetchInstance.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default fetchInstance

export function fetchGet (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: params })
      .then(response => { resolve(response.data); }, err => { reject(err); })
      .catch((error) => { reject(error); });
  });
}
export function fetchPost (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => { resolve(response.data); }, err => { reject(err); })
      .catch((error) => { reject(error); });
  });
}
export function fetchPut (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(response => { resolve(response.data); }, err => { reject(err); })
      .catch((error) => { reject(error); });
  });
}
export function fetchDelete (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { params: params })
      .then(response => { resolve(response.data); }, err => { reject(err); })
      .catch((error) => { reject(error); });
  });
}

export function upperFirstChar (str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function constructRequest (requestUrl) {
  let result = {};
  result['get' + upperFirstChar(requestUrl)] = (params) => fetchGet(tornodaBaseURL + '/' + requestUrl, params);
  result['post' + upperFirstChar(requestUrl)] = (params) => fetchPost(tornodaBaseURL + '/' + requestUrl, params);
  result['put' + upperFirstChar(requestUrl)] = (params) => fetchPut(tornodaBaseURL + '/' + requestUrl, params);
  result['delete' + upperFirstChar(requestUrl)] = (params) => fetchDelete(tornodaBaseURL + '/' + requestUrl, params);
  return result;
}
