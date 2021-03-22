import request from '@/utils/request'
/**
 * 获取头条新闻列表
 */
export const getNewsTop = (url) => {
  return request({
    method: 'GET',
    url
  })
}