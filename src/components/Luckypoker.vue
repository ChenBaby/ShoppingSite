<template>
    <div class="poker-page">
        <Header></Header>
        <div class="luckypoker">
            <!-- <div class="bg-border"></div> -->
            <div class="bg-content">
                <div class="area-betting">
                    <div class="letter-panel">
                        <div class="left panels">
                            <div class="letter-red panel">
                                <i><img src="~@/assets/images/luckyPoker/icon-hongt.png" alt="letter-hongt" class="letter-hongt"></i>
                                <P>RED</P>
                                <i><img src="~@/assets/images/luckyPoker/icon-fk.png" alt="letter-fk" class="letter-fk"></i>
                            </div>
                            <div class="letter-black panel panel-light">
                                <i><img src="~@/assets/images/luckyPoker/icon-heit.png" alt="letter-heit" class="letter-heit"></i>
                                <P>BLACK</P>
                                <i><img src="~@/assets/images/luckyPoker/icon-mh.png" alt="letter-mh" class="letter-mh"></i>
                            </div>
                        </div>
                        <div class="right">
                            <P class="letter-golden">
                                JOKER
                            </P>
                            <img src="~@/assets/images/luckyPoker/icon-crown.png" alt="letter-crown" class="letter-crown">
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
                                <a href="javascript:void(0)">Delete</a>
                            </div>
                            <div class="panels panels-main">
                                <div class="panel panel-light"><span>Q</span></div>
                                <div class="panel"><span>K</span></div>
                                <div class="panel panel-light"><span>A</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="area-btn clearfix">
                    <div class="corn-panel">
                        <ul class="rows">
                            <li class="corn corn-purple" :class="{actived: purple.actived}" @click="active('purple')">
                                <img src="~@/assets/images/luckyPoker/coin-0.0001.png" alt="coin-0.0001">
                                <p>0.00001</p>
                            </li>
                            <li class="corn corn-orange" :class="{actived: orange.actived}" @click="active('orange')">
                                <img src="~@/assets/images/luckyPoker/coin-0.001.png" alt="coin-0.001">
                                <p>0.001</p>
                            </li>
                            <li class="corn corn-blue" :class="{actived: blue.actived}" @click="active('blue')">
                                <img src="~@/assets/images/luckyPoker/coin-0.01.png" alt="coin-0.01">
                                <p>0.01</p>
                            </li>
                            <li class="corn corn-yellow" :class="{actived: yellow.actived}" @click="active('yellow')">
                                <img src="~@/assets/images/luckyPoker/coin-0.1.png" alt="coin-0.1">
                                <p>0.1</p>
                            </li>
                        </ul>
                    </div>
                    <div class="button-panel">
                        <p class="btn-label">PAY</p>
                        <span class="value">{{this.cornValue}}&nbsp;ETH</span>
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
                "actived": true
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
    width: 100%;
    margin: 0 auto;
    * {
        box-sizing: border-box;
    }
    .bg-content {
        box-sizing: border-box;
        .area-betting {
            z-index: 2;
            position: relative;
        }
        .panels {
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
        .letter-panel {
            overflow: hidden;
            &::before {
                clear: both;
            }
            .panel {
                position: relative;
                display: flex;
                justify-content: center;
                align-content: center;
                i {
                    display: block;
                    position: relative;
                    width: 8.29493088%;
                    img {
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
            .left {
                height: 83px;
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
                .letter-red {
                    font-size:24px;
                    font-family:LucidaBright-Demi;
                    font-weight:600;
                    color:rgba(254,59,59,1);
                    P {
                        margin: 0 7.5px;
                    }
                }
                .letter-black {
                    font-size:24px;
                    font-family:LucidaBright-Demi;
                    font-weight:600;
                    color:rgba(0,0,0,1);
                    background:rgba(74,130,130,1);
                    P {
                        margin: 0 7.5px;
                    }
                }
            }
            .right {
                background:rgba(56,99,99,1);
                border:2px solid rgba(111,174,174,1);
                border-radius:8px;
                float: right;
                height: 83px;
                line-height: 83px;
                position: relative;
                .letter-golden {
                    font-size:24px;
                    font-family:LucidaBright-Demi;
                    font-weight:600;
                    color:rgba(255,211,8,1);
                }
                .letter-crown {
                    display: block;
                    position: absolute;
                    right: 9.00900901%;
                    top: 21.42857143%;
                    width: 13.51351351%;
                    max-width: 36px;
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
                background: rgba(12,109,109,1);
                border-radius: 8px;
                position: absolute;
                left: 0;
                bottom: 0;
                a {
                    display: block;
                    height: 100%;
                    color: #99cccc;
                }
                a::before {
                    content: "";
                    display: block;
                    background: url('~@/assets/images/luckyPoker/icon-cls.png') no-repeat center;
                    margin: 4px auto 0;
                    width: 19px;
                    height: 23px;
                    padding-top: 0;
                    background-size: 100%;
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
            }
        }
        .area-btn {
            position: relative;
            margin: 22.5px auto 0;
            z-index: 2;
        }
        .corn-panel {
            ul {
                display: flex;
            }
            .corn {
                position: relative;
                img {
                    display: block;
                    width: 80%;
                    margin: 0 auto;
                    -webkit-transition: all 0.2s;
                    transition: all 0.2s;
                    border-radius: 50%;
                    -webkit-transform: scale(1);
                    transform: scale(1);
                }
                p {
                    position: absolute;
                    left: 50%;
                    -webkit-transform: translate(-50%);
                    transform: translate(-50%);
                    background: rgba(0, 0, 0, 0.8);
                    padding: 0 5px;
                    overflow: hidden;
                    color: #fff;
                    font-weight: bold;
                }
                &.actived {
                    p {
                        color: #ffcc00;
                    }
                    img {
                        -webkit-transform: scale(1.3) !important;
                        transform: scale(1.3) !important;
                        -webkit-box-shadow: none;
                        box-shadow: none;
                    }
                }
                &::before {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    padding-top: 100%;
                    left: 50%;
                    top: 50%;
                    -webkit-transform: translate(-50%, -50%) scale(0.8);
                    transform: translate(-50%, -50%) scale(0.8);
                    border-radius: 50%;
                    -webkit-box-shadow: 0 0 30px transparent;
                    box-shadow: 0 0 30px transparent;
                    -webkit-transition: all 0.2s;
                    transition: all 0.2s;
                }
            }
        }
        .button-panel {
            position: relative;
            background: url('~@/assets/images/luckyPoker/btn-main.png') no-repeat center;
            background-size: cover;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
            color: #fff;
            .btn-label {
                font-size: 27px;
                font-family: PingFang-SC-Bold;
                font-weight: bold;
                color: rgba(254,254,254,1);
                display: block;
                -webkit-text-stroke: 2px RGBA(32, 66, 65, 0.64);
                text-stroke:2px RGBA(32, 66, 65, 0.64);
                cursor: pointer;
            }
            .value {
                font-size: 18px;
                font-family: PingFang-SC-Bold;
                font-weight: bold;
                color: rgba(254,254,254,1);
                display: block;
                cursor: pointer;
            }
        }
    }
}
@media (min-width: 1106px) {
    .luckypoker {
        width: 612px;
        margin: 0 auto;
        .bg-content {
            width: 100%;
            height: 864px;
            background: url('~@/assets/images/luckyPoker/bg-pc-desktop.png') no-repeat center top;
            background-size: 612px;
            padding: 51px 85px 0;
            box-sizing: border-box;
            .letter-panel {
                .left {
                    width:285px;
                }
                .right {
                    width:140px;
                }
            }
            .corn-panel {
                ul {
                    justify-content: center;
                    li.corn {
                        width: 58px;
                        margin: 0 14px;
                        &.actived {
                            &::before {
                                -webkit-transform: translate(-50%, -50%) scale(1);
                                transform: translate(-50%, -50%) scale(1);
                                -webkit-box-shadow: 0 0 30px #00ffea;
                                box-shadow: 0 0 30px #00ffea;
                            }
                        }
                        p {
                            bottom: 0;
                            min-width: 65px;
                            height: 24px;
                            border-radius: 12px;
                            line-height: 24px;
                            font-size: 18px;
                        }
                    }
                }
            }
            .button-panel {
                width: 210px;
                height: 63px;
                margin: 28px auto 0;
                border-radius: 8px;
                -webkit-box-shadow: 0 7px 0 #2b7876;
                box-shadow: 0 7px 0 #2b7876;
            }
        }
    }
}
@media (max-width: 1106px) {
    .luckypoker {
        background: url('~@/assets/images/luckyPoker/bg.jpg') repeat-y center bottom;
        background-size: cover;
        .bg-content {
            width: 100%;
            background: url('~@/assets/images/luckyPoker/bg-ligth.png') no-repeat center;
            background-size: cover;
            padding: 30px 15px 30px;
            box-sizing: border-box;
            position: relative;
            &:after {
                content: "";
                display: block;
                position: absolute;
                z-index: 1;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 200px;
                background: url('~@/assets/images/luckyPoker/bg-border.png') no-repeat center bottom;
                background-size: 100%;
            }
            .panels {
                border:1px solid rgba(111,174,174,1);
                .panel {
                    border-right: solid 1px RGBA(111, 174, 174, 1);
                    &:nth-last-child(1) {
                        border-right: none;
                    }
                }
            }
            .letter-panel {
                .left {
                    width: 65.2173913%;
                    height: 70px;
                    border:1px solid rgba(111,174,174,1);
                    border-radius: 6px;
                    > div {
                        height: 70px;
                        line-height: 70px;
                    }
                    .letter-red, .letter-black {
                        font-size: 19px;
                    }
                }
                .right {
                    width: 32.17391304%;
                    height: 70px;
                    line-height: 70px;
                    border:1px solid rgba(111,174,174,1);
                    border-radius: 6px;
                    .letter-golden {
                        font-size: 19px;
                    }
                }
            }
            .pattern-panel .panels{
                height: 70px;
            }
            .number-panel {
                .panels .panel {
                    height: 61.5px;
                    line-height: 61.5px;
                    font-size: 23px;
                }
                .cls-panel {
                    width: 45px;
                    border-radius: 6px;
                    font-size: 12px;
                }
            }
            .area-btn {
                margin: 22.5px -15px 0;
            }
            .corn-panel {
                float: left;
                width: 71.01449275%;
                display: flex;
                justify-content: space-between;
                padding: 0 10px;
                ul {
                    justify-content: space-between;
                    width: 100%;
                }
                .corn {
                    width: 20.67594433%;
                    &.actived {
                        &::before {
                            -webkit-transform: translate(-50%, -50%) scale(1);
                            transform: translate(-50%, -50%) scale(1);
                            -webkit-box-shadow: 0 0 10px #00ffea;
                            box-shadow: 0 0 10px #00ffea;
                        }
                    }
                }
                p {
                    bottom: 0;
                    min-width: 105.76923077%;
                    height: 19px;
                    border-radius: 9.5px;
                    line-height: 19px;
                    font-size: 12px;
                }
            }
            .button-panel {
                position: absolute;
                top: 0;
                right: 5px;
                width: 27.10144928%;
                height: 100%;
                border-radius: 6px;
                -webkit-box-shadow: 0 4px 0 #2b7876;
                box-shadow: 0 4px 0 #2b7876;
                .btn-label {
                    line-height: 22px;
                    font-size: 14px;
                    text-shadow: 0 1px #2b7b75, 1px 0 #2b7b75, -1px 0 #2b7b75, 0 -1px #2b7b75;
                }
                .value {
                    line-height: 15px;
                    font-size: 12px;
                }
            }
        }
    }
}

</style>
