const state = {
  version: '0.01',
  appName: 'ShoppingSite'
}
const mutations = {
  setVersion (state, version) {
    state.version = version
  },
  setAppName (state, appName) {
    state.appName = appName
  }
}
const actions = {}
const getters = {}
export default { state, mutations, actions, getters }
