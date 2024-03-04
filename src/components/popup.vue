<template>
    <Transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut" style="--animate-duration: 0.6s">
        <div class="popup__container" :style="{'--wdith': width}" v-show="modelValue" @click="maskClose">
            <div class="popup__box">
                <div class="popup__content" @click.stop>
                    <div class="popup__content-nr">
                        <div class="nr__title">
                            <p>{{ title }}</p>
                        </div>
                        <div class="nr__slot">
                            <slot></slot>
                        </div>
                    </div>
                </div>
                <div class="popup__close">
                    <img src="@/assets/img/close.png" alt="关闭" @click.stop="close">
                </div>
            </div>
        </div>
    </Transition>
    <div class="popup__mask" v-show="mask && modelValue"></div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
import 'animate.css/animate.min.css'
const props = defineProps({
    // 显示
    modelValue: {
        type: Boolean,
        required: false,
        default: false
    },
    // 遮罩
    mask: {
        type: Boolean,
        required: false,
        default: true
    },
    // 宽度
    width: {
        type: String,
        required: false,
        default: '1356px'
    },
    // 标题
    title: {
        type: String,
        required: false,
        default: '123'
    },
})

const emit = defineEmits(['update:modelValue'])
// 关闭弹框
const close = () => {
    emit('update:modelValue', false)
}
// 处理动画引起的层级问题，导致的无法点击遮罩层
const maskClose = () => {
    if (props.mask) {
        close()
    }
}
</script>
<style lang="scss" scoped>
.popup__container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    & ::-webkit-scrollbar {
        width: 4px;
    }
    & ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 5px #d8d8d8;
        background: #e3e3e3;
    }
    & ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #d8d8d8;
        background: #f9f9f9;
    }
    .popup__box {
        width: var(--wdith);
        height: 932px;
        border-radius: 5px;
        position: relative;
        .popup__content {
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            bottom: 0;
            padding: 33px 50px 33px;
            overflow: hidden;
            box-sizing: border-box;
            background-color: #FFFFFF;
            border-radius: 4px;
            .popup__content-nr {
                height: 100%;
                display: flex;
                flex-direction: column;
                position: relative;
                .nr__title {
                    flex-shrink: 0;
                    position: relative;
                    width: 100%;
                    p {
                        text-align: center;
                        color: #313233;
                        font-family: SYHT;
                        font-size: 34px;
                        line-height: 34px;
                    }
                }
                .nr__slot {
                    flex: 1;
                    overflow-y: auto;
                    overflow-x: hidden;
                }
            }
        }
        .popup__close {
            width: 28px;
            position: absolute;
            right: -36px;
            top: 0px;
            transform: translateY(-100%);
            cursor: pointer;
            img {
                display: block;
                width: 100%;
            }
        }
    }
}
.popup__mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #0d0a31;
    opacity: 0.85;
    z-index: 998;
}
</style>