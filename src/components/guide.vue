<template>
    <div class="guide">
        <div class="guide-box">
            <!-- logo -->
            <svg class="icon icon-logo" aria-hidden="true">
                <use xlink:href="#icon-logo"></use>
            </svg>
            <!-- 订阅内容 -->
            <div class="guide-slogan">
                <span>House730.com</span>
                <span>在"House730"中打開 </span>
            </div>
            <!-- 订阅按钮 -->
            <a class="guide-open" href="house730://house730.com?type=0">打开</a>
        </div>
    </div>
</template>
<script>
import '../../common/css/common.scss'
export default {
    
}
</script>
<style lang="scss" scoped>
.guide{
    width: 100%;
    border-bottom: 1px solid #ececec;
    .guide-box{
        display: flex;
        position: relative;
        padding: 8px 10px 8px 15px;
        align-items: center;
        .icon-logo{
            font-size: 42px;
        }
        .guide-slogan{
            display: flex;
            flex-direction: column;
            text-align: left;
            color: gray;
            font-size: 14px;
            
        }
        .guide-open{
            text-decoration: none;
            color: #4482ff;
            font-size: 17px;
            font-weight: 600;
            position: absolute;
            top: 15px;
            right: 15px;
        }
    }
}
</style>