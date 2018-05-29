<template>
  <div class="main">
<el-container >
  <el-main center=true>
    <Summary></Summary>
  </el-main>
  <el-footer>

    <el-row>
  <el-col :span="12"><el-breadcrumb separator="">
   <el-breadcrumb-item v-for="(item,index) in items" :key="index" >{{item}}</el-breadcrumb-item>
</el-breadcrumb></el-col>
  <el-col :span="12"> <el-breadcrumb separator="|">
  <el-breadcrumb-item >首页</el-breadcrumb-item>
  <el-breadcrumb-item >活动管理</el-breadcrumb-item>
  <el-breadcrumb-item >活动列表</el-breadcrumb-item>
  <el-breadcrumb-item >活动详情</el-breadcrumb-item>
</el-breadcrumb></el-col>
</el-row>
   


 
</el-footer>
</el-container>
  </div>
</template>

<script>
import Summary from './Summary.vue';
export default {
  components: {Summary}, 
  data () {
    return {
      items:[1,2,3,4,5,6],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
   .el-container {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  }
</style>
