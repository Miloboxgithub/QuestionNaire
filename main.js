import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// main.js，注意要在use方法之后执行
import uView from '@/components/uview-ui'

Vue.use(uView)
// 如此配置即可
uni.$u.config.unit = 'rpx'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
