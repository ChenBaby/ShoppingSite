import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
import user from './pages/user'
Vue.use(Vuex)
export default new Vuex.Store({
    ...global,
    "modules": { user }
})
