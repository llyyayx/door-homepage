<template>
    <div class="home__container"  @click="clearStauts">
        <div class="home__box" :class="mode">
            <!-- 平台 z-index: 8 -->
            <div class="platform__main">
                <!-- 产线(排序规则：从左向右，从上到下) z-index: 5 -->
                <div class="platform__main-prdline">
                    <div class="prdline__img" 
                        v-for="item in prdLineModule" :style="{ 'left': item.x, 'top': item.y, 'width': item.imgWdith }"
                        :key="item.mark"
                        @mouseenter="item.select.show = true"
                        @mouseleave="item.select.show = false"
                        @click="tolink(item)"
                    >
                        <!-- 产线未选中 -->
                        <img class="widthFix" :src="item.imgBase">
                        <!-- 产线选中 -->
                        <template v-if="item.select">
                            <div class="prdline__active" :style="{ 'width': item.select.imgWdith, 'transform': item.select.transform }">
                                <Transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__zoomOut">
                                    <img class="widthFix" :src="item.select.imgBase" v-show="item.select.show">
                                </Transition>
                            </div>
                        </template>
                        <!-- 引导箭头 -->
                        <template v-if="item.guide">
                            <div class="guide__img" 
                                v-for="(guide, index) in item.guide"
                                :key="index"
                                :style="{ 'left': guide.x, 'top': guide.y }"
                            >
                                <div class="guide__img-3d">
                                    <img class="widthFix" src="@/assets/img/jt.gif" :style="{ 'transform': guide.transform }">
                                </div>
                            </div>
                        </template>
                        <!-- 轨道 -->
                        <template v-if="item.track">
                            <div class="track__img" 
                                v-for="(track, index) in item.track"
                                :key="index"
                                :style="{ 'left': track.x, 'top': track.y, width: track.imgWdith }"
                            >
                                <img class="widthFix" :src="track.imgBase">
                            </div>
                        </template>
                    </div>
                    <div class="select__mask" v-show="prdLineModule.findIndex((item: any) => item.select.show) >= 0"></div>
                </div>
                <!-- 底座 -->
               <div class="platform__main-dz">
                    <img class="widthFix" src="@/assets/img/dz2.png">
               </div>
            </div>
            <!-- 标签 z-index: 4 -->
            <div class="produce__module">
                <div class="produce__module-img" @mouseenter="setPrdlineSelect('tq')" @mouseleave="setPrdlineSelect('tq', true)">
                    <img class="widthFix" src="@/assets/img/tq.png">
                    <div class="img__active" v-show="selectPrdLineMark == 'tq'">
                        <img class="widthFix" src="@/assets/img/tq_active.png">
                    </div>
                </div>
                <div class="produce__module-img" @mouseenter="setPrdlineSelect('lg')" @mouseleave="setPrdlineSelect('lg', true)">
                    <img class="widthFix" src="@/assets/img/lg.png">
                    <div class="img__active" v-show="selectPrdLineMark == 'lg'">
                        <img class="widthFix" src="@/assets/img/lg_active.png">
                    </div>
                </div>
                <div class="produce__module-img" @mouseenter="setPrdlineSelect('rz')" @mouseleave="setPrdlineSelect('rz', true)">
                    <img class="widthFix" src="@/assets/img/rz.png">
                    <div class="img__active" v-show="selectPrdLineMark == 'rz'">
                        <img class="widthFix" src="@/assets/img/rz_active.png">
                    </div>
                </div>
                <div class="produce__module-img" @mouseenter="setPrdlineSelect('lz')" @mouseleave="setPrdlineSelect('lz', true)">
                    <img class="widthFix" src="@/assets/img/lz.png">
                    <div class="img__active" v-show="selectPrdLineMark == 'lz'">
                        <img class="widthFix" src="@/assets/img/lz_active.png">
                    </div>
                </div>
            </div>
            <!-- 背景光圈 z-index: 3 -->
            <div class="circle__img">
                <img class="widthFix" src="@/assets/img/circle.png">
                <!-- 地区 -->
                <div class="circle__area" 
                    v-for="(item, index) in area" :style="{ 'left': item.x, 'top': item.y }"
                    :key="index"
                    @mouseenter.stop="selectArea($event, item.factory, item.title)" 
                    @mouseleave="clearStauts"
                >
                    {{ item.title }}
                </div>
            </div>
            <!-- 底部手 z-index: 2 -->
            <div class="hand__img">
                <img class="widthFix" src="@/assets/img/hand.png">
            </div>
            <!-- 信息滚动 -->
            <rollmsg :title="areaName" :tableData="selectFactory" :interval="40" :x="ax" :y="ay" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import scale, { mode, clearListener } from '@/utils/scale'
import { onMounted, ref } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { setupMapState } from '@/utils/setupStore'
import 'animate.css/animate.min.css'
import rollmsg from '@/components/rollmsg.vue'

// 数据
const { prdLineModule, area, pageXRadio, pageYRadio } = setupMapState('dataCenter', ['prdLineModule', 'area', 'pageXRadio', 'pageYRadio'])
const { subProduct } = setupMapState('contentCenter', ['subProduct'])

// 开启全尺寸屏幕自适应
onMounted(() => { scale() })
// 清楚库内部监听
onBeforeRouteLeave(() => { clearListener() })

// 标签与区域的对应
const indexToPrdLine = {
    tq: ['cgzx', 'lc', 'sj', 'qt', 'jh', 'zhzx', 'lt', 'sys', 'ny'],
    lg: ['zhzx', 'sys', 'ny', 'lg'],
    rz: ['zhzx', 'sys', 'ny', 'rz'],
    lz: ['zhzx', 'sys', 'ny', 'lz']
}
// 选中的产线mark
const selectPrdLineMark = ref<string>('')
// 设置标签对应产线的选中
const setPrdlineSelect = (index: string, leave: boolean = false): void => {
    if (leave) {
        selectPrdLineMark.value = ''
    } else {
        selectPrdLineMark.value = index
    }
    const active = indexToPrdLine[index]
    prdLineModule.value.forEach((item: any) => {
        if (active.includes(item.mark) && item.select) {
            item.select.show = !leave
        }
    })
}

// 选中地区的数据
const selectFactory = ref<any[]>([])
const areaName = ref<string>('')
const ax = ref<number>()
const ay = ref<number>()
// 选中地区事件
const selectArea = (event: any, factory: any[], areaTitle: string) => {
    if (areaName.value != areaTitle) {
        const container = document.getElementsByClassName('home__box')[0]
        const clientRect = container.getBoundingClientRect()
        // +10为偏移量
        ax.value = event.pageX / pageXRadio.value + 10 - clientRect.left / pageXRadio.value
        ay.value = event.pageY / pageYRadio.value + 10 - clientRect.top / pageXRadio.value
        selectFactory.value = factory,
        areaName.value = areaTitle
    } else {
        // 重复点击一次关闭消息框
        selectFactory.value = []
        areaName.value = ''
    }
}

// 清楚页面上全部选中的状态
const clearStauts = () => {
    selectArea(new Object(), [], areaName.value as string)
}

const router = useRouter()
// 跳转到详情页面
const tolink = (prdLine: any) => {
    prdLine.select.show = false
    let mark = prdLine.mark
    if (mark == 'lc2') {  mark = 'lc' }
    if (subProduct.value[mark]) {
        router.push({ path: '/content', query: { mark } })
    } else {
        alert('该产线下无内容')
    }
}
</script>
<style lang="scss" scoped>
.widthFix {
    display: block;
    width: 100%;
    height: auto;
    pointer-events: none;
}
/* 等比模式 */
.advance {
    transform-origin: left top;
    transform: scale(calc(var(--cfc) / var(--cfn))) translate(calc(var(--cff) * var(--cfn) * 1px)) translateY(calc(var(--cfg) * var(--cfn) * 1px));
}
/* 拉伸模式 */
.stretch {
    transform-origin: left top;
    transform: scaleX(var(--widthRatio)) scaleY(var(--heightRatio));
}
.home__container {
    overflow: hidden;
    position: relative;
    height: 100%;
    background: linear-gradient(to top,#0b072f, #2e53bd);
    user-select: none;
    .home__box {
        position: relative;
        width: calc(var(--cfa) * var(--cfn) * 1px);
        height: calc(var(--cfb) * var(--cfn) * 1px);
        .platform__main {
            position: absolute;
            left: 50%;
            top: 258px;
            transform: translateX(-50%);
            width: 1570px;
            z-index: 8;
            .platform__main-prdline {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 5;
                .prdline__img {
                    position: absolute;
                    cursor: pointer;
                    .prdline__active {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 9;
                    }
                    .guide__img {
                        position: absolute;
                        width: 80px;
                        z-index: 2;
                        perspective: 900px;
                        .guide__img-3d {
                            width: 100%;
                            transform-style: preserve-3d;
                            img {
                                transform-origin: left top;
                            }
                        }
                    }
                    .track__img {
                        position: absolute;
                        z-index: 1;
                    }
                }
                .select__mask {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    clip-path: polygon(312px 0px, -2px 374px, 1572px 373px, 1257px 0px);
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 5;
                }
            }
            .platform__main-dz {
                width: 100%;
            }
        }
        .produce__module {
            display: flex;
            position: absolute;
            left: 50%;
            top: 38px;
            transform: translateX(-50%);
            overflow: hidden;
            z-index: 4;
            .produce__module-img {
                cursor: grabbing;
                &:nth-child(1), &:nth-last-child(1) {
                    margin-top: 34px;
                }
                width: 166px;
                position: relative;
                .img__active {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    z-index: 2;
                }
            }
        }
        .circle__img {
            width: 1779px;
            position: absolute;
            left: 50%;
            top: -145px;
            transform: translateX(-50%);
            z-index: 3;
            .circle__area {
                width: 18px;
                word-wrap: break-word;
                line-height: 22px;
                position: absolute;
                font-size: 18px;
                font-family: YSBT;
                color: #71f6f0;
                text-shadow: 0 0 10px #71f6f0, 0 0  2px #71f6f0;
                cursor: pointer;
            }
        }
        .hand__img {
            width: 1562px;
            position: absolute;
            right: -65px;
            bottom: -220px;
            z-index: 2;
        }
    }
}
</style>