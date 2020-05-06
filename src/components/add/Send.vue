<template>
    <div class="container">
    <el-form :model="form" label-width="100px" class="demo-ruleForm">
        <div class="card">         
            <div class="header">
            <div class="num">1</div>
            <el-radio-group v-model="form.type">
                <el-radio label="1">包裹</el-radio>
                <el-radio label="2">材料</el-radio>
            </el-radio-group>
            </div>
            <div class="formarea">
                <el-form-item label="物品编码" required style="display:inline-block">
                  <el-input style="width:420px" v-model="form.code" placeholder="请输入编码"></el-input>
                </el-form-item>
                <el-tooltip class="item" effect="dark" content="填写编码之后方便派送人员识别取派包裹" placement="top-start">
                  <i class="el-icon-info"></i>
                </el-tooltip>   
                <el-form-item label="数量" style="display:inline-block">
                  <el-input v-model="form.num"></el-input>
                </el-form-item>
            </div>        
        </div>

        <div class="card">
            <div class="header">
                <div class="num">2</div>
            </div>
            <div class="formarea">
                <el-form-item label="收货地址" required >
                  <el-input style="width:528px" v-model="form.address" placeholder="请输入收货地址">
                  </el-input>
                  <div class="locate">
                      <p>定位</p>
                      <a href="javascript:;" class="el-icon-location"></a>
                  </div>
                </el-form-item>

                <el-form-item style="display:inline-block" label="收货人姓名" required >
                  <el-input style="width:216px" v-model="form.receiver" placeholder="请输入收货人姓名">
                  </el-input>
                </el-form-item>
                <el-form-item style="display:inline-block" label="收货人电话" required >
                  <el-input style="width:216px" v-model="form.receiverPhone" placeholder="请输入收货人电话">
                  </el-input>
                </el-form-item>

                <el-form-item label="国家" >
                  <el-input disabled style="width:216px" v-model="form.nation">
                  </el-input>
                </el-form-item>

                <el-form-item label="邮编" style="display:inline-block">
                  <el-input disabled style="display:inline-block;width:110px" v-model="form.postCode">
                  </el-input>
                  <el-input style="display:inline-block;width:94px;margin-left:12px"></el-input>
                </el-form-item>

                <el-form-item style="display:inline-block" label="备注门牌号" >
                  <el-input style="width:216px" v-model="form.houseNum" placeholder="填写门牌号，配送更精准">
                  </el-input>
                </el-form-item>
            </div>
        </div>
        <div class="card">
            <div class="header">
                <div class="num">3</div>
            </div>
            <div class="formarea">
                <el-form-item label="发货地址" >
                  <el-input disabled style="width:528px" placeholder="测试发货地址" v-model="form.sendAddress">
                  </el-input>
                </el-form-item>

                <el-form-item label="发货人姓名" style="display:inline-block">
                  <el-input disabled style="width:216px" placeholder="测试姓名" v-model="form.sendName">
                  </el-input>
                </el-form-item>

                <el-form-item label="发货人电话" style="display:inline-block">
                  <el-input disabled style="width:216px" placeholder="测试电话" v-model="form.sendPhone">
                  </el-input>
                </el-form-item>
            </div>
        </div>
        <div class="card">
            <div class="header">
                <div class="num">4</div>
            </div>

            <div class="formarea">
                <el-form-item label="取派日期" required>
                    <el-date-picker
                      v-model="form.date"
                      type="date"
                      align="right"
                      style="width:420px"
                      placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="结算方式" required>
                    <el-select v-model="form.pay" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                </el-form-item>

                <div class="hidden" style="display:none">
                    <el-form-item label="外部订单号" >
                      <el-input style="width:420px" placeholder="请填写外部订单号" v-model="form.orderNum">
                      </el-input>
                    </el-form-item>

                    <el-form-item label="送货上门">
                        <el-select v-model="form.homeDeli" placeholder="请选择">
                          <el-option
                            v-for="item in options2"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="注意事项">
                      <el-input type="textarea" resize="none" placeholder="请填写需要特别注意的事项" style="width:528px" v-model="form.attention"></el-input>
                    </el-form-item>
                </div>

                <div class="collapse"><a href="javascript:;" @click="show" class="toggle">点击展开更多<i class="el-icon-arrow-down"></i></a></div>   

                <div class="submit">
                    <el-button style="width:256px;height:40px">提交</el-button>
                </div>
            </div>
        </div>
    </el-form>
    </div>
</template>

<script>
export default {
    data () {
      return {
        
        form:{
            type: '1',
            code: '',
            num: 0,
            address:'',
            receiver:'',
            receiverPhone:'',
            nation:'NL',
            postCode: 1183,
            houseNum:'',
            sendAddress:'',
            sendName:'',
            sendPhone:'',
            date:'',
            pay:'',
            orderNum:'',
            homeDeli:'',
            attention:''
        },
        options1: [{
          value: '选项1',
          label: '寄付'
        },{
          value: '选项2',
          label: '到付'
        }],
        options2: [{
          value: '选项1',
          label: '是'
        },{
          value: '选项2',
          label: '否'
        }]
      }
    },
    methods:{
        show(){
            let node = document.querySelector(".hidden");
            let toggle = document.querySelector(".toggle");
            if(node.style.display == "none"){
                node.style.display = "block"
                toggle.innerHTML = "点击收起更多";
                let i = document.createElement('i')
                i.className = "el-icon-arrow-up"
                toggle.appendChild(i)
            } else{
                node.style.display = "none"
                toggle.innerHTML = "点击展开更多";
                let i = document.createElement('i')
                i.className = "el-icon-arrow-down"
                toggle.appendChild(i)
            }
            
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        .card{
            background-color: #fff;
            border: 1px solid #E8E9EB;
            margin: 10px 20px;
            .formarea{
                position: relative;
                padding-top: 20px;
                
                background-color: #fff;
                border: 1px solid #E8E9EB;
                border-top: 0;
                i{
                    margin-left: 20px;
                }
            }
        }
        .header{
            height: 40px;
            border-bottom: 1px solid #E8E9EB;
            .num{
                display: inline-block;
                width: 40px;
                height: 40px;
                font-size: 16px;
                font-weight: bold;
                text-align: center;
                line-height: 40px;
                color: white;
                background-color: #28D195;
            }
            .el-radio{
                margin-left: 60px;
            }  
        }
        .locate{
            position: absolute;
            left: 467px;
            top: -13px;
            p{
                display: inline-block;
                color: #ccc;
            }
            a{
                text-decoration: none;
                color: #616263;
                margin-left: 5px;
                font-size: 20px;
            }
        }
        .hidden{
            padding-top: 20px;
            border-top: 1px solid #E8E9EB;
        }
        .collapse{
            text-align: center;
            height: 30px;
            line-height: 30px;
            width: 100%;
            font-size: 14px;
            border-bottom: 1px solid #E8E9EB;
            .toggle{
                text-decoration: none;
                color: #000;
            }
        }
        .submit{
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .el-button{
                border: 0;
                margin-right: 30px;
                background-color: #28D195;
                color: white;
            }
        }
    }
</style>