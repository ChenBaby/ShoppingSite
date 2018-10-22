<template>
    <div class="shopify-section-header">
        <div class="grid_logo">
            <img src="../assets/images/logo.png" alt="logo" width="30" class="logo">
        </div>
        <div class="grid_lists text-left">
            <nav>
                <ul>
                    <li><router-link :to="{path: '/lifegoods'}">生活用品</router-link></li>
                    <li><router-link :to="{path: '/lifegoods'}">汽车用品</router-link></li>
                    <li><router-link :to="{path: '/lifegoods'}">电子产品</router-link></li>
                    <li><router-link :to="{path: '/lifegoods'}">男士凉鞋</router-link></li>
                    <li><router-link :to="{path: '/lifegoods'}">男士钱包</router-link></li>
                    <li><router-link :to="{path: '/lifegoods'}">女士化妆品</router-link></li>
                    <li><router-link :to="{path: '/lifegoods'}">办公用品</router-link></li>
                </ul>
            </nav>
        </div>
        <div class="grid_icons">
            <form action="submitSearch">
                <el-input prefix-icon="el-icon-search" class="search-input" v-bind:class="{showed: searchInputShow}" v-model="searchtext" v-on:click.native="showInput" placeholder="搜一搜..." v-focus="searchInputShow" v-on:blur="searchInputShow=false" type="search"></el-input>
            </form>
            <router-link :to="{path: '/cart'}" class="header_goods">
                <i class="el-icon-goods"></i>
            </router-link>
            <a href="javascript:void(0)" @click="logIn"  v-if="!isLogged">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-login" viewBox="0 0 28.33 37.68">
                    <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z"></path>
                </svg>
            </a>
            <div class="name-block">
                <div>
                    <a v-if="isLogged" class="name">{{user.name}}</a>
                </div>
                <ul class="popover text-left">
                    <li>
                        <a href="javascript:void(0)">个人中心</a>
                    </li>
                    <li @click="logOut" >
                        <a href="javascript:void(0)" class="h4">登出</a>
                    </li>
                </ul>
            </div>
        </div>
        <Overlay :visibled="loginShow || registShow" @overlayClosed="closeOverlay">
            <Login :open="loginShow" @registOpened="openRegist"></Login>
            <Regist :open="registShow" @loginOpened="openLogin"></Regist>
        </Overlay>
    </div>
</template>
<script>
import Login from './Login'
import Overlay from './Overlay'
import Regist from './Regist'
export default {
    "name": 'Header',
    "components": {
        Login,
        Overlay,
        Regist
    },
    "data": function () {
        return {
            "searchInputShow": false,
            "searchtext": '',
            "loginShow": false,
            "registShow": false
        }
    },
    "methods": {
        "showInput": function () {
            this.searchInputShow = true
        },
        "submitSearch": function () {
            console.log(this.searchtext)
        },
        "logOut": function () {
            this.$store.dispatch('user/signOut')
                .then(res => {
                    if (res.data.signout) {
                        this.$store.commit('user/setUserInfo', {})
                    }
                })
        },
        "logIn": function () {
            this.loginShow = !this.loginShow
        },
        "closeOverlay": function () {
            this.loginShow = false
            this.registShow = false
        },
        "openRegist": function () {
            this.loginShow = false
            this.registShow = true
        },
        "openLogin": function () {
            this.loginShow = true
            this.registShow = false
        }
    },
    "watch": {
        user () {},
        isLogged () {}
    },
    "computed": {
        user () {
            return this.$store.state.user.userInfo
        },
        isLogged () {
            return this.$store.state.user.isLogged
        }
    }
}
</script>
<style lang="less" scoped>
.shopify-section-header {
    height: 60px;
    padding: 0 55px;
    border-bottom: 1px solid #e8e9eb;
    .grid_logo {
        float: left;
        height: 60px;
        line-height: 60px;
        vertical-align: middle;
        .logo {
            vertical-align: middle;
        }
    }
    .grid_lists {
        width: 960px;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        margin-left: -480px;
        height: 60px;
        vertical-align: middle;
        display: inline-block;
        li {
            list-style: none;
            display: inline-block;
            padding: 3px 10px;
            a {
                height: 60px;
                line-height: 55px;
                padding: 21px 0;
                font-size: 16px;
            }
        }
    }
    .grid_icons {
        float: right;
        text-align: right;
        position: relative;
        line-height: 60px;
        height: 60px;
        vertical-align: middle;
        /deep/ i {
            font-weight: bold;
            font-size: 20px;
            padding: 0 10px;
            color: #2c3e50;
            cursor: pointer;
        }
        form {
            position: relative;
            right: 30px;
            display: inline-block;
            padding-right: 10px;
        }
        .search-input {
            width: 100%;
            max-width: 45px;
            transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            -moz-transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            -webkit-transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            -o-transition: all 0.35s cubic-bezier(0.29, 0.63, 0.44, 1);
            /deep/ .el-input__inner {
                border: none;
            }
            /deep/ .el-icon-search {
                position: relative;
                bottom: 2px;
            }
            &.showed {
                max-width: 250px;
                /deep/ .el-input__inner {
                    border: 1px solid #dcdfe6;
                    padding-left: 45px;
                }
            }
        }
        .name-block {
            position: relative;
            right: 0;
            display: inline-block;
            &:hover {
                background-color: #f5f5f5;
                .popover {
                    display: block;
                }
            }
            .name {
                font-size: 18px;
                cursor: pointer;
                display: inline-block;
                padding: 0 20px;
            }
            .popover {
                display: none;
                position: absolute;
                right: 0;
                width: 180px;
                border-radius: 6px;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                box-shadow: 0 2px 8px rgba(0,0,0,.1);
                border: 1px solid rgba(0,0,0,.15);
                float: left;
                margin-left: -5px;
                padding: 0 0 10px 0;
                border-top: 0;
                z-index: 100;
                background-color: #f5f5f5;
                li {
                    text-align: center;
                    line-height: 40px;
                    cursor: pointer;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }
        }
        .header_goods {
            position: relative;
            right: 20px;
            display: inline-block;
        }
        /deep/ .el-icon-goods {
            position: relative;
            top: 2px;
        }
        .header_account {
            position: relative;
            right: 0;
            display: inline-block;
            &.hidden {
                display: none;
            }
        }
    }
}
</style>
