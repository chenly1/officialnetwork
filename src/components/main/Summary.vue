<template>
  <div calss="summary">
   <el-container class="out-container">
  <el-aside ><img  src="../../static/sucai/img_overview01.jpg"/></el-aside>
  <el-container>
    <el-header style="height:30px;"> 
     <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="summary in  summarys" :key="summary.id"     :label="summary.label" :name="summary.name"></el-tab-pane>
      </el-tabs>  -->
       <div class="menu">
        <ul>
            <li><a href="javascript:void(0);">主页</a></li>
            <li><a href="javascript:void(0);">工作日志</a></li>
            <li><a href="javascript:void(0);">设备运行记录</a></li>
            <li><a href="javascript:void(0);">其他</a></li>
        </ul>
    </div>
  </el-header> 
    <el-main>
       <div v-show="activeName=='introduction'" v-html="summaryView.introduction.msg"></div>
       <div v-show="activeName=='partner'"></div>
       <div v-show="activeName=='team'"></div>
       <div v-show="activeName=='prize'">
          <ul>
              <li v-for="(pr,index ) in summaryView.prize" :key="index">{{pr.year+pr.content}}</li>
          </ul>
       </div>
    </el-main>
  </el-container>
</el-container> 

  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'introduction',
      summarys:[{id:1,label:"简介",name:"introduction"},
      {id:2,label:"合伙人",name:"partner"},
      {id:3,label:"团队",name:"team"},
      {id:4,label:"奖项",name:"prize"}],
      summaryView:{introduction:{

        msg:"大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。" }, prize:[{year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      {year:"1993",content:"智障大奖"},
      ]}
    }
  },
  methods:{
       handleClick(tab, event) {
        this.activeName=tab.name
      }
    },
  mounted:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
 width: 100%;
 height: auto;max-width: 100%; display: block;
 margin-top: 60px
}
.summary{
  position: relative;
}
/* .el-tabs .el-tabs--top{
  height: 20px;
}
.el-header{
 height:30px;
}
.el-tab-pane{
  height:1px
} */
 .out-container {
   top: 10px;
   left:10px;
   right: 0;
   bottom: 0;
   margin: auto;
   position:absolute;
   /* background-color:rgb(0, 255, 170); */
   color: #333;
   width:  1200px;  
   height: 600px;
  } 
 .el-main { 
  /* background-color: rgb(26, 105, 184);  */
   color: #333;
   line-height: 30px;
  }
  

  /* 所有class为menu的div中的ul样式 */
div.menu ul
{
    list-style:none; /* 去掉ul前面的符号 */
    margin: 0px; /* 与外界元素的距离为0 */
    padding: 0px; /* 与内部元素的距离为0 */
    width: auto; /* 宽度根据元素内容调整 */
}
/* 所有class为menu的div中的ul中的li样式 */
div.menu ul li
{
    float:left; /* 向左漂移，将竖排变为横排 */
}
/* 所有class为menu的div中的ul中的a样式(包括尚未点击的和点击过的样式) */
div.menu ul li a, div.menu ul li a:visited
{
    color: #df2e2e; /* 文字颜色 */
    display: block; /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    line-height: 1.35em; /* 行高 */
    padding: 4px 20px; /* 内部填充的距离 */
    text-decoration: none; /* 不显示超链接下划线 */
    white-space: nowrap; /* 对于文本内的空白处，不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
}
/* 所有class为menu的div中的ul中的a样式(鼠标移动到元素中的样式) */
div.menu ul li a:hover
{
    /* 背景色 */
    color: #465c71; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}
/* 所有class为menu的div中的ul中的a样式(鼠标点击元素时的样式) */
div.menu ul li a:active
{
    /* 背景色 */
    color: #cfdbe6; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}

</style>
