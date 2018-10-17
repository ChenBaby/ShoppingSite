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
            this.$emit('overlayClosed')
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
        left: 50%;
        top: 10px;
        width: 440px;
        overflow: hidden;
        transform: translate(-50%);
        border-radius: 6px;
        background-color: #fff;
    }
  }
</style>
