<template>
  <div calss="summary">
<el-container style="height: 340px;width: 775px;">
  <el-aside style="width: 200px;"  ><img src="../../static/sucai/img_overview01.jpg"/></el-aside>
  <el-container>
    <el-header> <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="简介" name="first"></el-tab-pane>
    <el-tab-pane label="合伙人" name="second"></el-tab-pane>
    <el-tab-pane label="团队" name="third"></el-tab-pane>
    <el-tab-pane label="奖项" name="fourth"></el-tab-pane>
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
      activeName: 'second',
      msg: '大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。'
    }
  },
  methods:{
       handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  mounted:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .summary {
        text-align:center
      }

    ::-webkit-scrollbar {  
        width: 3px;  
        height: 4px;  
        background-color: #F5F5F5;  
      }  
      /*定义滚动条轨道 内阴影+圆角*/  
      ::-webkit-scrollbar-track {  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
        background:#DDDDDD;  
      }  
      /*定义滑块 内阴影+圆角*/  
      ::-webkit-scrollbar-thumb {  
        /* border-radius: 3px;   */
        height: 4px; 
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
        background-color:#555555;  
      }  
      ::-webkit-scrollbar-thumb:hover {  
        /* border-radius: 3px;   */
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
        background-color:#333333;  
      } 

</style>
