import {defineStore} from "pinia"

export default defineStore("form", {
    state: () => ({
        isOpen: false,
    }),
    getters: {
        hiddenClass(state) {
            return !state.isOpen ? "hidden" : ""
        }
    }
})