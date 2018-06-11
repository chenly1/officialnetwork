<template>
    <section>
          <el-table :data="tableData" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%">
            <el-table-column type="selection" width="45">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column label="建筑名称" prop="JZMC" sortable min-width="80">
            </el-table-column>
            <el-table-column label="状态" prop="JZZT" sortable min-width="80">
            </el-table-column>
             <el-table-column label="地址" prop="JZDZ" sortable min-width="80">
            </el-table-column>
             <el-table-column label="面积" prop="JZMJ" sortable min-width="80">
            </el-table-column>
             <el-table-column label="年份" prop="HJNF" sortable min-width="80">
            </el-table-column>
             <el-table-column label="设计时间" prop="SJSJ" sortable min-width="80">
            </el-table-column>
             <el-table-column label="竣工时间" prop="JGSJ" sortable min-width="80">
            </el-table-column>
        </el-table>



        <!--底部工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">删除</el-button>
            <el-button type="danger"  @click="dialogVisible = true ;workform=sels[0]" :disabled="this.sels.length===0">编辑</el-button>
            <el-button  @click="dialogVisible = true">新增</el-button>

<el-dialog
  title="编辑作品"
   :before-close="beforeClose"      :visible.sync="dialogVisible"
  width="30%">
      <el-form ref="form" :model="workform" label-width="80px">
    <el-form-item label="建筑名称">
    <el-input v-model="workform.JZMC"></el-input>
    </el-form-item>
        <el-form-item label="状态">
    <el-input    v-model="workform.JZZT"></el-input>
    </el-form-item>
    <el-form-item label="地址">
    <el-input    v-model="workform.JZDZ"></el-input>
    </el-form-item>
      <el-form-item label="面积">
    <el-input    v-model="workform.JZMJ"></el-input>
    </el-form-item>
      <el-form-item label="年份">
    <el-input   v-model="workform.HJNF"></el-input>
    </el-form-item>
      <el-form-item label="设计时间">
    <el-input   v-model="workform.SJSJ"></el-input>
    </el-form-item>
     <el-form-item label="竣工时间">
    <el-input    v-model="workform.JGSJ"></el-input>
    </el-form-item>

    <el-upload :auto-upload="false"
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList"
  list-type="picture">
  <el-button size="small" type="primary">选择文件</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
    </el-form>
  <span slot="footer" class="dialog-footer">  
    <el-button type="primary" @click="addWork">确 定</el-button>
  </span>
</el-dialog>
            <el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="page.pageNum" :page-size="page.pageCount" :page-sizes="[10, 20, 50, 100]" :total="page.total" style="float:right;">
            </el-pagination>
        </el-col>

    </section>
</template>

<script>
import {removeImg,saveWork,getWorkDetail,deleteWork } from '@/axios/axios'

export default {
    data() {
        return {
            fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
            workform:{},
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
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

                },   {
                    ID:1,
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

                },   {
                    ID:1,
                    JZMC:'龙美术馆（西岸馆）',
                    JZZT:'建成',
                    JZDZ:'上海徐汇区龙腾大道',
                    JZMJ:'33007平方米',
                    HJNF:'2011.11-2012.7',
                    SJSJ:'2014.3',
                    JGSJ:'2011.11-2012.7'

                }]
        }
    },
    methods: {
     handleRemove(file, fileList) {
         debugger
        alert(file, fileList);
        removeImg()
      },
      handlePreview(file) {
       alert(file);
      },
        beforeClose(done){
          this.workform={}
          this.dialogVisible=false
        },
        addWork:function(){
            this.$refs.upload.submit();
            alert("陈工了")
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
            getWorkDetail().then(function(response){
               _that.tableData=response.data.data.work;
              
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
            deleteWork(ids).then(function(response){
             
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
