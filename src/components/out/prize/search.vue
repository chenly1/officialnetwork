<template>
    <section>
          <el-table :data="tableData" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%">
            <el-table-column type="selection" width="45">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column label="年份" prop="HJNF" sortable min-width="80">
            </el-table-column>
            <el-table-column label="奖项" prop="HJJX" sortable min-width="80">
            </el-table-column>
        </el-table>





        <!--底部工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">删除</el-button>
            <el-button type="danger"  @click="dialogVisible = true ;prizeform=sels[0]" :disabled="this.sels.length===0">编辑</el-button>
            <el-button  @click="dialogVisible = true">新增</el-button>

<el-dialog
  title="编辑奖项"
   :before-close="beforeClose"      :visible.sync="dialogVisible"
  width="30%">
      <el-form ref="form" :model="prizeform" label-width="80px">
    <el-form-item label="年份">
    <el-input v-model="prizeform.HJNF"></el-input>
    </el-form-item>
    <el-form-item label="奖项">
    <el-input type="textarea" rows="5"  v-model="prizeform.HJJX"></el-input>
    </el-form-item>
    </el-form>
  <span slot="footer" class="dialog-footer">  
    <el-button type="primary" @click="addPrize">确 定</el-button>
  </span>
</el-dialog>
            <el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="page.pageNum" :page-size="page.pageCount" :page-sizes="[10, 20, 50, 100]" :total="page.total" style="float:right;">
            </el-pagination>
        </el-col>

    </section>
</template>

<script>
import {savePrize, getPrizes,deletePrize } from '@/axios/axios'

export default {
    data() {
        return {
            prizeform:{},
            dialogVisible:false,
            listLoading: false, // 加载动画
            displayVal: true,// 查询输入框显示
            sels: [],// 列表选中列
             page: {
                total: 40,
                pageCount: 10,
                pageNum: 1
            },
            tableData: [
                {
                    ID:1,
                    HJNF:'2019年8月',
                    HJJX:'马德华段对'
                   
                }, {
                  ID:2,
                    HJNF:'2019年9月',
                    HJJX:'肝泥碾将'
                }, {
                  ID:3,
                    HJNF:'2019年10月',
                    HJJX:'阿里巴巴将'
                }]
        }
    },
    methods: {
        beforeClose(done){
          this.prizeform={}
          this.dialogVisible=false
        },
        addPrize:function(){
            let _that=this;
           savePrize(this.prizeform).then(function(response){
               _that.getListData;
               _that.dialogVisible=false
               _that.prizeform={}
               alert("成功了")
            
           }).catch(()=>{

           })
        },
        // 获取table列表数据
        getListData() {
               let _that=this;
               var url='?pageNum='+this.page.pageNum+'&pageCount='+this.page.pageCount
             getPrizes().then(function(response){
               _that.tableData=response.data.data.prize;
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
            var ids=[];
            this.sels.forEach(element => {
                ids.push(element.ID)
            });
            let _that=this;
            deletePrize({ids:ids}).then(function(response){
             
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
</style>
