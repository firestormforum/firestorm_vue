import { MutationTree } from 'vuex'
import { AppState } from './types'

const mutations: MutationTree<AppState> = {
  setLogin (state, value: boolean) {
    state.loggedIn = value
  }
}

export default mutations
