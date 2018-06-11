<template>
    <section>
        <el-table :data="tableData" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%">
            <el-table-column type="selection" width="45">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column label="职务" prop="YGZW" sortable min-width="80">
            </el-table-column>
            <el-table-column label="姓名" prop="YGXM" sortable min-width="80">
            </el-table-column>
            <el-table-column label="入职时间" prop="RZSJ" sortable>
            </el-table-column>
            <!-- <el-table-column label="用户ID" prop="accountId" sortable min-width="100" v-if="false">
            </el-table-column> -->
        </el-table>

        <!--底部工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">删除</el-button>
            <el-button  @click="dialogVisible = true ;showexTabe = true ;exform=sels[0]" :disabled="this.sels.length===0">编辑</el-button>
            <el-button  @click="dialogVisible = true ; showexTabe = false">新增</el-button>
<el-dialog
  title="员工详情"
  :visible.sync="dialogVisible"
  width="30%">
      <el-form ref="form" :model="exform" label-width="80px">
    <el-form-item label="员工姓名">
    <el-input v-model="exform.YGXM"></el-input>
    </el-form-item>
    <el-form-item label="职位">
    <el-input v-model="exform.YGZW"></el-input>
    </el-form-item>
    </el-form>
     <el-table  :border="true" v-show="showexTabe"
      :data="staffexTable"
      style="width: 100%">
      <el-table-column
        prop="SJ"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ex"
        label="经历"
        width="365">
      </el-table-column>
    </el-table>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary"  @click="dialogVisible2 = true">增加经历</el-button>     
    <el-button type="primary" @click="addStaff">确 定</el-button>
  </span>
</el-dialog>



<el-dialog
  title="增加经历"
  :visible.sync="dialogVisible2"
  width="30%">
  <span>
   <el-input class="exSJ" v-model="addex.SJ" placeholder="请输入年份"></el-input>
   <el-input  v-model="addex.ex" placeholder="请输入经历"  type="textarea"  rows="10"></el-input>
  </span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible2 = false">取 消</el-button>
    <el-button type="primary" @click="addexclick">确 定</el-button>
  </span>
</el-dialog>




            <el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="page.pageNum" :page-size="page.pageCount" :page-sizes="[10, 20, 50, 100]" :total="page.total" style="float:right;">
            </el-pagination>
        </el-col>



    </section>
</template>

<script>
import {saveStaff, getStaff,deleteStaff } from '@/axios/axios'

export default {
    data() {
        return {
            addex:{},
            exform:{},
            showexTabe:true,
            dialogVisible: false,
            dialogVisible2: false,
            listLoading: false, // 加载动画
            displayVal: true,// 查询输入框显示
            sels: [],// 列表选中列
             page: {
                total: 40,
                pageCount: 10,
                pageNum: 1
            },
            tableData: [
                {   ID:1,
                    RZSJ: '2017-10-01',
                    YGXM: '马德华',
                    YGZW: '会员',

                }, {
                    ID:2,
                    RZSJ: '2017-10-01',
                    YGXM: '刘德华',
                    YGZW: '会员',
                }, {
                    ID:3,
                    RZSJ: '2017-10-01',
                    YGXM: '何青哲',
                    YGZW: '会员',
                }],
                staffexTable:[
                     {SJ:"1992年",ex:"回家种田"},
                     {SJ:"1993年",ex:"参hi i和尾号为后人"},
                     {SJ:"1994年",ex:"参hi i和尾号为后人参hi i和尾号为后人参hi i和尾号为后人"},

                ]
        }
    },
    methods: {
        addstaff:function(){
           let staff={
               baseinfo:exform,
               exinfo:taffexTable
           }
           let _that=this;
          saveStaff(staff).then(function(response){
            
               
               _that.getListData();
               dialogVisible = false;

          }).catch(()=>{

          })
        },
        addexclick:function(){//增加经历
           this.staffexTable.push(this.addex);
           this.addex={};
           this.showexTabe=true;
           this.dialogVisible2=false;
        },
        // 获取table列表数据
        getListData() {
            let _that=this;
            var url='?pageNum='+this.page.pageNum+'&pageCount='+this.page.pageCount
            getStaff(url).then(function(response){
            _that.tableData=response.data.data.staff;
            _that.page.total=response.data.data.total;
            }).catch((error)=>{
                  console.log(error)
            })
        },
        // 分页
        handleCurrentChange(val) {
            this.page.pageNum = val;
            this.getListData();
        },
        // 页码大小
        handleSizeChange(val) {
            this.page.pageCount = val;
            this.getListData();
        },
        // 批量选择
        selsChange: function(sels) {
            this.sels = sels;
        
        },
        // 批量操作事件
        batchRemove: function() {
            debugger
            var ids=[];
            this.sels.forEach(element => {
                ids.push(element.ID)
            });
            let _that=this;
            deleteStaff(ids).then(function(response){
             
             _that.getListData();
            }).catch((error)=>{
                 console.log(error)
            })
        },
    },
    mounted() {
     this.getListData();
    }
}
</script>

<style scoped>
.el-textarea__inner{
    height: 200px;
}

.toolbar .el-select {
    /* border: 1px solid red; */
    margin-right: 10px;
    margin-bottom: 0;
}

.monthClass .el-select {
    width: 62px;
}

.dayClass .el-select {
    width: 62px;
}
.exSJ{
    margin-bottom: 5px;
}
</style>
