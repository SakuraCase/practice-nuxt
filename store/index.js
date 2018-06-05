// classicモード
//import Vuex from 'vuex'
//const store = () => new Vuex.Store({
//    state: {
//        count: 0
//    },
//    mutations: {
//        increment (state) {
//            state.count++
//        }
//    }
//})
//export default store


// classicモードとmoduleモード両立は出来なかった。
// moduleモード
export const state = () => ({
    count: 0
})

export const mutations = {
    increment (state) {
        state.count++
    }
}
