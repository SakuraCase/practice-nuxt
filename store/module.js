export const state = () => ({
    counter: 0
})

export const getters = {
    counter: (state) => state.counter
}

export const mutations = {
    inc (state) {
        state.counter++
    }
}