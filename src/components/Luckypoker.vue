<template>
    <div class="poker-page">
        <Header></Header>
        <div class="luckypoker">
            <!-- <div class="bg-border"></div> -->
            <div class="bg-content">
                <div class="letter-panel">
                    <div class="left panels">
                        <div class="letter-red panel">
                            <img src="~@/assets/images/luckyPoker/icon-hongt.png" alt="letter-hongt" class="letter-hongt">
                            <span>RED</span>
                            <img src="~@/assets/images/luckyPoker/icon-fk.png" alt="letter-fk" class="letter-fk">
                        </div>
                        <div class="letter-black panel panel-light">
                            <img src="~@/assets/images/luckyPoker/icon-heit.png" alt="letter-heit" class="letter-heit">
                            <span>BLACK</span>
                            <img src="~@/assets/images/luckyPoker/icon-mh.png" alt="letter-mh" class="letter-mh">
                        </div>
                    </div>
                    <div class="right">
                        <span class="letter-golden">
                            JOKER
                            <img src="~@/assets/images/luckyPoker/icon-crown.png" alt="letter-crown" class="letter-crown">
                        </span>
                    </div>
                </div>
                <div class="pattern-panel">
                    <div class="panels">
                        <div class="panel panel-light">
                            <img src="~@/assets/images/luckyPoker/icon-heit.png" alt="pattern-heit" class="pattern-heit">
                        </div>
                        <div class="panel">
                            <img src="~@/assets/images/luckyPoker/icon-hongt.png" alt="pattern-hongt" class="pattern-hongt">
                        </div>
                        <div class="panel panel-light">
                            <img src="~@/assets/images/luckyPoker/icon-mh.png" alt="pattern-mh" class="pattern-mh">
                        </div>
                        <div class="panel">
                            <img src="~@/assets/images/luckyPoker/icon-fk.png" alt="pattern-fk" class="pattern-fk">
                        </div>
                    </div>
                </div>
                <div class="number-panel">
                    <div class="panels panels-top">
                        <div class="row">
                            <div class="panel"><span>2</span></div>
                            <div class="panel panel-light"><span>3</span></div>
                            <div class="panel"><span>4</span></div>
                            <div class="panel panel-light"><span>5</span></div>
                            <div class="panel"><span>6</span></div>
                        </div>
                        <div class="row">
                            <div class="panel panel-light"><span>7</span></div>
                            <div class="panel"><span>8</span></div>
                            <div class="panel panel-light"><span>9</span></div>
                            <div class="panel"><span>10</span></div>
                            <div class="panel panel-light"><span>J</span></div>
                        </div>
                    </div>
                    <div class="panels-bottom">
                        <div class="cls-panel">
                            <img src="~@/assets/images/luckyPoker/icon-cls.png" alt="icon-cls">
                            <label>清除</label>
                        </div>
                        <div class="panels panels-main">
                            <div class="panel panel-light"><span>Q</span></div>
                            <div class="panel"><span>K</span></div>
                            <div class="panel panel-light"><span>A</span></div>
                        </div>
                    </div>
                </div>
                <div class="corn-panel">
                    <ul class="rows">
                        <li class="corn corn-purple">
                            <a :class="{actived: purple.actived}" @click="active('purple')">
                                <img src="~@/assets/images/luckyPoker/coin-0.0001.png" alt="coin-0.0001">
                                <span><label>0.00001</label></span>
                            </a>
                        </li>
                        <li class="corn corn-orange">
                            <a :class="{actived: orange.actived}" @click="active('orange')">
                                <img src="~@/assets/images/luckyPoker/coin-0.001.png" alt="coin-0.001">
                                <span><label>0.001</label></span>
                            </a>
                        </li>
                        <li class="corn corn-blue">
                            <a :class="{actived: blue.actived}" @click="active('blue')">
                                <img src="~@/assets/images/luckyPoker/coin-0.01.png" alt="coin-0.01">
                                <span><label>0.01</label></span>
                            </a>
                        </li>
                        <li class="corn corn-yellow">
                            <a :class="{actived: yellow.actived}" @click="active('yellow')">
                                <img src="~@/assets/images/luckyPoker/coin-0.1.png" alt="coin-0.1">
                                <span><label>0.1</label></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="button-panel">
                    <div>
                        <a href="javascript:void(0)">
                            <label class="btn-label">PAY</label>
                            <label class="value">{{this.cornValue}}&nbsp;ETH</label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    "name": 'Poker',
    "components": {
        Header
    },
    "data": function () {
        return {
            "cornValue": 0.0001,
            "purple": {
                "actived": false
            },
            "orange": {
                "actived": false
            },
            "blue": {
                "actived": false
            },
            "yellow": {
                "actived": false
            }
        }
    },
    "methods": {
        active (obj) {
            this.purple.actived = false
            this.orange.actived = false
            this.blue.actived = false
            this.yellow.actived = false
            switch (obj) {
            case 'purple':
                this.purple.actived = true
                this.cornValue = 0.00001
                break
            case 'orange':
                this.orange.actived = true
                this.cornValue = 0.001
                break
            case 'blue':
                this.blue.actived = true
                this.cornValue = 0.01
                break
            case 'yellow':
                this.yellow.actived = true
                this.cornValue = 0.1
                break
            }
        }
    }
}
</script>
<style lang="less" scoped>
.poker-page {
    background-image: url('~@/assets/images/luckyPoker/bg-pc.jpg');
    background-size: cover;
    background-position: top center;
    /deep/ .shopify-section-header {
        background-color: #000;
        opacity:0.65;
        border-bottom: none;
        a {
            color: #fff;
        }
        .el-input__inner {
            background-color: #000;
        }
        .grid_icons .search-input i, .grid_icons .el-icon-goods {
            color: #fff;
            font-weight: inherit;
        }
    }
}
.luckypoker {
    width: 550px;
    margin: 0 auto;
    border-radius:150px;
    .bg-content {
        width: 100%;
        height: 864px;
        background-image: url('~@/assets/images/luckyPoker/bg-pc-desktop.png');
        // background-size: cover;
        background-position: bottom center;
        > div {
            padding-left: 55px;
            padding-right: 53px;
            .panels {
                width:442px;
                height:83px;
                border:2px solid rgba(111,174,174,1);
                border-radius:8px;
                overflow: hidden;
                .panel {
                    background:rgba(56,99,99,1);
                    border-right: solid 2px RGBA(111, 174, 174, 1);
                    &:nth-last-child(1) {
                        border-right: none;
                    }
                }
                .panel-light {
                    background:rgba(74,130,130,1);
                }
            }
        }
        .letter-panel {
            overflow: hidden;
            padding-top: 51px;
            &::before {
                clear: both;
            }
            img {
                width: 15px;
                height: 15px;
            }
            .left {
                width:285px;
                height:83px;
                background:rgba(56,99,99,1);
                border:2px solid rgba(111,174,174,1);
                border-radius:8px;
                float: left;
                display: flex;
                align-items: center;
                > div {
                        width: 50%;
                        height: 83px;
                        line-height: 83px;
                }
                .letter-red span {
                    width:55px;
                    height:18px;
                    font-size:24px;
                    font-family:LucidaBright-Demi;
                    font-weight:600;
                    color:rgba(254,59,59,1);
                }
                .letter-black {
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                    border-right: none;
                    span {
                        width:93px;
                        height:18px;
                        font-size:24px;
                        font-family:LucidaBright-Demi;
                        font-weight:600;
                        color:rgba(0,0,0,1);
                    }
                    background:rgba(74,130,130,1);
                }
                .letter-hongt {
                    margin-right: 10px;
                }
                .letter-fk {
                    margin-left: 12px;
                }
                .letter-heit {
                    width:13px;
                    height:16px;
                    margin-right: 5px;
                }
                .letter-mh {
                    width:15px;
                    height:16px;
                }
            }
            .right {
                width:140px;
                height:83px;
                background:rgba(56,99,99,1);
                border:2px solid rgba(111,174,174,1);
                border-radius:8px;
                float: right;
                line-height: 83px;
                .letter-golden {
                    width:88px;
                    height:21px;
                    font-size:24px;
                    font-family:LucidaBright-Demi;
                    font-weight:600;
                    color:rgba(255,211,8,1);
                    position: relative;
                }
                .letter-crown {
                    width:21px;
                    height:18px;
                    position: absolute;
                    top: -9px;
                }
            }
        }
        .pattern-panel {
            padding-top: 34px;
            .panels {
                width: 100%;
                display: table;
                > div {
                    width: 25%;
                    display: table-cell;
                    vertical-align: middle;
                    img {
                        width: 34px;
                        height: 34px;
                    }
                }
            }
        }
        .number-panel {
            padding-top: 34px;
            .panels {
                height: auto;
                .row {
                    width: 100%;
                    display: table;
                }
                .panel {
                    width: 20%;
                    height: 76px;
                    display: table-cell;
                    vertical-align: middle;
                    span {
                        width:13px;
                        height:19px;
                        font-size:26px;
                        font-family:LucidaBright-Demi;
                        font-weight:600;
                        color:rgba(255,255,255,1);
                    }
                }
            }
            .panels-bottom {
                position: relative;
            }
            .cls-panel {
                width: 50px;
                height: 50px;
                background: rgba(12,109,109,1);
                border-radius: 8px;
                position: absolute;
                left: 0;
                bottom: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img {
                    width:19px;
                    height:23px;
                }
                label {
                    width:32px;
                    height:16px;
                    font-size:16px;
                    font-family:PingFang-SC-Regular;
                    font-weight:400;
                    color:rgba(130,215,215,1);
                }
            }
            .panels-main {
                width: 60%;
                margin: 0 auto;
                display: table;
                border-top: none;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                overflow: hidden;
                position: relative;
                left: 2px;
            }
        }
        .corn-panel {
            padding-top: 34px;
            .corn {
                width: 66px;
                height: 66px;
                display: inline-block;
                margin-right: 25px;
                position: relative;
                a {
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    border-radius: 50%;
                    cursor: pointer;
                    &.actived {
                        background-image: url('~@/assets/images/luckyPoker/bg-ligth.png');
                        background-size: cover;
                        background-position: center;
                    }
                }
                img {
                    width: 66px;
                    height: 66px;
                    position: relative;
                    top: 7px;
                }
                span {
                    width: 82px;
                    height: 25px;
                    background: rgba(0,0,0,1);
                    opacity: 0.8;
                    border-radius: 13px;
                    position: absolute;
                    bottom: 10px;
                    left: -2px;
                    label {
                        width:73px;
                        height:16px;
                        font-size:20px;
                        font-family:PingFang-SC-Bold;
                        font-weight:bold;
                        color:rgba(255,211,8,1);
                        cursor: pointer;
                    }
                }
            }
        }
        .button-panel {
            padding-top: 21px;
            > div {
                display: inline-block;
                height: 78px;
                background-image: url('~@/assets/images/luckyPoker/btn-bg.jpg');
                background-size: cover;
                background-position: center;
                border-radius: 8px;
            }
            a {
                display: inline-block;
                width:210px;
                height:70px;
                border-radius: 8px;
                background-image: url('~@/assets/images/luckyPoker/btn-main.png');
                background-size: cover;
                background-position: center;
                position: relative;
                .btn-label {
                    width: 53px;
                    height: 20px;
                    font-size: 27px;
                    font-family: PingFang-SC-Bold;
                    font-weight: bold;
                    color: rgba(254,254,254,1);
                    display: block;
                    margin: 0 auto;
                    position: absolute;
                    top: 8px;
                    left: 50%;
                    transform: translate(-50%);
                    -webkit-text-stroke: 2px RGBA(32, 66, 65, 0.64);
                    text-stroke:2px RGBA(32, 66, 65, 0.64);
                    cursor: pointer;
                }
                .value {
                    width: 111px;
                    height: 15px;
                    font-size: 18px;
                    font-family: PingFang-SC-Bold;
                    font-weight: bold;
                    color: rgba(254,254,254,1);
                    display: block;
                    position: absolute;
                    bottom: 18px;
                    margin: 0 auto;
                    left: 50%;
                    transform: translate(-50%);
                    cursor: pointer;
                }
            }
        }
    }
    .bg-border {
        width: 100%;
        height: 178px;
        background-image: url('~@/assets/images/luckyPoker/bg-border.png');
        background-size: cover;
        background-position: center;
    }
}
</style>
