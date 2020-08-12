<template>
    <div class="NavBar nav-bars">
        <header>
            <van-nav-bar :title="title" :left-arrow="showBack" @click-left="clickLeft">
                <template #right v-if="showType==='text'">
                    <svg class="icon" aria-hidden="true"  @click="openMenu">
                        <use xlink:href="#icon-caidan"/>
                    </svg>
                </template>
            </van-nav-bar>
        </header>
        <van-popup v-model="showPop" position="right" :overlay=false>
            <header class="header">
                <van-nav-bar left-arrow @click-left="showPop=false" @click-right="showPop=false" class="tool-top">
                    <template #title>
                        <svg v-if="showLogo"  class="icon icon-logo" aria-hidden="true" @click="link">
                            <use xlink:href="#icon-logo"/>
                        </svg>
                    </template>
                    <template #right>
                        <span  class="span">
                            <svg  class="icon" aria-hidden="true">
                                <use xlink:href="#icon-caidan"/>
                            </svg>
                        </span>
                    </template>
                </van-nav-bar>
            </header>
            <section>
                <div class="section">
                    <h3>买楼</h3>
                    <ul>
                        <li v-for="item in buyHouse" :key="item.id">
                            <a :href="item.href">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="item.svg"/>
                                </svg>
                                <p>{{item.text}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="section">
                    <h3>租楼</h3>
                    <ul>
                        <li v-for="item in rentHouse" :key="item.id">
                            <a :href="item.href">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="item.svg"/>
                                </svg>
                                <p>{{item.text}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="section">
                    <h3>我是业主</h3>
                    <ul>
                        <li v-for="item in landLord" :key="item.id">
                            <a :href="item.href">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="item.svg"/>
                                </svg>
                                <p>{{item.text}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="tools">
                    <h3>常用工具</h3>
                    <div class="div-tools">
                        <ul class="tools-ul">
                            <li v-for="item in tools" :key="item.id" class="lastTools">
                                <a :href="item.href">
                                    <div class="text">
                                        <p>{{item.text}}</p>
                                    </div>
                                    <div class="svg">
                                        <svg class="icon" aria-hidden="true">
                                            <use :xlink:href="item.svg"/>
                                        </svg>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
        </van-popup>
    </div>
</template>
<script>
import {NavBar,Popup} from 'vant'
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        showType:{
            type:String,
            default:'icons'
        },
        showLogo:{
            type:Boolean,
            default:true
        },
        showBack:{
            type:Boolean,
            default:true
        }
    },
    components:{
        [NavBar.name]:NavBar,
        [Popup.name]:Popup
    },
    data(){
        return{
            showPop:false,
            buyHouse:[],
            rentHouse:[],
            landLord:[],
            tools:[],
            host:''
        }
    },
    methods:{
        link(){
            location.href=location.origin+'/'
        },
        hideBack(){
            if(this.$route.query.fromapp||sessionStorage.getItem('fromapp')){
                sessionStorage.setItem('fromapp','1')
                this.showBack=false
            }
        },
        clickLeft(){
            if(this.$route.fullPath.indexOf('/login')>-1){
                history.go(-1)
            }else if(this.$route.query.url){
                location.href=location.origin+this.$route.query.url
            }else{
                this.$router.push('/')
            }
        },
        openMenu(){
            this.showPop=true
        }
    },
    created(){
        this.host=location.origin
        this.buyHouse=[
            {
                id:'b1',
                text:'搵楼',
                svg:'#icon-zhuzhai',
                href:`${this.host}/buy/`
            },
            {
                id:'b2',
                text:'地图搵楼',
                svg:'#icon-mapSearch',
                href:`${this.host}/map/?type=sale`
            },
            {
                id:'b3',
                text:'一手新盘',
                svg:'#icon-soldPrices',
                href:`${this.host}/new-properties/hk1/`
            },
            {
                id:'b4',
                text:'VR睇樓',
                svg:'#icon-VR-shouye',
                href:`${this.host}/buy/v1/`
            }
        ]
        this.rentHouse=[
            {
                id:'r1',
                text:'搵租楼',
                svg:'#icon-zhuzhai',
                href:`${this.host}/buy/`
            },
            {
                id:'r2',
                text:'地图搵楼',
                svg:'#icon-mapSearch',
                href:`${this.host}/map/?type=rent`
            },
            {
                id:'r4',
                text:'VR睇樓',
                svg:'#icon-VR-shouye',
                href:`${this.host}/rent/v1/`
            }
        ]
        this.landLord=[
            {
                id:'d1',
                text:'刊登放盘',
                svg:'#icon-postProperty',
                href:`${this.host}/my/post/step1`
            },
            {
                id:'d2',
                text:'刊登费用',
                svg:'#icon-listingFees',
                href:`${this.host}/my/estatePrice`
            },
            {
                id:'d3',
                text:'会员中心',
                svg:'#icon-memberCentre',
                href:`${this.host}/my/`
            },
            {
                id:'d4',
                text:'管理楼盘',
                svg:'#icon-myListings',
                href:`${this.host}/my/my-properties/`
            }
        ]
        this.tools=[
            {
                id:'t1',
                text:'成交记录',
                svg:'#icon-chengjiaojilu',
                href:`${this.host}/data/`
            },
            {
                id:'t2',
                text:'地产新闻',
                svg:'#icon-news',
                href:`${this.host}/news/`
            },
            {
                id:'t3',
                text:'按揭计算',
                svg:'#icon-mortgageCalTool',
                href:`://tools.house730.com/tax/`
            },
            {
                id:'t4',
                text:'联络我们',
                svg:'#icon-contactUs',
                href:`${this.host}/contact-us/`
            },
            {
                id:'t5',
                text:'House730 facebook',
                svg:'#icon-facebook',
                href:`//www.facebook.com/House730-464562354371140/`
            },
        ]
    },
    mounted(){
        this.hideBack()
    }
}
</script>
<style lang="scss" scoped>
@import url('../../common/css/base.css');
.NavBar{
    /deep/.van-nav-bar{
        position: relative;
        font-size: 24px;
        border-bottom: 1px solid #ececec;
        .van-icon-arrow-left{
            color: #423f3f;
            font-size: 22px;
        }
        .van-nav-bar__title .icon{
            font-size: 42px;
        }
        .van-nav-bar__right .icon{
            font-size: 18px;
            margin-left: 12px;
        }

    }
    .van-popup--right{
        width: 100%;
        height: 100%;
    }
    // 弹出层样式
    section{
        padding: 20px;
        text-align: left;
        box-sizing: border-box;
        h3{
            font-size: 15px;
            width: 32%;
            text-align: center;
            margin-bottom: 10px;
        }
        .section{
            ul{
                border-top: 1px solid #eee;
                display: flex;
                flex-wrap: wrap;
                text-align: center;
                margin-bottom: 30px;
                li{
                    width: 25%;
                    margin-top: 20px;
                    a{
                        display: inline-block;
                        width: 100%;
                    }
                    .icon{
                        font-size: 30px;
                    }
                    p{
                        font-size: 12px;
                        color: #333;
                        text-align: center;
                        margin-top: 10px;
                    }
                }
            }
        }
    }
    .tools{
        box-sizing: border-box;
        text-align: left;
        .div-tools{
            width: 100%;
            overflow-x: auto;
            ul{
                padding: 20px;
                border-top: 1px solid #eee;
                width: 800px;
                li{
                    overflow: hidden;
                    margin-top: 20px;
                    height: 54px;
                    line-height: 54px;
                    display: flex;
                    .text{
                        color: #333;
                        float: left;
                        font-size: 14px;
                        padding-right: 6px;
                    }
                    .svg{
                        float: left;
                        line-height: 64px;
                        .icon{
                            font-size: 30px;
                        }
                    }
                }
                .lastTools{
                    display: inline-block;
                    padding: 5px;
                    background: #f5f8fc;
                    margin-right: 8px;
                }
            }
        }
    }
}
</style>