import { Module } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import { AppState, RootState } from './types';

export const AppModule: Module<AppState, RootState> = {
  getters,
  mutations
}