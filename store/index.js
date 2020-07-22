export const state = () => ({
  currentTab: 'home'
})

export const mutations = {
  changeTab(state, tab) {
    state.currentTab = tab
  }
}

export const getters = {
  tab: state => state.currentTab
}

export const actions = {
  changeTab({ commit }, tab) {
    commit('changeTab', tab)
  }
}
