// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/less/customized.less' // 引入公共样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.directive('focus', {
    "componentUpdated": function (el, {value}) {
        if (value) {
            if (el.tagName === 'INPUT') {
                el.focus()
            } else {
                el.querySelector('input').focus()
            }
        }
    }
})

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    "el": '#app',
    router,
    store,
    "components": { App },
    "template": '<App/>'
})
