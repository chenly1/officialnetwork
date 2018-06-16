<template>
    <section>
     <el-row> <el-col :span="8">  <el-select v-model="value" placeholder="请选择" @change="yearchange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-col>
  <el-col :span="8"> 
    <span class="demonstration">年</span>
    <el-date-picker
      v-model="value5"
      type="year"
      value-format="yyyy"
      placeholder="选择年">
    </el-date-picker>
  </el-col>
      <el-col :span="1"> <el-button type="primary" @click="addyear">增加</el-button></el-col>
      <el-col :span="7"> <el-button type="primary" @click="deleteyear">删除</el-button></el-col>
     </el-row>
  <el-input
  type="textarea"
  :rows="30"
  placeholder="请输入内容"
  v-model="textarea" >
</el-input>
<el-button type="primary" @click="check">确认</el-button>
    </section>
</template>

<script>
import {getMemoyearlist,getMemo } from '@/axios/axios'

export default {
    data() {
        return {
            textarea:"",
            value:"1993",
            options:[{value:"1993",label:"1993"},
            {value:"1994",label:"1994"},
            {value:"1995",label:"1995"},
            {value:"1996",label:"1996"}],
            value5: ''
        }
    },
    methods: {
        check(){

        },
        deleteyear(){

        },
        yearchange(){
            let _that=this
            getMemo(this.value).then(function(response){

              

            }).catch(()=>{

            })
        },
        addyear(){
            debugger
        let year={};
        year.value=this.value5;
        year.label=this.value5
        this.options.push(year)
        this.value=this.value5;
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
