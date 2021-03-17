import request from '@/utils/request'
/**
 * 获取头条新闻列表
 */
export const getNewsTop = () => {
  return request({
    method: 'GET',
    url: '/top'
  })
}
/**
 * 获取社会新闻列表
 */
export const getNewsShehui = () => {
  return request({
    method: 'GET',
    url: '/shehui'
  })
}

/**
 * 获取国内新闻列表
 */
export const getNewsGuonei = () => {
  return request({
    method: 'GET',
    url: '/guonei'
  })
}

/**
 * 获取国际新闻列表
 */
export const getNewsGuoji = () => {
  return request({
    method: 'GET',
    url: '/guoji'
  })
}

/**
 * 获取娱乐新闻列表
 */
export const getNewsYul = () => {
  return request({
    method: 'GET',
    url: '/yule'
  })
}

/**
 * 获取体育新闻列表
 */
export const getNewsTiyu = () => {
  return request({
    method: 'GET',
    url: '/tiyu'
  })
}

/**
 * 获取科技新闻列表
 */
export const getNewsKeji = () => {
  return request({
    method: 'GET',
    url: '/keji'
  })
}
