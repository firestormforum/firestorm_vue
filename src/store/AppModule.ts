import { Module } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import { AppState, RootState } from './types'
import state from './state'

export const AppModule: Module<AppState, RootState> = {
  state,
  getters,
  mutations
}
