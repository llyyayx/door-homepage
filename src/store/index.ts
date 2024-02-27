import { createStore, ModuleTree } from 'vuex'
import keepAlive, { keepAliveState } from './modules/keepAlive'
import dataCenter, { dataCenterState } from './modules/data'

export interface AllState {
  keepAlive: keepAliveState,
  dataCenter: dataCenterState
}


// 实例化
const store = createStore<AllState>({

  modules: {
    keepAlive,
    dataCenter
  }

})

export default store
