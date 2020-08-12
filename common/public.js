const axios=require('axios')
const _conf=require('./js/_conf')
const config=_conf.env_type===2
   ?{
        //测试环境环境配置
        baseUrl: '//uatapi.house730.com.cn/', //香港服务器接口地址
        pcUrl: '//uat.house730.com.cn/', //pc端官网
        wapUrl: '//uatm.house730.com.cn/', //wap端官网地址
        pcPassport: '//uatpush.house730.com.cn/', //pc端个人中心地址
        wapPassport: '//uatm.house730.com.cn/my/', //wap端个人中心地址
        googleVerify: '//www.recaptcha.net/recaptcha/api.js', //谷歌验证码SDK
        paypalSdk: 'https://www.paypal.com/sdk/js?client-id=AcHCQSYeG6565Zw9lpfKIxH8a_QRAhwjHiqa2XtNASinpDJG-WZFqI_q-tetN1xCvDiMvhPDQBDv-qKR&currency=HKD', //paypal支付SDK
        static: '//uatstatic.house730.com.cn/m/'
   }
   :{
        baseUrl: '//api.house730.com/', //香港服务器接口地址
        pcUrl: '//www.house730.com/', //pc端官网
        wapUrl: '//m.house730.com/', //wap端官网地址
        pcPassport: '//push.house730.com/', //pc端个人中心地址
        wapPassport: '//m.house730.com/my/', //wap端个人中心地址
        googleVerify: '//www.recaptcha.net/recaptcha/api.js', //谷歌验证码SDK
        paypalSdk: 'https://www.paypal.com/sdk/js?client-id=AUGVraiRde38KWLBaGvKHlOnNAoMbvmlPp7bn5AXPyM5855hot4qat-MAXiAKWCDM4AlthzuraLSBvTl&currency=HKD', //paypal支付SDK
        static: '//static.house730.com/m/'
   }

export default{
     config
}