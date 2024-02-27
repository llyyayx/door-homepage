<template>
    <div class="content__container home__container">
        <div class="content__box" :class="mode">
            <div class="prdline__img">
                <img class="widthFix" src="@/assets/img/content/lg.png">
                <div class="positioning" @click="openPopup">钢坯表面检测</div>
            </div>
            <div class="balck" @click="backHome">
                <img class="widthFix" src="@/assets/img/home.png">
            </div>
            <popup v-model="popupShow" width="70%">
                <div class="introduce__box">
                    <div class="introduce__box-title">设备点检及预知性维护</div>
                    <div class="introduce__box-nr">
                        <div class="nr__box">
                            <div class="nr__box-title">场景痛点:</div>
                            <div class="nr__box-content">关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                            </div>
                            <div class="nr__box-title">解决方案:</div>
                            <div class="nr__box-content">关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                                关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14关于场景痛点，详细信息在此展示，文字14
                            </div>
                        </div>
                        <div class="nr__img">
                            <div class="nr__img-box">
                                <img class="widthFix" src="@/assets/img/module/ny.png">
                            </div>
                            <div class="nr__img-box">
                                <img class="widthFix" src="@/assets/img/module/ny.png">
                            </div>
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
import { ref, onMounted } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { setupMapState } from '@/utils/setupStore'

// 开启全尺寸屏幕自适应
onMounted(() => { scale() })
// 清楚库内部监听
onBeforeRouteLeave(() => { clearListener() })
const { pageXRadio, pageYRadio } = setupMapState('dataCenter', ['pageXRadio', 'pageYRadio'])

const popupShow = ref<boolean>(false)
const openPopup = () => {
    //console.log(popupShow.value)
    popupShow.value = true
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
    background-color: #DFE9F2;
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
                background-image: url('@/assets/img/content/lx.png');
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                left: 400px;
                top: 300px;
                text-align: center;
                line-height: 140px;
                color: #FFFFFF;
                font-size: 18px;
                font-family: 'SYHT';
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                z-index: 2;
                cursor: pointer;
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
    .introduce__box {
        max-height: 972px;
        overflow-y: auto;
        padding: 30px 90px 50px;
        box-sizing: border-box;
        .introduce__box-title {
            font-size: 34px;
            line-height: 50px;
            text-align: center;
            font-family: 'SYHT';
            color: #313233;
        }
        .introduce__box-nr {
            margin-top: 52px;
            .nr__box {
                .nr__box-title {
                    font-size: 20px;
                    font-family: 'SYHT';
                    position: relative;
                    margin-top: 50px;
                    color: #313233;
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
                }
                .nr__box-content {
                    font-size: 14px;
                    color: #666666;
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
                    width: 39.7%;
                }
            }
        }
    }
}
</style>