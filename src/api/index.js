import axios from '../utils/request'

/**
 * 路径地址
 */

const base = {
  baseUrl:'http://localhost:8866',
  menu:'/api/todolist'
}

/**
 * 请求方法
 */

const api = {
  getTodo(){
    return axios.get(base.baseUrl + base.menu)
  }
}

export default api