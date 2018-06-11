<template>
  <div calss="works">
   <el-container class="out-container">
  <el-aside ><img  :src="showimg"/></el-aside>
    <el-main>
         <ul class="worksList" >
            <li @mouseenter="changeimg(work)"  @click="intoWork(work)" class="work" v-for="(work,index) in works" :key="index">
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
import {getWorks} from '../../axios/axios'
export default {
  data () {
    return {
    showimg:"",
    works:""
    }
  },
  methods:{
    getWorks:function(){
    let _that=this;
     getWorks().then(function(response){
       _that.works = response.data.data.works;
       _that.showimg=response.data.data.works[0].img;
     }).catch((error)=>{
        console.log(error)
      })
    
    },
    intoWork:function(work){
       this.$router.push({ path: 'works/workView/'+work.id })
    },
    changeimg:function(work){
          this.showimg=work.img;
    }
    },
  mounted:function(){
      this.getWorks();
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
   /* color: #5b5b5b; */
   width:  63%;  
   height: 60%;
  } 
.el-main { 
  /* background-color: rgb(26, 105, 184);  */
   /* color: #5b5b5b; */
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
    color:rgb(44, 43, 43);
}
</style>
