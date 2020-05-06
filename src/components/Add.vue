<template>
    <div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>控制面板</el-breadcrumb-item>
              <el-breadcrumb-item>订单添加</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    
        
        <el-menu mode="horizontal" active-text-color="#50C790" router default-active="/send" @select="select">  
            <el-menu-item class="switch" index="/send">派件</el-menu-item>
            <el-menu-item class="switch" index="/pickup">取件</el-menu-item>   
        </el-menu> 
        
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    mounted(){
        document.querySelectorAll('.switch').forEach(v =>{
            if(v.innerHTML == "取件") v.style.backgroundColor = "#cccccc"
        })
    },
    methods:{
        select(indexPath){
            let arr = document.querySelectorAll('.switch')
            arr.forEach(v => {
                v.style.backgroundColor = "#ffffff"
                if(indexPath == '/send') {
                    if (v.innerHTML == "取件") v.style.backgroundColor = "#cccccc"
                }
                if(indexPath == '/pickup'){
                    if (v.innerHTML == "派件") v.style.backgroundColor = "#cccccc"
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .breadcrumb{
        padding: 12px 25px;
        background-color: #fff;
        border-bottom: 1px solid #E8E9EBFF;
    }
    .el-menu{
        height: 40px;
        margin: 20px;
        display: flex;
        .el-menu-item{
            flex: 1;
            text-align: center;
            line-height: 40px;
            height: 100%;
        }
    }
</style>