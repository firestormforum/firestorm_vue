import { Module } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import { AppState, RootState } from './types';

export const AppModule: Module<AppState, RootState> = {
  state,
  getters,
  mutations
}