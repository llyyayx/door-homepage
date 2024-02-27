import { ref } from 'vue'
import store from '@/store'

// 缩放模式 [advance高级模式(等比)，stretch拉伸模式]
export const mode = ref<string>('advance')

const computedRatio = () => {
    // 设计稿宽度
    const designWidth:number = 1920
    // 设计稿高度
    const designHeight:number = 1080
    // 当前屏幕(容器)的宽度
    const htmlWidth:number = document.getElementsByClassName('home__container')[0].clientWidth
    // 当前屏幕(容器)的高度
    const htmlHeight:number = document.getElementsByClassName('home__container')[0].clientHeight
    // htmlDom实例
    const htmlDom:HTMLElement = document.documentElement
    // cssRoot全局变量存储
    const cssRoot:any = {
        cfa: designWidth,
        cfb: designHeight,
        cfn: 1,
        cfd: 0,
        cfe: 0,
        cfc: 0,
        cff: 0,
        cfg: 0,
    }

    // 求得当前屏幕(容器)与设计稿的比例
    const widthRatio:any = htmlWidth / designWidth
    const heightRatio:any = htmlHeight / designHeight
    // 缩放标准[width按照宽度缩放，height按照高度缩放]
    let scalePip = widthRatio > heightRatio ? 'height' : 'width'

    // 当前屏幕(容器)分辨率比例
    const currentRatio = htmlWidth / htmlHeight
    if (currentRatio >= 1.77777 && currentRatio <= 2.0) {
        scalePip = 'height'
        // 设置为拉伸模式
        mode.value = 'stretch'
    } else {
        // 设置为等比模式(高级模式)
        mode.value = 'advance'
    }
    
    // 计算css变量cfc、cff、cfg
    if (scalePip == 'width') {
        cssRoot.cfc = widthRatio * cssRoot.cfn
        cssRoot.cff = 0
        // 计算cfg
        cssRoot.cfg = ((htmlHeight - (designHeight * widthRatio)) / 2) / widthRatio / cssRoot.cfn
    } else if (scalePip == 'height') {
        cssRoot.cfc = heightRatio * cssRoot.cfn
        cssRoot.cfg = 0
        // 计算cff
        cssRoot.cff = ((htmlWidth - (designWidth * heightRatio)) / 2) / heightRatio / cssRoot.cfn
    }

    // 赋值:root全局变量
    if (mode.value == 'advance') {
        store.state.dataCenter.pageXRadio = cssRoot.cfc
        store.state.dataCenter.pageYRadio = cssRoot.cfc
    } else {
        store.state.dataCenter.pageXRadio = widthRatio
        store.state.dataCenter.pageYRadio = heightRatio
    }
    Object.keys(cssRoot).forEach(key => {
        htmlDom.style.setProperty('--'+key, cssRoot[key])
    })
    if (mode.value == 'stretch') {
        htmlDom.style.setProperty('--widthRatio', widthRatio)
        htmlDom.style.setProperty('--heightRatio', heightRatio)
    }
}

// 窗口大小变化
const scaleResize = () => {
    computedRatio()
}

export default () => {
    computedRatio()
    // 窗口监听
    window.addEventListener('resize', scaleResize)
}

// 清除resize监听
export const clearListener = () => {
    window.removeEventListener('resize', scaleResize)
}
