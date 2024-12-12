let baseUrl = "https://xspace-back.siemens-fa.cn/api/h5/siemens";

// // 配置 wx.request 的 header
// function request(url, callback,) {
//     wx.request({
//         url: baseUrl + url,
//         header: {
//             'content-type': 'application/json',
//             // 'X-Access-Token':getApiToken()
//         },
//         success(res) {
//             // console.log('request success', res)
//             if (res.data.code === 200) {
//                 callback && callback(res.data.result)
//             }
//         }
//     })
// }

// // 获取用户基础信息
// export function getLoginInfo(callback) {
//     request('/customer/loginInf', callback)
// }

// // 获取banner
// export function getBannerList(callback) {
//     request('/banner/list', callback)
// }

// //获取产品线
// export function getProductLine(callback) {
//     request('/productLine/list', callback)
// }

// // 获取精彩推荐
// export function getRecommendList(callback){
//     request('/recommend/list', callback)
// }

// // 获取行政区域
// export function getRegionTree(callback) {
//     request('/region/tree', callback)
// }

// // 获取活动列表
// export function getOfflineActiList(callback) {
//     request('/offlineActivity2/list', callback)
// }


/**
 * 
 * @param {String} url 请求地址
 * @param {String} method 请求方法
 * @param {Object} data 请求参数
 * @param {Object} headers 请求头
 * @returns {Promise<{success: boolean, message: string, code: number, result: any, timestamp: number, otherData: any}>}
 */
export default function request(url, method = 'GET', data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: baseUrl + url,
            method,
            data,
            headers: {
                ...headers,
                'content-type': 'application/json',
                // 'X-Access-Token':getApiToken()
            },
            success: (res) => {
                // 这里可以当作响应拦截器
                if (res.data.code == 200) {
                    resolve(res.data)
                } else {
                    wx.showToast({
                        title: res.data.message,
                        icon: 'none'
                    })
                    reject(res.data)
                }
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}