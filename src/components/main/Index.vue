<template>
  <div class="main">
<el-container >
  <el-main>
    <Summary v-if="show=='1'" calss="summary-outer"></Summary>
    <Works  v-if="show=='2'"></Works>
    <Media v-show="show=='3'" ref="media" :showYear="chooseYear" @outActiveNameChange="outActiveNameChange"></Media>
    <Memo   v-show="show=='4'" ref="memo" :showYear="chooseYear" ></Memo>
    <Contact v-if="show=='5'" ></Contact> 
  </el-main>
  <el-footer class="myfoot">
 
    <ul class="subnav02" v-if="(show==3&&activeName=='publish')||(show==4)">
            <li @click="changeYear(year)"  v-for="(year,index) in yearList" :key="index"><a href="javascript:void(0);">{{year}}</a></li></ul>
    <ul class="navigation">
            <li  v-for="(item,index) in items " :key="index" @click="changeView(item.id)" :class="{no_bg:index==items.length-1}"><a :class="{onlink:show==item.id}"  href="javascript:void(0);">{{item.name}}</a></li>
       </ul>

</el-footer>
</el-container>
  </div>
</template>

<script>
import getSummaryData from '../../axios/axios'
import Summary from './Summary.vue';
import Works from './Works.vue';
import Media from './Media.vue';
import Memo from './Memo.vue';
import Contact from './Contact.vue';
import bottomMenu from './bottomMenu.vue';
export default {
  components: {Summary,Works,Media,Memo,Contact,bottomMenu}, 
  data () {
    return {
      activeName:"",
      chooseYear:"2000",
      yearList:[],
      show:'1',
      items:[{id:1,name:"概述"},
      {id:2,name:"作品"},
      {id:3,name:"媒体"},
      {id:4,name:"记事"},
      {id:5,name:"联系"}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changeView:function(id){
        this.show=id
         if(id==3){
         this.yearList=this.$refs.media.yearList;
         this.chooseYear=this.$refs.media.yearList[0]
         this.activeName=this.$refs.media.activeName;
         }
         else if(id==4){
           this.yearList=this.$refs.memo.yearList;
            this.chooseYear=this.$refs.memo.yearList[0]
         }
    },
    outActiveNameChange:function(data){
      this.activeName=data;
    },
    itemClick:function(){
      alert("12313")
    },
  changeYear:function(year){
   this.chooseYear=year;
  }
  },
   mounted:function(){
    
    if(this.$route.params.show){
         this.show=this.$route.params.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary-outer{
margin:50px 50px 50px 50px;
padding:50px 50px 50px 50px;

}

  
  .el-main {
    /* background-color: #E9EEF3;  */
    height: 870px;
    color: #333;
    /* line-height: 160px; */
  }
  .myfoot{
    margin-left: 323px;
    margin-right: 350px;
  }



  body {FONT-SIZE: 12px; BaCKGROUND: #fff; COLOR: #5b5b5b; FONT-FaMILY: "Lucida Sans Unicode", "Lucida Grande", sans-serif; POSITION: relative; HEIGHT: 100%}
html {HEIGHT: 100%}
ol, ul {PaDDING-RIGHT: 0px; PaDDING-LEFT: 0px; PaDDING-BOTTOM: 0px; MaRGIN: 0px; PaDDING-TOP: 0px; liST-STYLE-TYPE: none}
a {CURSOR: pointer; TEXT-DECORaTION: none}
a:link {COLOR: #888}
a:visited {COLOR: #888}
a:active {COLOR: #cc0000; TEXT-DECORaTION: none}
a:actived {COLOR: #cc0000; TEXT-DECORaTION: none}
a:hover {COLOR: #cc0000; TEXT-DECORaTION: none}
a.onlink {COLOR: #cc0000}
.navigation {RIGHT: 10px; BOTTOM: 10px; POSITION: absolute}
.navigation li {PaDDING-RIGHT: 10px; PaDDING-LEFT: 10px; BaCKGROUND: url(http://www.deshaus.com/images/bg_nav.gif) no-repeat right 50%; FLOaT: left; PaDDING-BOTTOM: 0px; MaRGIN: 0px; PaDDING-TOP: 0px}
.navigation li a:hover {COLOR: #cc0000; TEXT-DECORaTION: none}
.navigation li.no_bg {PaDDING-RIGHT: 0px; BaCKGROUND: none transparent scroll repeat 0% 0%}
ul.subnav02 {LEFT: 10px; BOTTOM: 10px; POSITION: absolute}
ul.subnav02 li {FONT-SIZE: 17px; FLOaT: left}
ul.subnav02 li a {PaDDING-RIGHT: 10px}




.subnav03 {right: 0px; POSITION: absolute; TOP: 430px}
.subnav03 a {float: left; height:16px; line-height:16px; MaRGIN-RIGHT: 10px}
.subnav03 a.a3{ margin-right:0; padding-left:10px; background:url(http://www.deshaus.com/images/bg_nav.gif) left center no-repeat;}


</style>
<style>
::-webkit-scrollbar {/*滚动条整体样式*/
        width: 2px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
         /* border-radius: 10px;  */
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
    }
::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        /* border-radius: 10px;  */
        background: #EDEDED;
    }
</style>
