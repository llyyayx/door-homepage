<template>
    <Transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut" style="--animate-duration: 0.6s">
        <div class="popup__container" :style="{'--wdith': width}" v-show="modelValue" @click="maskClose">
            <div class="popup__box">
                <div class="popup__box-img">
                    <img src="@/assets/img/popupBg.png">
                </div>
                <div class="popup__content" @click.stop>
                    <div class="popup__content-nr">
                        <div class="nr__title">
                            <img src="@/assets/img/popupTt.png">
                            <p>{{ title }}</p>
                        </div>
                        <div class="nr__slot">
                            <slot></slot>
                        </div>
                    </div>
                </div>
                <div class="popup__close">
                    <img src="@/assets/img/popupGb.png" alt="关闭" @click.stop="close">
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
        background: #0B0329;
    }
    & ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #d8d8d8;
        background: #2469EC;
    }
    .popup__box {
        width: var(--wdith);
        border-radius: 5px;
        position: relative;
        .popup__box-img {
            width: 100%;
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
        .popup__content {
            position: absolute;
            width: 100%;
            left: 0;
            top: 0;
            bottom: 0;
            padding: 60px 50px 60px;
            overflow: hidden;
            box-sizing: border-box;
            .popup__content-nr {
                height: 100%;
                display: flex;
                flex-direction: column;
                position: relative;
                .nr__title {
                    flex-shrink: 0;
                    position: relative;
                    width: 100%;
                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                    }
                    p {
                        position: absolute;
                        top: 35%;
                        transform: translateY(-50%);
                        color: #FFFFFF;
                        font-family: YSBT;
                        font-size: 45px;
                        left: 14.1%;
                        line-height: 66px;
                        &::after {
                            content: '';
                            width: 54px;
                            height: 54px;
                            background-image: url('@/assets/img/popupZs.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            position: absolute;
                            left: -70px;
                            top: 50%;
                            transform: translateY(-50%);
                        }
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
            right: 55px;
            top: 85px;
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