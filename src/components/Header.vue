<template>
    <div class="shopify-section-header">
        <div class="grid_icons">
            <form action="submitSearch">
                <el-input prefix-icon="el-icon-search" class="search-input" v-bind:class="{showed: searchInputShow}" v-model="searchtext" v-on:click.native="showInput" placeholder="搜一搜..." v-focus="searchInputShow" v-on:blur="searchInputShow=false" type="search"></el-input>
            </form>
            <a href="/login" class="header_account">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-login" viewBox="0 0 28.33 37.68">
                    <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path>
                </svg>
            </a>
            <a href="/cart" class="header_goods"><i class="el-icon-goods"></i></a>
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
            padding-right: 80px;
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
        .header_goods {
            position: absolute;
            top: 50%;
            margin-top: -10px;
            right: 0;
        }
        .header_account {
            position: absolute;
            top: 50%;
            right: 50px;
            padding: 8px 0;
            -ms-transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
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
