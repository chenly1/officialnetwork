<template>
    <section>
<el-upload
  class="avatar-uploader"
  action="api/hellocontroller/img"
  :data="id"
  :on-change="change"
  ref="upload"
  :show-file-list="false"
  :auto-upload="false"  
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>

<el-form  :model="introduction" >
  <el-form-item >
    <el-input v-model="introduction.brief" placeholder="请输入简介内容" type="textarea" :rows="30"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit">上传</el-button>
  </el-form-item>
</el-form>
    </section>
</template>

<script>
import { doCommit,getIntroduction } from '@/axios/axios'

export default {
    data() {
        return {
        id:"123",
        imageUrl:"",
        introduction:{}
        }
    },
    methods: {
         getListData(){
         let _that=this;
         getIntroduction().then(function(response){
          _that.introduction=response.data.data.introduction
          _that.imageUrl=introduction.img
         }).catch((error)=>{
             console.log(error)
         })

        },
        onSubmit(){
          debugger
          this.$refs.upload.submit();
           let url="api/hellocontroller/hello";
            this.$refs.upload.submit();
          doCommit(url,this.introduction).then(function(response){
               
          _that.$refs.upload.submit();
          }).catch(()=>{

          })
        },
        change(file, fileList){
            this.imageUrl=file.url
        },
          beforeAvatarUpload(file) {
         debugger
        this.imageUrl=file
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
    
       handleAvatarSuccess(response, file, fileList){
         debugger
            alert(response)
       }
    },
    mounted() {
        this.getListData();
    }
}
</script>
<style scope>
.el-textarea{
    margin-top: 20px;
    margin-bottom: 20px;
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
