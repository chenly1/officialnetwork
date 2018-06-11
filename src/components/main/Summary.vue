<template>
  <div calss="summary">
   <el-container class="out-container">
  <el-aside ><img  :src="summaryImage"/></el-aside>
  <el-container>
    <el-header style="height:30px;"> 
       <div class="menu">
        <ul>
            <li @click="changeSummaryView(summary)" v-for="summary in summarys" :key="summary.id"><a href="javascript:void(0);">{{summary.label}}</a></li>
        </ul>
    </div>
  </el-header> 
    <el-main>
       <div v-if="activeName=='introduction'" v-html="introduction" class="introduction"></div>   
       <div v-if="activeName=='partner'">
              <ul class="partnerList">
              <li   v-for="(part,index) in partner" :key="index" >
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
       <div v-if="activeName=='team'">
           <div calss="titleList" v-for=" team  in team" :key="team.title">
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
       <div v-if="activeName=='prize'">
          <ul class="prizeList">
              <li v-for="(pr,index ) in prize" :key="index" >
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
// import getSummaryData from '../../axios/axios'
import {getIntroduction,getPartner,getTeam ,getPrize} from '../../axios/axios'
export default {
  data () {
    return {
      activeName: 'introduction',
      summaryImage:"",
      summarys:[{id:1,label:"简介",name:"introduction"},
      {id:2,label:"合伙人",name:"partner"},
      {id:3,label:"团队",name:"team"},
      {id:4,label:"奖项",name:"prize"}],
      introduction:"",
      partner:"",
      team:"",
      prize:""
    }
  },
  methods:{
    getIntroduction:function(){
    let _that=this;
     getIntroduction().then(function(response){
       _that.introduction = response.data.data.introduction;
       _that.summaryImage=response.data.data.img;
     }).catch((error)=>{
        console.log(error)
      })
     },


    getPartner:function(){
    let _that=this;
     getPartner().then(function(response){
       _that.partner = response.data.data.partner;
       _that.summaryImage=response.data.data.img;
     }).catch((error)=>{
        console.log(error)
      })
     },

     getTeam:function(){
    let _that=this;
     getTeam().then(function(response){
       _that.team = response.data.data.team;
       _that.summaryImage=response.data.data.img;
     }).catch((error)=>{
        console.log(error)
      })
     },

     getPrize:function(){
    let _that=this;
     getPrize().then(function(response){
       _that.prize= response.data.data.prize;
       _that.summaryImage=response.data.data.img;
     }).catch((error)=>{
        console.log(error)
      })
     },

 changeSummaryView:function(summary){
       
       switch(summary.id)
             {
               case 1:
                this.getIntroduction();
                break;
              case 2:
                this.getPartner();
                break;
              case 3:
                this.getTeam();
                break;
                case 4:
                this.getPrize();
                 break;
             }
         this.activeName=summary.name;
      }
    },
  mounted:function(){
    
 this.getIntroduction();


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
    width:  63%;  
   height: 60%;
  } 
 .el-main { 
  /* background-color: rgb(26, 105, 184);  */
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
</style>

