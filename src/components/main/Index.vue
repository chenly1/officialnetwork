<template>
  <div class="main">
<el-container >
  <el-main>
    <Summary v-show="show=='1'" calss="summary-outer"></Summary>
    <Works  v-show="show=='2'"></Works>
    <Media v-show="show=='3'"></Media>
    <Memo   v-show="show=='4'"></Memo>
    <Contact v-show="show=='5'"></Contact> 
  </el-main>
  <el-footer>
  <el-row>
  <el-col :span="12"> 
    <div style="width:60px"></div>
    <ul class="subnav02" v-show="show==3||show==4">
        	<li><a class="onlink" href="#">2010</a></li>
            <li><a href="publication2009.html">2009</a></li>
            <li><a href="publication2008.html">2008</a></li>
            <li><a href="publication2007.html">2007</a></li>
            <li><a href="publication2006.html">2006</a></li>
            <li><a href="publication2005.html">2005</a></li>
            <li><a href="publication2004.html">2004</a></li>
            <li><a href="publication2003.html">2003</a></li>
            <li><a href="publication2002.html">2002</a></li></ul>
    <ul class="navigation">
            <li  v-for="(item,index) in items "   :key="index" @click="changeView(item.id)" :class="{no_bg:index==items.length-1}"><a :class="{onlink:show==item.id}"  href="javascript:void(0);">{{item.name}}</a></li>
            <!-- <li><a href="javascript:void(0);">作品</a></li>
            <li><a href="javascript:void(0);">媒体</a></li>
            <li><a href="javascript:void(0);">记事</a></li>
            <li class="no_bg"><a href="javascript:void(0);">联系</a></li> -->
       </ul>

  </el-col>
</el-row>
</el-footer>
</el-container>
  </div>
</template>

<script>
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
    },
    itemClick:function(){

      alert("12313")
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
 /* .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */
  
  .el-main {
    /* background-color: #E9EEF3;  */
    height: 870px;
    color: #333;
    /* line-height: 160px; */
  }
  
  /* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }  */
   /* .el-container {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;

  } */
  body {FONT-SIZE: 12px; BaCKGROUND: #fff; COLOR: #5b5b5b; FONT-FaMILY: "Lucida Sans Unicode", "Lucida Grande", sans-serif; POSITION: relative; HEIGHT: 100%}
html {HEIGHT: 100%}
img {border:0;}
ol, ul {PaDDING-RIGHT: 0px; PaDDING-LEFT: 0px; PaDDING-BOTTOM: 0px; MaRGIN: 0px; PaDDING-TOP: 0px; liST-STYLE-TYPE: none}
.clearFix:unknown {CLEaR: both; DISPLaY: block; VISIBIliTY: hidden; HEIGHT: 0px; content: " "}
.clearFix {ZOOM: 1}
.clear {CLEaR: both}
a {CURSOR: pointer; TEXT-DECORaTION: none}
a:link {COLOR: #888}
a:visited {COLOR: #888}
a:active {COLOR: #cc0000; TEXT-DECORaTION: none}
a:actived {COLOR: #cc0000; TEXT-DECORaTION: none}
a:hover {COLOR: #cc0000; TEXT-DECORaTION: none}
a.onlink {COLOR: #cc0000}
.welcome {MaRGIN-TOP: -5px; LEFT: 50%; MaRGIN-LEFT: -180px; WIDTH: 360px; POSITION: absolute; TOP: 50%; HEIGHT: 20px}
.welcome a {BaCKGROUND-POSITION: center center; DISPLaY: none; FLOaT: left; MaRGIN: 2px 0px 3px; OVERFLOW: hidden; WIDTH: 180px; TEXT-INDENT: -9999em; BaCKGROUND-REPEaT: no-repeat; HEIGHT: 15px}
.welcome #pic1 {BaCKGROUND-IMaGE: url(http://www.deshaus.com/images/welcome_cn.gif)}
.welcome #pic2 {BaCKGROUND-IMaGE: url(http://www.deshaus.com/images/welcome_en.gif)}

/*#bannerArea {OVERFLOW: hidden; WIDTH: 775px}
#bannerArea table tr td img{border-left:1px solid #fff; border-right:1px solid #fff;}
*/
.pageHome {MaRGIN-TOP: -235px; LEFT: 50%; MaRGIN-LEFT: -387px; WIDTH: 775px; POSITION: absolute; TOP: 50%; HEIGHT: 450px}
#wrap {MaRGIN-TOP: -180px; LEFT: 50%; MaRGIN-LEFT: -387px; WIDTH: 775px; POSITION: absolute; TOP: 50%; HEIGHT: 340px}
.navigation {RIGHT: 10px; BOTTOM: 10px; POSITION: absolute}
.navigation li {PaDDING-RIGHT: 10px; PaDDING-LEFT: 10px; BaCKGROUND: url(http://www.deshaus.com/images/bg_nav.gif) no-repeat right 50%; FLOaT: left; PaDDING-BOTTOM: 0px; MaRGIN: 0px; PaDDING-TOP: 0px}
.navigation li a:hover {COLOR: #cc0000; TEXT-DECORaTION: none}
.navigation li.no_bg {PaDDING-RIGHT: 0px; BaCKGROUND: none transparent scroll repeat 0% 0%}
ul.subnav02 {LEFT: 10px; BOTTOM: 10px; POSITION: absolute}
ul.subnav02 li {FONT-SIZE: 17px; FLOaT: left}
ul.subnav02 li a {PaDDING-RIGHT: 10px}
#main {liNE-HEIGHT: 20px; HEIGHT: 175px}
#main .conImg {FLOaT: left; MaRGIN: 4px 2px 0px 0px;}
#main ul.subnav {FLOaT: left}
#main ul.subnav li {PaDDING-BOTTOM: 58px}
#main ul.subnav2 {FLOaT: left}
#main ul.subnav2 li {PaDDING-BOTTOM: 32px}

#main .con {MaRGIN-LEFT: 240px}
#main .con ul {MaRGIN-BOTTOM: 20px}
#main .con ul li span {MaRGIN-RIGHT: 10px}
#main .con .overview1 {FLOaT: left; MaRGIN-BOTTOM: 20px; margin-right:40px; WIDTH: 210px;}
#main P {margin:0;padding:0 0 14px 0;}
#main .con ol.er{margin-bottom:10px;}
#main .con ol.er li span{margin-right:10px;}
.works ul.resume {FLOaT: left; WIDTH: 170px}
.works ul.resume ul {WIDTH: 165px; BOTTOM: 24px; POSITION: absolute}
.works .jqueryShowDoor {BaCKGROUND: #fff; FLOaT: right; WIDTH: 595px; HEIGHT: 425px}
.works .jqueryShowDoor .inner{ width:9999px; float:left;}
.works .jqueryShowDoor .item{  float:left;  overflow:hidden;}
.works .jqueryShowDoor .item img{ width:595px; height:425px; }

.worksList li {TEXT-INDENT: 0px; ZOOM: 1; }
.worksList li:after {CLEaR: both; DISPLaY: block; VISIBIliTY: hidden; HEIGHT: 0px; content: " "}
.worksList li span {FLOaT: left; WIDTH: 330px;}
.worksList li span.allname {FLOaT: left; WIDTH: 480px}
.worksList li span.type {WIDTH: 50px}
.worksList li span.type2 {WIDTH: 100px}
.worksList li span.date {WIDTH: 80px; _line-height:12px; }
.worksList li span.allworks{ margin-top:10px;}
.worksList li a{ COLOR: #aaa;}
h1 {FONT: 12px normal; TEXT-aliGN: center}
h1 span {PaDDING-RIGHT: 10px; FLOaT: right}
.post p{text-indent:25px;}
h2{font:12px normal;margin:0 0 20px 0;}
h3{font:12px normal; margin:30px 0 20px 0;}
#slideDoor1 {WIDTH: 595px; POSITION: relative; HEIGHT: 450px}

.subnav03 {right: 0px; POSITION: absolute; TOP: 430px}
.subnav03 a {float: left; height:16px; line-height:16px; MaRGIN-RIGHT: 10px}
.subnav03 a.a3{ margin-right:0; padding-left:10px; background:url(http://www.deshaus.com/images/bg_nav.gif) left center no-repeat;}


.Container {OVERFLOW: hidden; POSITION: relative; HEIGHT: 175px}
.Scroller-Container {PaDDING-RIGHT: 30px; PaDDING-LEFT: 5px; POSITION: absolute}
.Scrollbar-Track {RIGHT: 0px; WIDTH: 3px; POSITION: absolute; TOP: 0px; HEIGHT: 175px; BaCKGROUND-COLOR: #d4d4d4}
.Scrollbar-Handle {LEFT: 0px; WIDTH: 3px; CURSOR: pointer; POSITION: absolute; TOP: 0px; HEIGHT: 60px; BaCKGROUND-COLOR: #535353}
.Scrollbar-Handle:hover {BaCKGROUND: #999}
.Container2 {HEIGHT: 420px}
.Container2Bar .Scrollbar-Track {HEIGHT: 420px}
.activeImg {FLOaT: left; OVERFLOW: hidden; WIDTH: 170px; MaRGIN-RIGHT: 3px; HEIGHT: 175px}
.activeImg img {DISPLaY: none}
.active ul li {MaRGIN-BOTTOM: 7px; liNE-HEIGHT: 16px; line-height:16px; overflow:hidden;/* float:left;*/  }
.active ul li a {CURSOR: pointer; COLOR: #999}
.active ul li.nolink{color:#999}
.active ul li a:hover { color:#333;}
.active ul li a.link {}
.active ul li a.hover{CURSOR: pointer; COLOR: #5b5b5b;;}
.contact .emailList {MaRGIN-TOP: 40px}
.contact .emailList span {MaRGIN-RIGHT: 7px}
ul.worktext{padding-bottom:30px;}




/* 滚动条css */
 ::-webkit-scrollbar {  
        width: 3px;  
        height: 4px;  
         background-color: rgb(161, 31, 37);  
      }  
      定义滚动条轨道 内阴影+圆角  
      ::-webkit-scrollbar-track {  
        /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);   */
        /* background:#DDDDDD;   */
      }  
      定义滑块 内阴影+圆角
      ::-webkit-scrollbar-thumb {  
        border-radius: 3px;  
        height: 4px; 
        /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);   */
        background-color:#555555;  
      }  
      ::-webkit-scrollbar-thumb:hover {  
         border-radius: 3px;  
        /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);   */
        background-color:#333333;  
      } 
</style>
