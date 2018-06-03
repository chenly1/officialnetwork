<template>
  <div calss="works">
   <el-container class="out-container">
  <el-aside ><img  :src="showimg"/></el-aside>
    <el-main>
         <ul class="worksList" >
            <li @mouseenter="changeimg(work)"  @click="intoWork" class="work" v-for="(work,index) in works" :key="index">
                 <el-row :gutter="10">
                 <el-col :span="11">{{work.name}}</el-col>
                 <el-col :span="3">{{work.type}}</el-col>
                 <el-col :span="10">{{work.years}}</el-col>
             </el-row>

            </li>
         </ul>
    </el-main>

</el-container> 

  </div>
</template>
<script>
export default {
  data () {
    return {
    showimg:"",
    works:[ { id:"1",img:require('../../static/sucai/img_overview01.jpg'), name:"龙美术馆（西岸馆）",  type:"建成", years:" 2011-2014"},
 {  id:"2",img:require('../../static/sucai/img_overview02.jpg'),name:"青浦青少年活动中心 " ,type:" 建成 ", years:"2009-2012"},
 { id:"3",img:require('../../static/sucai/img_overview03.jpg'),name:"螺旋艺廊Ⅰ", type:" 建成", years :"2009-2011"},
 { id:"4",img:require('../../static/sucai/img_overview04.jpg'),name:"螺旋艺廊Ⅱ" ,type:"建成",  years:"2009-2011"},
 { id:"5",img:require('../../static/sucai/img_overview01.jpg'),name:"嘉定新城幼儿园" ,type:" 建成",years:" 2008-2010"},
 { id:"6",img:require('../../static/sucai/img_overview01.jpg'),name:"嘉定新城区燃气管理站",type:" 建成",years:" 2008-2009"},
 { id:"7",img:require('../../static/sucai/img_overview01.jpg'),name:"宁国禅寺", type:"方案", years: "2009"},
 { id:"8",img:require('../../static/sucai/img_overview01.jpg'),name:"西溪湿地艺术村E酒店", type:" 方案 ", years: " 2007"},
 { id:"9",img:require('../../static/sucai/img_overview01.jpg'),name:"吉山茶室", type:" 建成 ", years: "  2006-2008"},
 { id:"10",img:require('../../static/sucai/img_overview01.jpg'),name:"江苏软件园吉山基地6号地块", type:" 建成", years: " 2006-2008"},
 { id:"11",img:require('../../static/sucai/img_overview01.jpg'),name:"朱家角海事所", type:" 建成 ", years: "2004-2006"},
 { id:"12",img:require('../../static/sucai/img_overview01.jpg'),name:"青浦私营企业协会办公与接待中心", type:" 建成", years: " 2003-2005"},
 { id:"13",img:require('../../static/sucai/img_overview01.jpg'),name:"青浦夏雨幼儿园 ", type:"建成", years: " 2003-2005"},
 { id:"14",img:require('../../static/sucai/img_overview01.jpg'),name:"东莞理工电子系馆 ", type:"建成 ", years: " 2002-2004"},
 { id:"15",img:require('../../static/sucai/img_overview01.jpg'),name:"东莞理工文科楼", type:" 建成", years: " 2002-2004"},
 { id:"16",img:require('../../static/sucai/img_overview01.jpg'),name:"东莞理工计算机系馆" ,type:" 建成", years: " 2002-2004"},
 { id:"17",img:require('../../static/sucai/img_overview01.jpg'),name:"三连宅", type:" 建成", years: "2001-2003"},
 { id:"18",img:require('../../static/sucai/img_overview01.jpg'),name:"吉山茶室", type:" 建成 ", years: "  2006-2008"},
 { id:"19",img:require('../../static/sucai/img_overview01.jpg'),name:"江苏软件园吉山基地6号地块", type:" 建成", years: " 2006-2008"},
 { id:"20",img:require('../../static/sucai/img_overview01.jpg'),name:"朱家角海事所", type:" 建成 ", years: "2004-2006"},
 { id:"21",img:require('../../static/sucai/img_overview01.jpg'),name:"青浦私营企业协会办公与接待中心", type:" 建成", years: " 2003-2005"},
 { id:"22",img:require('../../static/sucai/img_overview01.jpg'),name:"青浦夏雨幼儿园 ", type:"建成", years: " 2003-2005"},
 { id:"23",img:require('../../static/sucai/img_overview01.jpg'),name:"东莞理工电子系馆 ", type:"建成 ", years: " 2002-2004"},
 { id:"24",img:require('../../static/sucai/img_overview01.jpg'),name:"东莞理工文科楼", type:" 建成", years: " 2002-2004"},
 { id:"25",img:require('../../static/sucai/img_overview01.jpg'),name:"东莞理工计算机系馆" ,type:" 建成", years: " 2002-2004"},
 { id:"26",img:require('../../static/sucai/img_overview01.jpg'),name:"三连宅", type:" 建成", years: "2001-2003"}]
    }
  },
  methods:{
    intoWork:function(){
      alert("12312312");
    },
    changeimg:function(work){
          this.showimg=work.img;
    }
    },
  mounted:function(){
    debugger
    this.showimg=this.works[0].img;
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
.works{
  position: relative;
}
.el-tabs .el-tabs--top{
  height: 20px;
}
.el-header{
 height:30px;
}
.el-tab-pane{
  height:1px
}
 .out-container {
   top: 10px;
   left:10px;
   right: 0;
   bottom: 0;
   margin: auto;
   position:absolute;
   /* background-color:rgb(0, 255, 170); */
   color: #5b5b5b;
   width:  1200px;  
   height: 600px;
  } 
.el-main { 
  /* background-color: rgb(26, 105, 184);  */
   color: #5b5b5b;
   line-height: 30px;
   padding-top: 0cm;
   margin-top: 30px;
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
    background-color: #bfcbd6; /* 背景色 */
    color: #465c71; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}
/* 所有class为menu的div中的ul中的a样式(鼠标点击元素时的样式) */
div.menu ul li a:active
{
    background-color: #465c71; /* 背景色 */
    color: #cfdbe6; /* 文字颜色 */
    text-decoration: none; /* 不显示超链接下划线 */
}
.worksList{
    list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}
.work:hover{
    color:rgba(58, 57, 54, 0.698);
}
</style>
