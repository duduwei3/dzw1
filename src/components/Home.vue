<template>
    <div>
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>控制面板</el-breadcrumb-item>
              <el-breadcrumb-item>首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-card>
            <div class="date">
                <el-button size="mini">当日</el-button>
                <el-button size="mini">本周</el-button>
                <el-button size="mini">上周</el-button>
                <el-button size="mini">本月</el-button>
                <el-button size="mini">上月</el-button>
                <el-button size="mini">历史</el-button>
                <el-date-picker
                  size="mini"
                  type="daterange"
                  unlink-panels
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
            </div>

            <el-card>
                <h1>订单取派情况</h1>
                <div class="item">
                    <p>取派订单总数</p>
                    <p>派件订单</p>
                    <p>取件订单</p>
                </div>
                <div class="value">
                    <p>100</p>
                    <p>100</p>
                    <p>100</p>
                </div>
            </el-card>

            <el-card>
                <h1>派送情况</h1>
                <div class="flex-box">
                        <div class="left">
                            <div class="item">
                                <p>未派送</p>
                                <p>派件中</p>
                                <p>取派成功订单</p>
                            </div>
                            <div class="value">
                                <p>100</p>
                                <p>100</p>
                                <p>100</p>
                            </div>
                        </div>
                        <div class="right">
                            <div class="item">
                                <p>取消取派订单</p>
                                <p>派送异常</p>
                                
                            </div>
                            <div class="value">
                                <p>100</p>
                                <p>100</p>
                                
                            </div>
                        </div>
                </div>    
            </el-card>

            <div id="main" style="width: 1600px;height: 400px;"></div>
        </el-card>
    </div>

</template>

<script>
import echarts from "echarts"

export default {
    mounted(){
        var myChart = echarts.init(document.getElementById('main'))

        var option = {
            title:{
                text: '近期总单量'
            },
            xAxis:{
                type:'category',
                data:['10-01 周日','10-02 周一', '10-03 周二', '10-04 周三', '10-05 周四', '10-06周五', '10-07 周六']
            },
            yAxis:{
                type: 'value'
            },
            label:{},
            tooltip:{
                trigger: 'axis'
            },
            series:[{
              data: [16, 36, 29, 44, 25, 45, 15, 35, 24, 57, 33, 50, 29],
              type: 'line'
            }]
        }

        myChart.setOption(option)
    }
}
</script>

<style lang="less" scoped>
    .breadcrumb{
        padding: 12px 25px;
        background-color: #fff;
        border-bottom: 1px solid #E8E9EBFF;
    }
    .el-date-editor{
        margin:0 10px;
    }
    .date{
        padding: 15px;
        border-bottom: 1px solid #E8E9EB;
    }

    .el-card{
        .el-card{
            width: 430px;
            height: 165px;
            margin-top: 35px;
            display: inline-block;
            box-shadow: none;

            h1{
                margin: 0;
                font-size: 20px;
                font-weight: 400;
                color: #27D093;
            }
            p{
                margin:12px
            }
            .item{
                font-size: 14px;
                display: inline-block;
                p{
                    margin-left: 0;
                }
            }
            .value{
                font-size: 14px;
                display: inline-block;
                font-weight: bold;
            }

            .flex-box{
                display: flex;
                .right,
                .left{
                    flex: 1;
                }
            }
        }
    }
</style>