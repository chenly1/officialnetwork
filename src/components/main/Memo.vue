<template>
  <div calss="memo">
  <el-container class="out-container">
  <el-aside ><img :src="memoImg"/></el-aside>
  <el-container>
    <el-main>
      <div class="memo" v-html="memo.content"></div>
    </el-main>
  </el-container>
</el-container> 

  </div>
</template>
<script>
import {getMemoyearlist,getMemo} from '../../axios/axios'
export default {
  data () {
    return {
      yearList:"",
      memoImg:"",
      memo:{
      }
    }
  },
  props:["showYear"],
  methods:{
      getMemoyearlist:function(){
    //        let _that=this;
    //  getMemoyearlist().then(function(response){
    //    _that.yearList= response.data.data.yearList;
    //  }).catch((error)=>{
    //     console.log(error)
    //   })
    this.yearList=[2010,2009,2008,2007,2006,2005,2004,2003,2002,2001];
      },
      changeimg:function(item){
        this.mediaImg=item.img;
      },
       getMemo:function(year){
    //    let _that=this;
    //  getMemo().then(function(response){
    //    _that.memo=response.data.data.memo;
    //    _that.memoImg=_that.memo.img;
    //  }).catch((error)=>{
    //     console.log(error)
    //   })
    if(year==2010){
    this.memo={img:"http://img1.imgtn.bdimg.com/it/u=1042801805,1615156274&fm=200&gp=0.jpg",content:"大舍参加于2010年9月23日于威尼斯开幕的由CA’ASI艺术馆举办的中国新锐建筑创作展，该展为2010年威尼斯双年展的外围展。12月9日，新锐展转至国内于北京百子湾艺术馆展出。2010年12月8日，柳亦春代表大舍应邀于中央美术学院做了题为“记忆的回响——大舍建筑作品”的演讲。2010年10月28日，柳亦春代表大舍应世界建筑杂志社、天津大学建筑学院邀请赴天津大学建筑学院演讲，演讲题为“记忆的回响——大舍建筑作品”。2010年10月25日，柳亦春代表大舍应邀于香港大学建筑系上海中心做了题为“记忆的回响——大舍建筑作品”的演讲。2010年7月13日，受巴黎市政府、法国巴黎大区政府、同济大学及上海城市规划协会的邀请，大舍合伙人柳亦春应邀于上海世博园城市最佳实践区巴黎大区展馆举行的“世博会巴黎大区展馆上海研讨会”上做了题为“Imagine Jiangnan（重构江南）”的演2010年6月3日，柳亦春代表大舍应邀于同济大学建筑城市规划学院做了题为“重构江南——大舍建筑作品”的演讲。2010年5月8日，受同济大学歌德学院和德国驻上海总领事馆文化教育处的邀请，大舍合伙人柳亦春在“都市论坛——中德可持续城市发展”论坛上做了题为“Imagine Jiangnan（重构江南）”的演讲。该论坛是德国在海外举行的最大规模的交流活动“德中同行”的一部分。大舍建筑作品同时参加了该活动中的“更新中国”主题展览，展览于9月5日在上海证大艺术馆举行。《时代建筑》2010/2，刊登了袁莉的文章《风景的引力——上海嘉定新城燃气门站办公楼的图纸阅读笔记》。《时代建筑》2010/7，刊登王方戟的文章《对话大舍——关于上海嘉定新城实验幼儿园的现场问答》。《世界建筑》2010/10，收录了获得“2010WA中国建筑奖”佳作奖的嘉定新城幼儿园。《设计新潮》第149期刊登了宋宝麟的文章《游移体块上的千窗百孔——嘉定新城幼儿园和燃气管理站》。"};
    }else{
       this.memo={img:"http://img3.imgtn.bdimg.com/it/u=932142782,2373738247&fm=200&gp=0.jpg",content:"大舍参加于2010年9月23日于威尼斯开幕的由CA’ASI艺术馆举办的中国新锐建筑创作展，该展为2010年威尼斯双年展的外围展。12月9日，新锐展转至国内于北京百子湾艺术馆展出。2010年12月8日，柳亦春代表大舍应邀于中央美术学院做了题为“记忆的回响——大舍建筑作品”的演讲。2010年10月28日，柳亦春代表大舍应世界建筑杂志社、天津大学建筑学院邀请赴天津大学建筑学院演讲，演讲题为“记忆的回响——大舍建筑作品”。2010年10月25日，柳亦春代表大舍应邀于香港大学建筑系上海中心做了题为“记忆的回响——大舍建筑作品”的演讲。2010年7月13日，受巴黎市政府、法国巴黎大区政府、同济大学及上海城市规划协会的邀请，大舍合伙人柳亦春应邀于上海世博园城市最佳实践区巴黎大区展馆举行的“世博会巴黎大区展馆上海研讨会”上做了题为“Imagine Jiangnan（重构江南）”的演2010年6月3日，柳亦春代表大舍应邀于同济大学建筑城市规划学院做了题为“重构江南——大舍建筑作品”的演讲。2010年5月8日，受同济大学歌德学院和德国驻上海总领事馆文化教育处的邀请，大舍合伙人柳亦春在“都市论坛——中德可持续城市发展”论坛上做了题为“Imagine Jiangnan（重构江南）”的演讲。该论坛是德国在海外举行的最大规模的交流活动“德中同行”的一部分。大舍建筑作品同时参加了该活动中的“更新中国”主题展览，展览于9月5日在上海证大艺术馆举行。《时代建筑》2010/2，刊登了袁莉的文章《风景的引力——上海嘉定新城燃气门站办公楼的图纸阅读笔记》。《时代建筑》2010/7，刊登王方戟的文章《对话大舍——关于上海嘉定新城实验幼儿园的现场问答》。《世界建筑》2010/"}; 
    }
    
    this.memoImg=this.memo.img;
    }
    },
   
  mounted:function(){
      this.getMemoyearlist();
  },
 watch:{
     showYear(newValue, oldValue) {  
        this.getMemo(newValue);
    }  
  },
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
   margin-top: 30px;
  }
  
.memo{
  padding-top: 0cm;
}

</style>
