import { createStore, ModuleTree } from 'vuex'
import keepAlive, { keepAliveState } from './modules/keepAlive'
import dataCenter, { dataCenterState } from './modules/data'
import contentCenter, { contentCenterState } from './modules/content'

export interface AllState {
  keepAlive: keepAliveState,
  dataCenter: dataCenterState,
  contentCenter: contentCenterState
}


// 实例化
const store = createStore<AllState>({

  modules: {
    keepAlive,
    dataCenter,
    contentCenter
  }

})

export default store
