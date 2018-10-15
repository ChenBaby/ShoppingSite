import ajax from '~common/ajax'
const state = {
    "userInfo": { },
    "isLogged": false
}
const mutations = {
    setUserInfo (state, data) {
        state.userInfo = {...data}
    },
    setIsLogged (state, isLogged) {
        state.isLogged = isLogged
    }
}
const actions = {
    checkUserName (store, data) {
        return ajax.get('/user/check_username', data)
    },
    signUp (store, data) {
        return ajax.post('/user/sign_up', data)
    },
    signIn (store, data) {
        return ajax.post('/user/sign_in', data)
    },
    getUserInfo (store) {
        return ajax.get('/user/get_user_info')
    }
}
const getters = {}
export default { state, mutations, actions, getters, "namespaced": true }
