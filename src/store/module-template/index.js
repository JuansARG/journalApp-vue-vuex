import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const myCustomModule = {
    actions,
    getters,
    mutations,
    namespaced: true,
    state
}

export default myCustomModule;