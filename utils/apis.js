let baseUrl = "https://xspace-back.siemens-fa.cn/api/h5/siemens"

// 配置 wx.request 的 header
export function request(url, callback) {
    wx.request({
        url: baseUrl + url,
        header: {
            'content-type': 'application/json',
            // 'X-Access-Token':getApiToken()
        },
        success(res) {
            // console.log('request success', res)
            if (res.data.code === 200) {
                callback && callback(res.data.result)
            }
        }
    })
}

// 获取用户基础信息
export function getLoginInfo(callback) {
    request('/customer/loginInf', callback)
}

// 获取banner
export function getBannerList(callback) {
    request('/banner/list', callback)
}

//获取产品线
export function getProductLine(callback) {
    request('/productLine/list', callback)
}

// 获取精彩推荐
export function getRecommendList(callback){
    request('/recommend/list', callback)
}


// 获取行政区域
export function getRegionTree(callback) {
    request('/region/tree', callback)
}