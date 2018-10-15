<template>
    <div class="home-page">
        <Header></Header>
        <div class="page-container">
            <swiper :options="swiperOption" class="swiper-section">
                <swiper-slide v-for="(data, index) in swiperDatas" :key="index" :style="{backgroundImage:'url(' + data.imgurl + ')'}">
                    <div class="swiper-overlay">
                        <div class="swiper-text">
                            <p class="swiper-title">{{data.title}}</p>
                            <p class="swiper-subtitle">{{data.subtitle}}</p>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <section class="shopify-section">
                <div class="section-header">
                    <h1 class="section-title">电子产品</h1>
                </div>
                <div class="collection-grid">
                    <el-row>
                        <el-col :span="8" v-for="(item, index) in collectionDatas" :key="index">
                            <div class="grid-content">
                                <div class="image-block">
                                    <a href="javascript:void(0)" @click="clickone();clicktwo()">
                                        <img :src="item.imgurl" :alt="'goods' + (index + 1)">
                                    </a>
                                </div>
                                <div class="image-wrapper">
                                    <a href="javascript:void(0)" @click="clickone();clicktwo()"><h3 class="wrapper-title">{{item.title}}</h3></a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </section>
            <section class="text-section">
                <div>
                    <h1 class="section-title">我们是谁</h1>
                    <p>原创的中东男装品牌，专为中东男士打造。</p>
                    <p>我们秉承严格，严格，最严格的方向走向世界，通过从一开始就控制商品的生产，寻求帮助消费者选择高品质的产品。</p>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    "name": 'Home',
    "components": {
        Header,
        Footer,
        swiper,
        swiperSlide
    },
    "methods": {
        "clickone": function () {
            console.log('one')
        },
        "clicktwo": function () {
            console.log('teo')
        }
    },
    data () {
        return {
            "swiperOption": {
                "autoplay": {
                    "delay": 5000,
                    "disableOnInteraction": false
                },
                "speed": 800,
                "parallax": true,
                "pagination": {
                    "el": '.swiper-pagination',
                    "clickable": true // 可点击下面的圆点切换
                }
            },
            "swiperDatas": [
                {
                    "imgurl": require('../assets/images/swiper1.jpg'),
                    "title": 'Chen\'s Shopingsite',
                    "subtitle": '您的最佳选择'
                },
                {
                    "imgurl": require('../assets/images/swiper2.jpg'),
                    "title": '正品外购',
                    "subtitle": '全球商品值得信赖'
                },
                {
                    "imgurl": require('../assets/images/swiper3.jpg'),
                    "title": '2018年世界杯俄罗斯的大折扣',
                    "subtitle": '目前折扣超过50％'
                }
            ],
            "collectionDatas": [
                {
                    "imgurl": require('../assets/images/goods1.jpg'),
                    "title": '男士手表'
                },
                {
                    "imgurl": require('../assets/images/goods1.jpg'),
                    "title": '男士手表'
                },
                {
                    "imgurl": require('../assets/images/goods1.jpg'),
                    "title": '男士手表'
                },
                {
                    "imgurl": require('../assets/images/goods1.jpg'),
                    "title": '男士手表'
                },
                {
                    "imgurl": require('../assets/images/goods1.jpg'),
                    "title": '男士手表'
                },
                {
                    "imgurl": require('../assets/images/goods1.jpg'),
                    "title": '男士手表'
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素, 不会渗透到子组件中-->

<!--

第一种方法：npm install stylus && npm install stylus-loader 使用 >>> 实现样式穿透
<style lang="stylus" scoped>
.swiper-section >>> .swiper-pagination-bullet {
    background: red;
    opacity: 1;
}
...
</style>

-->
<style lang="less" scoped>
.page-container {
    .swiper-section {
        height: 475px;
        // 第二种方法：使用/deep/ 样式穿透可实现组件内设置样式失效问题（此时style设置了scoped）
        /deep/ .swiper-pagination-bullet {
            background: #fff;
            opacity: 1;
            width: 12px;
            height: 12px;
        }
        /deep/ .swiper-pagination-bullet-active {
            opacity: 1;
            background: #007aff;
        }
        // 第三种方法：去掉scoped
        .swiper-slide {
            text-align: center;
            font-size: 38px;
            font-weight: 700;
            background-color: #eee;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background-size: cover;
            background-position: center top;
            &.swiper-slide-active {
                .swiper-text {
                    -ms-transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    opacity: 1;
                }
            }
            .swiper-text {
                text-align: center;
                position: absolute;
                width: 100%;
                top: 50%;
                -ms-transform: translateY(-40%);
                -webkit-transform: translateY(-40%);
                transform: translateY(-40%);
                opacity: 0;
                transition: all 0.6s cubic-bezier(0.44, 0.13, 0.48, 0.87);
                transition-delay: 0.3s;
                z-index: 3;
            }
            .swiper-overlay {
                position: relative;
                width: 100%;
                height: 100%;
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: #3d4246;
                    opacity: 0.3;
                    z-index: 3;
                }
            }
        }
        .swiper-title {
            font-size: 24px;
            font-weight: 600;
            color: #fff;
        }
        .swiper-subtitle {
            font-size: 16px;
            font-weight: 600;
            color: #fff;
        }
    }
    section {
        margin: 110px auto;
        .section-title {
            margin-bottom: 30px;
        }
    }
    .collection-grid {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        .el-row {
            padding: 0 55px;
            margin-left: -30px;
            .el-col {
                padding-left: 30px;
                margin-bottom: 30px;
            }
        }
        a {
            display: block;
            height: 100%;
        }
        .grid-content {
            position: relative;
            .image-wrapper {
                &:hover {
                    &::before {
                        background-color: #ccc;
                        opacity: 0.45;
                    }
                }
                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background-color: #3d4246;
                    opacity: 0.3;
                }
                a {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
               .wrapper-title {
                    color: #fff;
                    position: absolute;
                    text-align: center;
                    width: 100%;
                    top: 50%;
                    -ms-transform: translateY(-50%);
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    transition: 0.1s cubic-bezier(0.44, 0.13, 0.48, 0.87);
                    text-shadow: 0 0 15px rgba(0,0,0,0.1);
                }
            }
        }
        .image-block {
            a {
                position: relative;
                &::before {
                    content: "";
                    display: block;
                    padding-top: 100%;
                }
            }
        }
        img {
            position:  absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

    }
}
</style>
