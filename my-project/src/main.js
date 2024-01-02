import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
// import '//at.alicdn.com/t/c/font_3234701_o0jba70n28.css' // 字体图标的样式
import baseGoodItem from './components/baseGoodItem'
import baseBrandItem from './components/baseBrandItem'
import baseTopicItem from './components/baseTopicItem'
Vue.component('baseGoodItem',baseGoodItem)
Vue.component('baseBrandItem',baseBrandItem)
Vue.component('baseTopicItem',baseTopicItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
