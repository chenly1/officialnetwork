<template>
  <div calss="workView">
   <el-container class="out-container">
  <el-aside >
        <div class="info">{{work.name}}<br>
        {{"建造地点："+work.address}}<br>
        {{"建筑面积："+work.area}}<br>
        {{"设计时间："+work.desTime}}<br>
        {{"竣工时间："+work.overTime}}
        </div>
  </el-aside>
    <el-main>
       <div class="subnav03">
           <img  src="http://www.deshaus.com/images/works/works17_04.jpg"/>
       </div>
   
        <div class="subnav04">
          <div class="footer">
          <a class="a1" href="worktext17.html">返回</a> 
               <div class="menu">
        <ul>
            <li><a href="javascript:void(0);">1</a></li>
            <li><a href="javascript:void(0);">2</a></li>
            <li><a href="javascript:void(0);">3</a></li>
            <li><a href="javascript:void(0);">4</a></li>
        </ul>
    </div>
         <a class="a3" href="works.html">简述</a>
          </div>
    </div>

    </el-main>

</el-container> 

  </div>
</template>
<script>
import {getWork} from '../../axios/axios'
export default {
  data () {
    return {
    showimg:"",
    work:{
      name:"龙美术馆（西岸馆）",
      address:"上海徐汇区龙腾大道",
      area:"33007平方米",
      desTime:"2011.11-2012.7",
      overTime:"2014.3",
      img:[],
    }
    }
  },
  methods:{
    getWorks:function(){

    },
    intoWork:function(){
      alert("12312312");
    },
    changeimg:function(work){
          this.showimg=work.img;
    }
    },
  mounted:function(){
      // this.getWorks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
 /* width: 100%; */
 height: auto; display: block;
  float: right;  
}
.workView{
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
  padding-right: 20%;
   color: #5b5b5b;
   line-height: 30px;
   padding-top: 0cm;
   position: relative;
  }
.info{
  padding-left: 50px
}
.footer{
  float: right;
  width: auto;
} 
 .subnav03{
   /* margin-top: 20px; */
  width:100%;
  height: 80%;
} 

 .subnav04{
   /* margin-top: 20px; */
  width:100%;
  height: 20%;
} 
.a1,.a3{
  text-decoration:none;
  float: right;
}
.menu{
   float: right;
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

    display: block; /* 此元素将显示为块级元素，此元素前后会带有换行符 */
    line-height: 1.35em; /* 行高 */
    padding: 4px 5px; /* 内部填充的距离 */
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
