<template>
    <section>
          <el-table :data="tableData" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%">
            <el-table-column type="selection" width="45">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column label="年份" prop="CBNF" sortable min-width="80">
            </el-table-column>
               <el-table-column label="描述" prop="CBMS" sortable min-width="80">
            </el-table-column>
               <el-table-column label="图片"  sortable min-width="80">
    <template slot-scope="scope" >
        <img  :src="scope.row.IMG" class="avatar" style="height:100px;width:200px">
     </template>
                   

            </el-table-column>
        </el-table>
       <!--底部工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">删除</el-button>
            <el-button type="danger"  @click="dialogVisible = true ;publishform=sels[0]" :disabled="this.sels.length===0">编辑</el-button>
            <el-button  @click="dialogVisible = true">新增</el-button>
<!-- <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog> -->


<el-dialog
  title="编辑作品"
   :before-close="beforeClose"      :visible.sync="dialogVisible"
  width="30%">
      <el-form ref="form" :model="publishform" label-width="80px">
    <el-form-item label="年份">
    <el-input v-model="publishform.CBNF"></el-input>
    </el-form-item>
        <el-form-item label="描述">
    <el-input  type="textarea"  rows="3" v-model="publishform.CBMS"></el-input>
    </el-form-item>

   <el-upload :auto-upload="false"
  :on-change="change"
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="publishform.IMG" :src="publishform.IMG" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
    </el-form>
  <span slot="footer" class="dialog-footer">  
    <el-button type="primary" @click="addPublish">确 定</el-button>
  </span>
</el-dialog>
            <el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="page.pageNum" :page-size="page.pageCount" :page-sizes="[10, 20, 50, 100]" :total="page.total" style="float:right;">
            </el-pagination>
        </el-col>

    </section>
</template>

<script>
import {deletepublishs,getpublishs,savePublish } from '@/axios/axios'

export default {
    data() {
        return {
            imageUrl:"",
            publishform:{},
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
                    CBNF:'龙美术馆（西岸馆）1',
                    CBMS:'建成',
                    IMG:'https://www.baidu.com/img/bd_logo1.png',

                },   {
                    ID:2,
                    CBNF:'龙美术馆（西岸馆）2',
                    CBMS:'建成',
                    IMG:'https://www.baidu.com/img/bd_logo1.png',

                },   
                {
                    ID:3,
                    CBNF:'龙美术馆（西岸馆）3',
                    CBMS:'建成',
                    IMG:'https://www.baidu.com/img/bd_logo1.png',

                }]
        }
    },
    methods: {
        change(file, fileList){
            debugger
          this.publishform.IMG=file.url
        },
         handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        this.imageUrl="https://www.baidu.com/img/bd_logo1.png"
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
        beforeClose(done){
          this.publishform={}
          this.dialogVisible=false
        },
        addPublish:function(){
            // this.$refs.upload.submit();
            let _that=this;
           savePublish(this.publishform).then(function(response){
               _that.getListData;
               _that.dialogVisible=false
               _that.publishform={}
           }).catch(()=>{

           })
        },
        // 获取table列表数据
        getListData() {
               let _that=this;
               var url='?pageNum='+this.page.pageNum+'&pageCount='+this.page.pageCount
            getpublishs(url).then(function(response){
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
            var ids=[];
            this.sels.forEach(element => {
                ids.push(element.ID)
            });
            let _that=this;
            deletepublish({id:ids}).then(function(response){
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
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
