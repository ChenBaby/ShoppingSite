<template>
    <div class="shopify-section-header">
        <div class="grid_icons">
            <form action="submitSearch">
                <el-input prefix-icon="el-icon-search" class="search-input" v-bind:class="{showed: searchInputShow}" v-model="searchtext" v-on:click.native="showInput" placeholder="搜一搜..." v-focus="searchInputShow" v-on:blur="searchInputShow=false" type="search"></el-input>
            </form>
            <a href="/cart"><i class="el-icon-goods"></i></a>
        </div>
        <div class="grid_lists">
            <nav>
                <ul>
                    <li><a href="/lifegoods">生活用品</a></li>
                    <li><a href="/lifegoods">汽车用品</a></li>
                    <li><a href="/lifegoods">电子产品</a></li>
                    <li><a href="/lifegoods">男士凉鞋</a></li>
                    <li><a href="/lifegoods">男士钱包</a></li>
                    <li><a href="/lifegoods">女士化妆品</a></li>
                    <li><a href="/lifegoods">办公用品</a></li>
                    <li><a href="/lifegoods">家居用品</a></li>
                    <li><a href="/lifegoods">服饰鞋帽</a></li>
                    <li><a href="/lifegoods">汽车用品</a></li>
                    <li><a href="/lifegoods">娱乐科技</a></li>
                    <li><a href="/lifegoods">母婴用品</a></li>
                    <li><a href="/lifegoods">运动器具</a></li>
                </ul>
            </nav>
        </div>
        <div class="grid_logo">
            <img src="../assets/images/logo.png" alt="logo" width="30">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  data: function () {
    return {
      searchInputShow: false,
      searchtext: ''
    }
  },
  directives: {
    // focus: {
    //   componentUpdated: function (el, {value}) {
    //     if (value) {
    //       el.querySelector('input').focus()
    //     }
    //   }
    // }
  },
  methods: {
    showInput: function () {
      this.searchInputShow = true
    },
    submitSearch: function () {
      console.log(this.searchtext)
    }
  }
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
        position: relative;
        /deep/ i {
            font-weight: bold;
            font-size: 20px;
            padding: 0 10px;
            color: #2c3e50;
            cursor: pointer;
        }
        .search-input {
            width: 100%;
            max-width: 45px;
            padding-right: 50px;
            transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            -moz-transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            -webkit-transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            -o-transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            /deep/ .el-input__inner {
                border: none;
            }
            &.showed {
                max-width: 250px;
                /deep/ .el-input__inner {
                    border: 1px solid #dcdfe6;
                    padding-left: 45px;
                }
            }
        }
        .el-icon-goods {
            position: absolute;
            top: 50%;
            margin-top: -10px;
            right: 0;
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
