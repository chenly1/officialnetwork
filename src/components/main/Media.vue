<template>
  <div >
<el-container style="height: 340px;width: 775px;">
  <el-aside style="width: 200px;"  ><img src="../../static/sucai/img_overview01.jpg"/></el-aside>
  <el-container>
    <el-header> <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="出版" name="first"></el-tab-pane>
    <el-tab-pane label="评论" name="second"></el-tab-pane>
    <el-tab-pane label="展览" name="third"></el-tab-pane>
  </el-tabs>
  </el-header>
    <el-main>{{msg}}</el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .el-header, .el-footer {
    background-color: #B3C0D1;
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
</style>
