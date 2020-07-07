import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuMobileVisible: false
    },
    mutations: {
        hideToggle (state) {
            state.isMenuMobileVisible = !state.isMenuMobileVisible
            console.log(state.isMenuMobileVisible)
        }
    }
})