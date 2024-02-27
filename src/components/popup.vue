<template>
    <Transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
        <div class="popup__container" :style="{'--wdith': width}" v-show="modelValue" @click="maskClose">
            <div class="popup__box">
                <div class="popup__content" @click.stop>
                    <slot></slot>
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
        default: '50vw'
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
    .popup__box {
        width: var(--wdith);
        background-color: #FFFFFF;
        border-radius: 5px;
        position: relative;
        .popup__close {
            width: 28px;
            position: absolute;
            right: -50px;
            top: 0;
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