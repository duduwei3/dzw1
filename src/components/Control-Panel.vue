<template>
    <el-container class="control-panel-container">
        <el-aside width="174px">
            <header>TMS管理系统</header>
            <h1>控制面板</h1>
            <ul>
                <li class="active"><a href="javascript:;">首页</a></li>
                <li><a href="javascript:;">我的价格</a></li>
                <li><a href="javascript:;">我的账单</a></li>
            </ul>
        </el-aside>

        <!-- 头部区域 -->
        <el-container>
            <el-header height="80px">
                <a href="javascript:;">
                    <img src="../assets/shouqi.jpg">
                </a>
                <!-- 头部导航 -->
                <div class="header-navi">
                    <div class="lang"><a href="javascript:;">EN</a></div>

                    <div class="user">
                        <a href="javascript:;">
                            <div class="user-icon"></div>
                            <p class="user-name">ERP</p>
                        </a>
                    </div>

                    <el-menu mode="horizontal" active-text-color="#50C790" router default-active="/home">  
                        <el-menu-item index="/home"><i class="el-icon-s-operation"></i><p>控制面板</p></el-menu-item>
                        <el-menu-item index="/add"><i class="el-icon-s-order"></i><p>订单管理</p></el-menu-item>
                        <el-menu-item index="/manager"><i class="el-icon-menu"></i><p>配置管理</p></el-menu-item>
                    </el-menu>
                </div>  
            </el-header>

            <!-- 内容区域 -->
            <el-main>
                <router-view></router-view>
            </el-main>

            <el-footer height="80px">
                <p>Copyright © 2018 EU Techne B.V.（ver2.5.0）</p>
                <p class="tech-sup">技术支持</p>
                <img src="../assets/logo.jpg">
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .control-panel-container{
        height: 100%;
    }
    .el-header{
        
        background:rgba(255,255,255,1);
        padding: 0;
        border-bottom: 1px solid #E8E9EB;

        img{
           
            margin: 28px 27px 0 25px;
        }
        .header-navi{
            float: right;

            a{
                    text-decoration: none;
                    height: 79px;
                    display: flex;
                    font-size: 14px;
                    flex-direction: column;
                    align-items:center;
                    justify-content:center;
                    color: #585858;
                }

            .el-menu{
                float: right;
                .el-menu-item{      
                    
                    width: 120px;      
                    line-height: 0;
                    height: 79px;
                    display: flex;
                    font-size: 14px;
                    flex-direction: column;
                    align-items:center;
                    justify-content:center;
                    color: #585858;
                    
                    i{
                        margin-bottom: 6px;
                    }
                }

                
            }
            .el-menu.el-menu--horizontal{
                height: 79px;
                border-bottom: 0;
            }
            .user{
                float: right;
                width: 163px;
                height: 79px;
                border-left: 1px solid #E8E9EB;
                border-right: 1px solid #E8E9EB;

                p{
                    margin: 0;
                }

                .user-icon{
                    height: 42px;
                    width: 42px;
                    border: 1px solid #AED3C2FF;
                    border-radius: 50%;
                }
            }
            .lang{
                float: right;
                width: 62px;
                font-weight: bold;
            }
        }
    }

    .el-aside{
        
        background:rgba(84,84,84,1);
        text-align: center;

        header{
            font-size: 18px;
            font-weight: 550;
            color: #27D093FF;
            margin: 20px;
        }
        h1{
            font-size: 12px;
            margin: 0 0 5px 0 ;
            color: #fff;
        }

        ul{
            padding: 0;

            .active{
                color: #27D093;
                background-color: #4d4d4d;
            }
        }
        li{
            list-style-type: none;
            margin: 10px;
            a{
                text-decoration: none;
                color: #fff;
                font-size: 6px;
            }
        }
    }
    .el-main{
        background-color: #f7f7f7;
        padding-top: 0;
        padding-left: 0;
        padding-right: 0;
        
    }
    .el-footer{
        height:80px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(236, 237, 240, 1);

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;

        .tech-sup{
            margin:0 10px
        }
    }
</style>