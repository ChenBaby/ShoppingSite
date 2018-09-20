<template>
    <div class="shopify-section-header">
        <div class="grid_icons">
            <!-- <el-input prefix-icon="el-icon-search"></el-input> -->
            <i class="el-icon-search"></i>
            <i class="el-icon-goods"></i>
        </div>
        <div class="grid_lists">
            <ul>
                <li>生活用品</li>
                <li>汽车用品</li>
                <li>望远镜</li>
                <li>男士凉鞋</li>
                <li>男士钱包</li>
                <li>电子产品</li>
                <li>生活用品</li>
                <li>汽车用品</li>
                <li>望远镜</li>
                <li>男士凉鞋</li>
                <li>男士钱包</li>
                <li>电子产品</li>
                <li>电子产品</li>
            </ul>
        </div>
        <div class="grid_logo">
            <img src="../assets/logo.png" alt="logo" width="30">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="less" scoped>
.shopify-section-header {
    line-height: 1.5;
    display: table;
    padding: 0 55px;
    border-bottom: 1px solid #e8e9eb;
    > div {
        display: table-cell;
        vertical-align: middle;
    }
    li {
        list-style: none;
        display: inline-block;
        padding: 3px 10px;
    }
    .grid_icons {
        width: 25%;
        text-align: right;
        i {
            font-weight: bold;
            font-size: 20px;
            padding: 0 10px;
        }
    }
    .grid_lists {
        width: 50%;
        ul {
            margin: 25px 0;
        }
    }
    .grid_logo {
        width: 25%;
        text-align: right;
    }
}
</style>
