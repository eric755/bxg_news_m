/**
 * 请求模块
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:3001/'
})

// 请求拦截器

// 响应拦截器

export default request
