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
            <li @click="changeSummaryView(summary)" v-for="summary in summarys" :key="summary.id"><a href="javascript:void(0);">{{summary.label}}</a></li>
        </ul>
    </div>
  </el-header> 
    <el-main>
       <div v-show="activeName=='introduction'" v-html="summaryView.introduction.msg"></div>   
       <div v-show="activeName=='partner'">
              <ul class="partnerList">
              <li   v-for="(part,index) in summaryView.partner" :key="index" >
                 <el-row :gutter="10">
  <el-col :span="12">
     <div><b>{{part[0].name}}</b>
       <ul class="expList">
          <li calss="exp" v-for="(exp,index) in part[0].experience" :key="index">{{exp}}</li>
      </ul>
    </div>
  </el-col>
  <el-col v-if="part[1]!=null" :span="12">
     <div><b>{{part[1].name}}</b>
         <ul class="expList">
           <li calss="exp"  v-for="(exp,index) in part[1].experience" :key="index">{{exp}}</li>
        </ul>
     </div>
  </el-col>
</el-row>
              </li>
          </ul>
       </div>
       <div v-show="activeName=='team'">
           <div calss="titleList" v-for=" team  in summaryView.team" :key="team.title">
              <b>{{team.title}}</b>
               <ul class="memberList" v-for="(member,index) in team.member" :key="index">
                 <li>
                   <div>
                     {{member.name}}
                     <ul class="expListq">
                         <li v-for="(exp,index) in member.experience" :key="index">{{exp}}</li>
                     </ul>
                   </div>
                 </li>
              </ul>  
           </div>
       </div>
       <div v-show="activeName=='prize'">
          <ul class="prizeList">
              <li v-for="(pr,index ) in summaryView.prize" :key="index" >
                <el-row :gutter="10">
                 <el-col :span="3">{{pr.year}}</el-col>
                 <el-col :span="21">{{pr.content}}</el-col>
             </el-row>
             </li>
          </ul>
       </div>
    </el-main>
  </el-container>
</el-container> 

  </div>
</template>
<script>
import getSummaryData from '../../axios/axios'
export default {
  data () {
    return {
      activeName: 'introduction',
      summarys:[{id:1,label:"简介",name:"introduction"},
      {id:2,label:"合伙人",name:"partner"},
      {id:3,label:"团队",name:"team"},
      {id:4,label:"奖项",name:"prize"}],
      summaryView:{introduction:{
      msg:"大舍建筑设计事务所2001年成立于上海大舍建筑设计事务所2001年成立于上海大舍建筑设计事务所2001年成立于上海大舍建筑设计事务所2001年成立于上海大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年， 大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。大舍建筑设计事务所2001年成立于上海，是中华人民共和国建设部核准的甲级建筑设计事务所。主持建筑师柳亦春和陈屹峰分别出生于1969年和1972年，均毕业于同济大学建筑系。" }, 
      prize:[{ year:"2012年",content:'“螺旋艺廊”获“2012 WA中国建筑奖”入围奖'},
      {year:"2011年",content:'被美国建筑师协会会刊《建筑实录》评选为年度全球10佳“设计先锋”(Design Vanguard 2011)。'},
      {year:"2010年",content:'大舍建筑获法国AS.Architecture-Studio评选的“中国新锐建筑创作奖”'},
      {year:"2010年",content:'“嘉定新城幼儿园”获第七届“远东建筑奖”佳作奖'},
      {year:"2010年",content:'“嘉定新城幼儿园”获“2010 WA中国建筑奖”佳作奖'},
      {year:"2010年",content:'“嘉定新城幼儿园”获第二届“中国建筑传媒奖”最佳建筑提名奖'},
      {year:"2009年",content:'“江苏软件园吉山基地6号地块”获2009年美国《商业周刊》/《建筑实录》联合颁发的年度最佳商用建筑奖'},
      {year:"2008年",content:'大舍建筑获首届“中国建筑传媒奖”青年建筑师（团队）入围奖'},
      {year:"2006年",content:'“青浦夏雨幼儿园”获“2006 WA中国建筑奖”优胜奖'},
      {year:"2006年",content:'“青浦私营企业协会办公与接待中心”获2006年美国《商业周刊》/《建筑实录》联合颁发的年度最佳商用建筑奖'},
      {year:"2006年",content:'“青浦私营企业协会办公与接待中心”获“2006 WA中国建筑奖”佳作奖'},
      {year:"2011年",content:'被美国建筑师协会会刊《建筑实录》评选为年度全球10佳“设计先锋”(Design Vanguard 2011)。'},
      {year:"2010年",content:'大舍建筑获法国AS.Architecture-Studio评选的“中国新锐建筑创作奖”'},
      {year:"2010年",content:'“嘉定新城幼儿园”获第七届“远东建筑奖”佳作奖'},
      {year:"2010年",content:'“嘉定新城幼儿园”获“2010 WA中国建筑奖”佳作奖'},
      {year:"2010年",content:'“嘉定新城幼儿园”获第二届“中国建筑传媒奖”最佳建筑提名奖'},
      {year:"2009年",content:'“江苏软件园吉山基地6号地块”获2009年美国《商业周刊》/《建筑实录》联合颁发的年度最佳商用建筑奖'},
      {year:"2008年",content:'大舍建筑获首届“中国建筑传媒奖”青年建筑师（团队）入围奖'},
      {year:"2006年",content:'“青浦夏雨幼儿园”获“2006 WA中国建筑奖”优胜奖'},
      {year:"2006年",content:'“青浦私营企业协会办公与接待中心”获2006年美国《商业周刊》/《建筑实录》联合颁发的年度最佳商用建筑奖'},
      {year:"2006年",content:'“青浦私营企业协会办公与接待中心”获“2006 WA中国建筑奖”佳作奖'}],
      partner:[[{name:"刘怡春",experience:[ "1969年出生于山东海阳",
                 "1991年获同济大学建筑系建筑学学士学位",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                   "1991～1994年就职于广州市设计院，任职助理建筑师",
                     "1991～1994年就职于广州市设计院，任职助理建筑师",
                       "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1997年获同济大学建筑系建筑学硕士学位",
                 "1997～2000年就职于同济大学建筑设计研究院，任建筑师、主任建筑师",
                 "2001年在上海与陈屹峰、庄慎共同创立大舍建筑设计事务所",
                 "2001年至今任大舍建筑设计事务所合伙人、主持建筑师"]},
                {name:"陈启峰",experience:[ "1969年出生于山东海阳",
                 "1991年获同济大学建筑系建筑学学士学位",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1997年获同济大学建筑系建筑学硕士学位",
                 "1997～2000年就职于同济大学建筑设计研究院，任建筑师、主任建筑师",
                 "2001年在上海与陈屹峰、庄慎共同创立大舍建筑设计事务所",
                 "2001年至今任大舍建筑设计事务所合伙人、主持建筑师"]}],
                 [{name:"马德华",experience:[ "1969年出生于山东海阳",
                 "1991年获同济大学建筑系建筑学学士学位",
                 "1991～1994年就职于广州市设计院，任职助理建筑师",
                 "1997年获同济大学建筑系建筑学硕士学位",
                 "1997～2000年就职于同济大学建筑设计研究院，任建筑师、主任建筑师",
                 "2001年在上海与陈屹峰、庄慎共同创立大舍建筑设计事务所",
                 "2001年至今任大舍建筑设计事务所合伙人、主持建筑师"]}]
],
team:[{ title:"助理合伙人",
member:[ { name:"高林",
 experience:['1982年出生于上海',
'2006年毕业于同济大学建筑系，获建筑学学士学位',
'2007年大学生志愿者，服务于西藏建设厅城建规划设计处',
'2008年加入大舍建筑设计事务所'
			 ]},
		{name:"王龙海",
experience:["1983年出生于河北",
"2007年毕业于同济大学建筑系，获建筑学学士学位",
"2007年加入大舍建筑设计事务所"]}
		]},{
title:"建筑师（按入职先后顺序排列）",
member:[{name:"李珺",
experience:["1983年出生于上海",
"2007年毕业于同济大学建筑系，获建筑学学士学位",
"2007年五合国际 助理建筑师",
"2008年加入大舍建筑设计事务所"]},
		{name:"宋崇芳",
experience:[ "1987年出生于江西",
 "2010年毕业于中国美术学院，获建筑学学士学位",
"2010年加入大舍建筑设计事务所"]}
]},
 {title:"行政管理",
member:[ { name:"孙苑婷",
experience:["1987年出生于上海",
"2009年毕业于上海商学院",
"2009年西部计划志愿者，服务于云南省龙陵县妇联",
"2010年加入大舍建筑设计事务所"]}]}]
      }
    }
  },
  methods:{
     gainSummaryData:function(){

     getSummaryData().then(function(){

     }).cathch(()=>{

     })
     },
      changeSummaryView:function(summary){
         this.activeName=summary.name;
      }
    },
  mounted:function(){
    
 this.gainSummaryData()


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
 width: 100%;
 height: auto;max-width: 100%; display: block;
 margin-top: 30px
}
.summary{
  position: relative;
}
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
   padding-top: 0cm;
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
.prizeList {
list-style-type:none;
 padding:0cm 0cm 0cm 0cm;
 margin-top: 0cm;
}
.partnerList {
  list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}
.expList {
  width: 350px;
  list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
}
.expListq{
  /* width: 350px; */
  list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
}
.exp {
  PaDding:0,0,0,0;
}
.memberList {
   list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}
</style>

