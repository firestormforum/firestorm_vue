import { GetterTree } from 'vuex'
import { AppState, RootState } from './types'

const getters: GetterTree<AppState, RootState> = {
  getLogin (state): boolean {
    const { loggedIn } = state
    return loggedIn
  }
}

export default getters
