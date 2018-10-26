<template>
    <div class="overlay" id="overlay" :class="{visible: isVisibled}">
        <div class="overlay-content">
            <a href="javascript:void(0)" @click="close"><i class="btn-close el-icon-close"></i></a>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    "name": 'Overlay',
    "props": {
        "visibled": Boolean
    },
    "methods": {
        close () {
            this.$emit('overlayclosed')
        }
    },
    "watch": {
        isVisibled () {

        }
    },
    "computed": {
        "isVisibled": function () {
            return this.visibled
        }
    }
}
</script>
<style lang="less" scoped>
    .overlay {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        text-align: center;
        display: none;
        &.visible {
            display: block;
        }
        .btn-close {
            position: absolute;
            right: 7px;
            top: 7px;
        }
        .overlay-content {
            position: fixed;
            top: 10px;
            left: 50%;
            width: 100%;
            max-width: 440px;
            background-color: #FFF;
            border-radius: 3px;
            z-index: 1000;
            text-align: center;
            padding-top: 40px;
            box-sizing: border-box;
            animation: slide .3s forwards ease-in-out;
        }
    }
    @keyframes slide {
        from {
            opacity: 0;
            transform: translate(-50%, -100%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0%);
        }
    }
</style>
