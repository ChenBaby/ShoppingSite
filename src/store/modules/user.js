import ajax from '~common/ajax'
const state = {
    "userInfo": { },
    "isLogged": false
}
const mutations = {
    setUserInfo (state, data) {
        if (JSON.stringify(data) === '{}') {
            state.userInfo = {}
            state.isLogged = false
            localStorage.setItem('isLogged', false)
            localStorage.setItem('user', '{}')
        } else {
            state.userInfo = {...data}
            state.isLogged = true
            localStorage.setItem('isLogged', true)
            localStorage.setItem('user', JSON.stringify(data))
        }
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
    signOut (store) {
        return ajax.get('/user/sign_out')
    },
    getUserInfo (store) {
        return ajax.get('/user/get_user_info')
    }
}
const getters = {}
export default { state, mutations, actions, getters, "namespaced": true }
