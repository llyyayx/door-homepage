<template>
    <div class="rollmsg__container" :style="{ '--x': x+'px', '--y': y+'px' }" v-show="tableData.length > 0">
        <div class="rollmsg__title">{{ title }}</div>
        <div class="rollmsg__content">
            <div class="rollmsg__content-scroll">
            <ul ref="scroll">
                <li v-for="(item, index) in tableList" :key="index">
                    <span>{{ item.province }}</span>
                    <span>{{ item.city }}</span>
                    <span>{{ item.name }}</span>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const props = defineProps({
    // 消息框标题
    title: {
        type: String,
        required: false,
        default: ''
    },
    // 消息框数据
    tableData: {
        type: Array,
        required: false,
        default: () => []
    },
    // 滚动一次用时[控制滚动速度]
    interval: {
        type: Number,
        required: false,
        default: 20
    },
    // 消息框位置
    x: {
        type: Number,
        required: false,
        default: 0
    },
    y: {
        type: Number,
        required: false,
        default: 0
    },
})
const scroll = ref()
// 数据每行高度(包含margin)
const lineHeight = 23
// 容器最多放几行
const visibleSize = 8
// 时间戳
let timer: any = 0

const tableList = ref<any[]>([])
watch(() => props.tableData, (tableData: any) => {
    clearTimeout(timer)
    if (tableData.length > 0) {
        if (scroll.value && scroll.value.style) {
            scroll.value.style.transform = `translateY(0px)`
        }
        if (tableData.length > visibleSize) {
            tableList.value = tableData.concat(tableData)
            tableTimerFun()
        } else {
            tableList.value = tableData
        }
    }
}, {
    immediate: true
})

let count = 0
const tableTimerFun = () => {
    timer = setTimeout(() => {
        count++
        if (count < (tableList.value.length / 2) * lineHeight) {
            scroll.value.style.transform = `translateY(-${count}px)`
        } else {
            count = 0
            scroll.value.style.transform = `translateY(-${count}px)`
        }
        tableTimerFun()
    }, props.interval)
}

</script>
<style lang="scss" scoped>
.rollmsg__container {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: 261px;
    height: 245px;
    background-image: url('@/assets/img/bk.png');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 999;
    .rollmsg__title {
        flex-shrink: 0;
        flex-grow: 0;
        height: 40px;
        line-height: 40px;
        padding: 0 0 0 38px;
        background-image: url('@/assets/img/title.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right bottom;
        font-size: 24px;
        font-family: 'YSBT';
        color: #FFFFFF;
    }
    .rollmsg__content {
        flex-shrink: 1;
        flex-grow: 1;
        padding: 12px 15px;
        overflow: hidden;
        box-sizing: border-box;
        .rollmsg__content-scroll {
            height: 100%;
            overflow: hidden;
            ul {
                transform: translateY(0);
                li {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 9px;
                    span {
                        display: inline-block;
                        line-height: 14px;
                        flex-shrink: 0;
                        flex-grow: 1;
                        font-size: 12px;
                        color: #F2F5FF;
                        font-family: 'SYHT';
                        text-wrap: nowrap;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        width: 0;
                        &:nth-last-of-type(2) {
                            margin: 0 4px;
                        }
                        &:nth-last-of-type(1) {
                            width: 108px;
                            flex-shrink: 0;
                            flex-grow: 0;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>