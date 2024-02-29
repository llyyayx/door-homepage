<template>
    <div class="content__container home__container">
        <div class="content__box" :class="mode">
            <div class="prdline__img">
                <img class="widthFix" :src="subProduct[route.query.mark]['imgBase']">
                <div 
                    class="positioning"
                    v-for="item in subProduct[route.query.mark]['children']"
                    :style="{ '--x': item.x + 'px', '--y': item.y + 'px' }"
                    @click="openPopup(item)"
                >
                    {{ item.name }}
                </div>
            </div>
            <div class="balck" @click="backHome">
                <img class="widthFix" src="@/assets/img/home.png">
            </div>
            <popup v-model="popupShow" :title="popupContent.name">
                <div class="introduce__box-nr">
                    <div class="nr__box">
                        <div class="nr__box-title" v-if="popupContent.painSpot && popupContent.painSpot.length > 0">场景痛点:</div>
                        <div class="nr__box-content" v-html="popupContent.painSpot ?  popupContent.painSpot : ''"></div>
                        <div class="nr__box-title" v-if="popupContent.programme && popupContent.programme.length > 0">解决方案:</div>
                        <div class="nr__box-content" v-html="popupContent.programme ? popupContent.programme : ''"></div>
                    </div>
                    <div class="nr__img" v-if="popupContent.introduceImg && popupContent.introduceImg.length > 0">
                        <div class="nr__img-box" v-for="pictrue in popupContent.introduceImg" :style="{ '--length': popupContent.introduceImg.length }">
                            <img class="widthFix" :src="pictrue">
                        </div>
                    </div>
                </div>
            </popup>
        </div>
    </div>
</template>
<script lang="ts" setup>
import scale, { mode, clearListener } from '@/utils/scale'
import popup from '@/components/popup.vue'
import { ref, onMounted, reactive } from 'vue'
import { useRouter, useRoute, onBeforeRouteLeave } from 'vue-router'
import { setupMapState } from '@/utils/setupStore'

const route: any = useRoute()

// 开启全尺寸屏幕自适应
onMounted(() => { scale() })
// 清楚库内部监听
onBeforeRouteLeave(() => { clearListener() })
const { subProduct } = setupMapState('contentCenter', ['subProduct'])

// 弹出显示
const popupShow = ref<boolean>(false)
// 弹出内容
const popupContent = ref<any>({})
const openPopup = (item: any) => {
    popupShow.value = true
    popupContent.value = {...item} 
}

const router = useRouter()
const backHome = () => {
    router.back()
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
.content__container {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top,#0b072f, #2e53bd);
    user-select: none;
    .content__box {
        position: relative;
        width: calc(var(--cfa) * var(--cfn) * 1px);
        height: calc(var(--cfb) * var(--cfn) * 1px);
        .prdline__img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            .positioning {
                width: 124px;
                height: 140px;
                padding: 0 8px;
                box-sizing: border-box;
                background-image: url('@/assets/img/content/lx.png');
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                left: var(--x);
                top: var(--y);
                text-align: center;
                line-height: 140px;
                color: #FFFFFF;
                font-size: 18px;
                font-family: 'YSBT';
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                z-index: 2;
                cursor: pointer;
                transition: transform linear 0.2s;
                &:hover {
                    transform: scale(1.2);
                    transform-origin: center;
                    font-size: calc(14px / 1);
                }
            }
        }
        .balck {
            width: 3.125%;
            position: absolute;
            right: 5.2%;
            top: 9.25%;
            cursor: pointer;
        }
    }
    .introduce__box-nr {
        padding: 0 50px;
        .nr__box {
            .nr__box-title {
                font-size: 20px;
                font-family: 'SYHT';
                position: relative;
                color: #02FFF9;
                &::after {
                    content: "";
                    width: 14px;
                    height: 14px;
                    background-image: url('@/assets/img/point.png');
                    background-size: cover;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: -20px;
                    z-index: 2;
                }
                &:nth-child(3) {
                    margin-top: 50px;
                }
            }
            .nr__box-content {
                font-size: 14px;
                color: #FFFFFF;
                line-height: 28px;
                font-family: 'SYHT';
                margin-top: 8px;
                text-align: justify;
            }
        }
        .nr__img {
            display: flex;
            margin-top: 36px;
            justify-content: space-between;
            .nr__img-box {
                width: calc(100% / var(--length) - 5%);
            }
        }
    }
}
</style>