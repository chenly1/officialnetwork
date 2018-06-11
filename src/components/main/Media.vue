<template>
  <div calss="media">
  <el-container class="out-container">
  <el-aside ><img  :src="mediaImg"/></el-aside>
  <el-container>
    <el-header style="height:30px;"> 
     <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="summary in  summarys" :key="summary.id"     :label="summary.label" :name="summary.name"></el-tab-pane>
      </el-tabs>  -->
       <div class="menu">
        <ul>
            <li @click="changeMediaView(media)" v-for="media in medias" :key="media.id"><a href="javascript:void(0);">{{media.label}}</a></li>
        </ul>
    </div>
  </el-header> 
    <el-main>
       <div v-if="activeName=='publish'">
         <ul class="publishList" >
            <li  @mouseenter="changeimg(pub)" class="pub"  v-for="(pub,index) in publishList" :key="index" >{{pub.content}}</li>
         </ul>
         </div>  
         <div v-if="activeName=='comment'">
         <ul class="commentList" >
            <li   @click="getDetail(comm)"  @mouseenter="changeimg(comm)" class="comm"  v-for="(comm,index) in comments" :key="index">{{comm.content}}</li>
         </ul>
         </div>  

          <div v-if="activeName=='exhibition'">
         <ul class="exhtList" >
            <li  @mouseenter="changeimg(exh)" class="comm"  v-for="(exh,index) in exhibition" :key="index">
              <el-row :gutter="10">
                 <el-col :span="3">{{exh.year}}</el-col>
                 <el-col :span="21">{{exh.content}}</el-col>
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
import {getPublishyearlist,getPublish,getComments,getComment,getExhibition} from  '../../axios/axios'
export default {
  data () {
    return {
      yearList:"",
      publishList:"",
      comments:"",
      exhibition:"",
      mediaImg:"",
      activeName: 'publish',
      medias:[{id:1,label:"出版",name:"publish"},
      {id:2,label:"评论",name:"comment"},
      {id:3,label:"展览",name:"exhibition"}],
    }
  },
   watch:{
     showYear(newValue, oldValue) {  
        this.getPublish(newValue);
    }  
  },
  props:["showYear"],
  methods:{
        getPublishyearlist:function(){
     let _that=this;
     getPublishyearlist().then(function(response){
       _that.yearList = response.data.data.yearList;
     }).catch((error)=>{
        console.log(error)
      })
        },

     getPublish:function(id){
     let _that=this;
     getPublish(id).then(function(response){
       _that.publishList = response.data.data.publish;
       _that.mediaImg= _that.publishList[0].img
     }).catch((error)=>{
        console.log(error)
      })

        },
    getComments:function(){
     let _that=this;
     getComments().then(function(response){
       _that.comments= response.data.data.commentList;
       _that.mediaImg=_that.comments[0].img
     }).catch((error)=>{
        console.log(error)
      })
          },  
    
       getExhibition:function(){
     let _that=this;
     getExhibition().then(function(response){
       debugger
       _that.exhibition= response.data.data.exhibitions;
       _that.mediaImg=_that.exhibition[0].img
     }).catch((error)=>{
        console.log(error)
      })
        },   

      changeMediaView:function(media){
           debugger
           switch(media.id)
             {
               case 1:
                this.getPublishyearlist(this.yearList[0]);
                break;
              case 2:
                this.getComments();
                break;
              case 3:
                this.getExhibition();
                break;
             }

         this.activeName=media.name;
         this.$emit('outActiveNameChange',media.name,'lalala');
      },
      changeimg:function(item){
        this.mediaImg=item.img;
      },
      getDetail:function(comm){
         window.open(window.location.origin + '/#/media/commentView/'+comm.id)
      }
    },
 
  mounted:function(){
       this.getPublishyearlist();
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
   /* color: #333; */
   width:  63%;  
   height: 60%;
  } 
 .el-main { 
  /* background-color: rgb(26, 105, 184);  */
   /* color: #333; */
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
    padding-right: 20px;
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
.publishList{
  list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}

.pub:hover{
    color:rgb(44, 43, 43);
}
.commentList{
   list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}
.comm:hover{
  color:rgb(44, 43, 43);
}
.exhtList{
     list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}
.exh{
  color:rgba(58, 57, 54, 0.698);
}
</style>
