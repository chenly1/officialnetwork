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
        <ul class="subnav02">
            <li v-for="(img,index) in work.img" @click="changeimg(img)"   :key="index"><a href="javascript:void(0);">index</a></li>
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
import {getWorks} from '../../axios/axios'
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
    getWork:function(id){
       let _that=this;
       getWork(id).then(function(response){
         _that.work=response.data.data.work
         _that.showimg=work.img[0];
       }).catch((error)=>{
          console.log(error)
       })

    },
    intoWork:function(){
       this.$route.go(-1)
    },
    changeimg:function(img){
          this.showimg=work.img;
    }
    },
  mounted:function(){
      this.$route.param.id
      this.getWork(id)
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
   /* color: #5b5b5b; */
   width:  1200px;  
   height: 600px;
  } 
.el-main { 
  /* background-color: rgb(26, 105, 184);  */
  padding-right: 20%;
   /* color: #5b5b5b; */
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
.a1{
  padding-left: 10px
}
.menu{
   float: right;
}


ol, ul {PaDDING-RIGHT: 0px; PaDDING-LEFT: 0px; PaDDING-BOTTOM: 0px; MaRGIN: 0px; PaDDING-TOP: 0px; liST-STYLE-TYPE: none}
a {CURSOR: pointer; TEXT-DECORaTION: none}
a:link {COLOR: #888}
a:visited {COLOR: #888}
a:active {COLOR: #cc0000; TEXT-DECORaTION: none}
a:actived {COLOR: #cc0000; TEXT-DECORaTION: none}
a:hover {COLOR: #cc0000; TEXT-DECORaTION: none}
a.onlink {COLOR: #cc0000}
ul.subnav02 {LEFT: 10px; BOTTOM: 10px;}
ul.subnav02 li { FLOaT: left; padding-left: 10px}
/* ul.subnav02 li a {PaDDING-RIGHT: 10px} */
</style>
