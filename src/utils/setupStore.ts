import { computed } from 'vue'
// 相关辅助函数导入
import { mapActions, mapGetters, mapMutations, mapState, useStore } from 'vuex'
function mapAll (keys: any, mapFn: any) {
    // 导入仓库对象
    const $store = useStore()
    // 根据传入的辅助函数和其他参数进行映射
    const stateFn = mapFn(...keys)
    // 记录映射结果
    const res = {}
    // 如果映射的是state或getters需要使用computed组合式API包裹，因此做了这样一个判断
    const isMapData = [mapState, mapGetters].includes(mapFn)
    for (const key in stateFn) {
        if (Object.hasOwnProperty.call(stateFn, key)) {
            // 修改映射函数内部this指向
            const fn = stateFn[key].bind({ $store })
            // 记录：state或getters使用computed进行包裹，其他的直接记录
            res[key] = isMapData ? computed(fn) : fn
        }
    }
    // 返回结果
    return res
}
// 导出对应的setup映射函数
export function setupMapState (...keys: any[]): any {
    return mapAll(keys, mapState)
}
export function setupMapMutations (...keys: any[]): any {
    return mapAll(keys, mapMutations)
}
export function setupMapGetters (...keys: any[]): any {
    return mapAll(keys, mapGetters)
}
export function setupMapActions (...keys: any[]): any {
    return mapAll(keys, mapActions)
}