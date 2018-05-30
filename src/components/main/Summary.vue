<template>
  <div calss="summary">
<el-container style="height: 340px;width: 775px;">
  <el-aside style="width: 200px;"  ><img src="../../static/sucai/img_overview01.jpg"/></el-aside>
  <el-container>
    <el-header> <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane v-for="summary in  summarys" :key="summary.id"     :label="summary.label" :name="summary.name"></el-tab-pane>
  </el-tabs>
  </el-header>
    <el-main>
       <div v-show="activeName=='introduction'" v-html="summaryView.introduction.msg"></div>
       <div v-show="activeName=='partner'">


       </div>
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
        activeName=tab
      }
    },
  mounted:function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--top .el-tabs__item.is-top:nth-child(2) {
    padding-left: 0;
}
.el-tabs__item:hover {
    color: #cc0000;
    cursor: pointer;
}
.el-tabs__item.is-active {
    color: #cc0000;
}
  .summary {
        text-align:center
      }


       .el-main {
    /* background-color: #E9EEF3; */
    height: 870px;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
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
