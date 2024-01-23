const TIME_OUT = 10000

// 2.依赖当前环境来切换 development/production
/*let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else {
  BASE_URL = 'http://codercba.com:902'
}*/
// 3.从定义的文件中自动加载
const BASE_URL = process.env.REACT_APP_BASE_URL
export { BASE_URL, TIME_OUT }
