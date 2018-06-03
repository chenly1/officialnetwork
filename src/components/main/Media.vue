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
       <div v-show="activeName=='publish'">
         <ul class="publishList" v-for="(pub,index) in mediaView.publish" :key="index" v-if="pub.year==showYear" >
            <li  @mouseenter="changeimg(item)" class="pub" v-for="(item,index) in pub.publishList" :key="index" >{{item.content}}</li>
         </ul>
         </div>  
         <div v-show="activeName=='comment'">
         <ul class="commentList" >
            <li   @click="getDetail(comm)"  @mouseenter="changeimg(comm)" class="comm"  v-for="(comm,index) in mediaView.comment" :key="index">{{comm.content}}</li>
         </ul>
         </div>  

          <div v-show="activeName=='exhibition'">
         <ul class="exhtList" >
            <li  @mouseenter="changeimg(exh)" class="comm"  v-for="(exh,index) in mediaView.exhibition" :key="index">
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
export default {
  data () {
    return {
      yearList:[2010,2009,2008,2007,2006,2005,2004,2003,2002],
      mediaImg:"",
      activeName: 'publish',
      medias:[{id:1,label:"出版",name:"publish"},
      {id:2,label:"评论",name:"comment"},
      {id:3,label:"展览",name:"exhibition"}],
       mediaView:{publish:[
{ year:"2010",publishList:[
{img:require('../../static/sucai/img_overview01.jpg'),content:"《时代建筑》2006/1，刊登了陈璐的文章《对青浦私营企业协会办公楼与夏雨幼儿园的比较阅读》，同时刊登了大舍的文章《设计与完成——青浦私营企业协会办公楼设计》。"},
{img:require('../../static/sucai/img_overview02.jpg'),content:"《建筑师》2006/4，刊登了《思想无言——“大舍”主创建筑师访谈》以及彭怒的文章《“建造”与“观念”——评大舍的青浦私营企业协会办公楼》。"},
{img:require('../../static/sucai/img_overview03.jpg'),content:"由荷兰Nai Publishers出版的《中国当代》收录了青浦夏雨幼儿园"},
{img:require('../../static/sucai/img_overview04.jpg'),content:"意大利杂志《AREA》第85期收录了青浦夏雨幼儿园。"},
{img:require('../../static/sucai/img_overview02.jpg'),content:"荷兰杂志《de Architect》2006/5，收录了青浦私营企业协会办公与接待中心。"}]},
{ year:"2009",publishList:[{img:require('../../static/sucai/img_overview02.jpg'),content:"《时代建筑》2006/1，刊登了陈璐的文章《对青浦私营企业协会办公楼与夏雨幼儿园的比较阅读》，同时刊登了大舍的文章《设计与完成——青浦私营企业协会办公楼设计》。"},
{img:require('../../static/sucai/img_overview02.jpg'),content:"《建筑师》2006/4，刊登了《思想无言——“大舍”主创建筑师访谈》以及彭怒的文章《“建造”与“观念”——评大舍的青浦私营企业协会办公楼》。"},
{img:require('../../static/sucai/img_overview02.jpg'),content:"由荷兰Nai Publishers出版的《中国当代》收录了青浦夏雨幼儿园"},
{img:require('../../static/sucai/img_overview02.jpg'),content:"意大利杂志《AREA》第85期收录了青浦夏雨幼儿园。"},
{img:require('../../static/sucai/img_overview02.jpg'),content:"荷兰杂志《de Architect》2006/5，收录了青浦私营企业协会办公与接待中心。"}]}
        ],
 comment:[{id:1,content:"《漂浮三连宅》",img:require('../../static/sucai/img_overview01.jpg')},
 {id:2,content:"《大舍在东莞理工学院－电子系馆、计算机系馆、文科楼的拼图》",img:require('../../static/sucai/img_overview02.jpg')},
{id:3, content:"《“建造”与“观念”——评大舍的青浦私营企业协会办公与接待中心》",img:require('../../static/sucai/img_overview03.jpg')},
{id:4,content:"《取与舍：对夏雨幼儿园建筑构思的评论》",img:require('../../static/sucai/img_overview04.jpg')},
{id:5,content:"《记忆的艺术——关于大舍建筑设计事务所建筑作品的思考》",img:require('../../static/sucai/img_overview01.jpg')},
{id:6,content:"《大舍的“型”》",img:require('../../static/sucai/img_overview01.jpg')},
{id:7,content:"《风景的引力——上海嘉定新城燃气门站办公楼的图纸阅读笔记》",img:require('../../static/sucai/img_overview01.jpg')},
{id:8,content:"《轻清江南》",img:require('../../static/sucai/img_overview01.jpg')}] ,
exhibition:[{year:"2002年",content:'“都市营造”2002上海双年展，上海美术馆',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2003年",content:' “那么，中国呢？”当代中国艺术展 ，法国巴黎蓬皮杜中心',img:require('../../static/sucai/img_overview02.jpg')},
{year:"2003年",content:' “建与筑”当代中国建筑展，德国杜塞多夫',img:require('../../static/sucai/img_overview03.jpg')},
{year:"2004年",content:' “东南西北”建筑展，法国波尔多arc en reve画廊',img:require('../../static/sucai/img_overview04.jpg')},
{year:"2004年",content:' “状态”当代中国青年建筑师作品8人展，北京中华世纪坛',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2005年",content:' “城市，开门”首届深圳城市/建筑双年展，深圳OCAT艺术中心',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2006年",content:' “当代中国”建筑与艺术展 荷兰鹿特丹荷兰建筑学院(NAI)',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2008年",content:' “创意中国”当代中国设计展，英国伦敦V&A博物馆',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2008年",content:' “建筑乌托邦”中国新锐建筑事务所设计展，比利时布鲁塞尔CIVA建筑与都市中心',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2008年",content:' “位置”中国新生代建筑师肖像，法国巴黎夏佑宫法国国家建筑与遗产之城博物馆',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2009年",content:' “不自然”设计展，北京天安时间当代艺术中心',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2009年",content:' 中国当代建筑展，西班牙加的斯建筑学院',img:require('../../static/sucai/img_overview01.jpg')},
{year:"2010年",content:' 中国新锐建筑创作展，意大利威尼斯建筑双年展CA’ASI艺术馆',img:require('../../static/sucai/img_overview01.jpg')}]
       }
       
    }
  },
  props:["showYear"],
  methods:{
      changeMediaView:function(media){
         debugger
         this.activeName=media.name;
         this.$emit('outActiveNameChange',media.name,'lalala');
      },
      changeimg:function(item){
        this.mediaImg=item.img;
      },
      getDetail:function(comm){
        debugger
         window.open(window.location.origin + '/#/media/commentView/'+comm.id)
      }
    },
  mounted:function(){
      this.mediaImg=this.mediaView.publish[0].publishList[0].img;
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
/* .el-tabs .el-tabs--top{
  height: 20px;
}
.el-header{
 height:30px;
}
.el-tab-pane{
  height:1px
} */
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
.publishList{
  list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}

.pub:hover{
    color:rgba(58, 57, 54, 0.698);
}
.commentList{
   list-style-type:none;
  padding:0cm 0cm 0cm 0cm;
  margin-top: 0cm;
}
.comm:hover{
  color:rgba(58, 57, 54, 0.698);
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
