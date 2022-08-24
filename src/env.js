//对接口环境进行统一配置
let baseURL
//在package.json里设置serve，mode可以将环境变脸参数传入
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break;
    case 'production':
        baseURL = 'http://mall-pre.springboot.cn/api'
        break
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break
    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break;
}

export default {
    baseURL
}