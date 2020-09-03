import { POST } from './request'
import API from './api'

// 登陆
export const userLogin = (param) => {
  return POST(API.yuan_users_login, param)
}