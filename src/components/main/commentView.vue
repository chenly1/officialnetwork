<template>
  <div calss="works">
   <el-container class="out-container">
    <el-main>
           <el-row :gutter="10">
                 <el-col :span="21" class="title">{{commView.title}}</el-col>
                 <el-col :span="3"  class="author" style="padding-left: 5px; padding-right: 20px;">{{commView.author}}</el-col>
                 <div style="padding-left: 5px; padding-right: 20px;" v-html="commView.content"></div>
             </el-row>
    </el-main>
    <!-- <el-footer class="return">
      <div @click="goback">返回</div>
    </el-footer> -->

</el-container> 

  </div>
</template>
<script>
export default {
  data () {
    return {
      commView:{
        title:"我是你哥",
        content:'1978年，莫扎特的歌剧《唐璜》被拍成电影。导演Joseph Losey将电影中几乎所有的布景都设置在帕拉第奥（Andrea Palladio）设计的建筑中。从维琴察郊区的圆厅别墅（La Rotonda），到市中心的巴西利卡（Palazzo della Ragione），到奥林比亚剧场（Teatro Olimpico），再到Treviso的埃莫别墅（Villa Emo）。根据剧情的需要，每座建筑的真实状态都被改变。公共建筑被改变为私人府邸、剧场里的布景被假设为真实的场景、次要的空间被表现为主要的空间。圆厅别墅则被设置为电影中最主要的场景——唐璜的家。最让人感兴趣的是，通过电影的剪接，原本在郊外山丘上独立的圆厅别墅被描写成临河而建的房子，别墅的一侧成了波光粼粼的水Rafael Moneo认为建筑根植于基地之中，基地是所有建筑无可避免的第一种材料。注1按照这种观点，我们可以认为在电影《唐璜》中，导演改变的不是圆厅别墅在视觉上的效果，而是这座建筑的基本材料的特征。这种具有支配性的材料被人从延绵起伏的山地偷换为平展轻柔的水面。从而使建筑在符合剧本中情节要求的同时呼应了主人公的性格。地面不但是建筑与基地的纽带，也是建筑的围合面中人唯一不得不接触的部分。地面材料在建筑中的重要作用使Losey得以在不用变动圆厅别墅形象的前提下改变了它的性格。在大舍建筑工作室设计的三连宅中，我感受到相似的地面材料对建筑的作用。在四周坡顶独立住宅的映衬下“三连宅”显得非常独特。它那封闭而结实的外观也衬托了建筑内向的开敞和透明。简单地说，三连宅是三个横向空间支撑着的三个纵向空间，下面的三个横向空间之间是相互开敞的，上面的纵向空间则是相互独立的。它是设计来给三个能够共享基本生活设施（都集中在建筑的一层），但又有自己私密领域（建筑二楼三个独立的单元）的朋友的周末居所。建筑中最先吸引我的是底层主空间与底层其它空间之间的高差。这是一个被用来强调主空间地位的高差，45公分高。虽然它的用意十分明确，但是产生的效果却超出了简单的功能性要求。这个高度是层面间的差值，又是一个座席的高度。人们十分自然地坐卧其上，仿佛这不是地面的一部分，而是一个大家具。一个清晰的高与低之间的界限由于被人不断地占据的可能性而产生了相当的厚度，并开始变得含糊。经历这个高差是一个从正常室内地面往下走的过程。处于低处的空间甚至比内院还低。不过正是这个颠倒了建筑室内外高低关系的空间塑造了一个等同于河埠头的景象。这个室内 “河埠头”的铺地材料引起了我的注意。它是用建筑师在苏州太平的一家砖厂特地挑选来的方砖满铺的。方砖使用的是与金砖一样的制作工艺，只是尺寸小了许多。而制作方砖的厂所在的地区正是明清为北京皇家建筑提供金砖的地方。从视觉感受上说，这种材料引起的是关于传统建筑的联想。然而，它作为地面铺装材料后所产生的性格暗示了一个有趣的结果。砖被设想为一种受压的材料。Louis Kahn对砖的经典发问是这种观点的证明。他问砖想成为什么，砖回答说想成为“拱”。与被相互挤压在拱内的砖相比，作为铺地的砖不必承受巨大的压力，但是它必须接受不断的摩洗。它经历的不是瞬间产生、可以测算而且持续稳定的力；而是必须用时间来衡量的，缺乏规律并且永无至尽的力。在这种力的作用下，砖被不断磨损，不再显得坚硬沉重，而是表现出一种在常态下无法被观察出来的柔软、细腻的性格。这种柔软和细腻依靠的不是短时间的机械抛光，而是长期的生活打磨。砖的这种性格在诸多砖墁地实例中表现无疑。在时间的催促下，被人不断摩洗的砖最终表现出丝绸般光滑细腻的表面质感。这时，这种固态的材料在本质上接近于水的质感。由于受磨程度的区别，砖的表面还会略微地起伏，就象水面的荡漾。砖铺地表面颜色的深浅随着周围湿度的变化而变化，也象水面色彩随着环境光线的变化而变化一于是，我们十分容易地建立起三连宅室内“河埠头”与象水一般质感地面材料间的联想，进而建立起三连宅在地面材料的作用上与Losey所描写的圆厅别墅之间的联想。Losey利用剪接技巧来达到偷换建筑基本材料的目的，三连宅则依靠内部空间的逻辑展示了材料的魅力。其中建筑底层的45公分高差起到了关键的作用。',
        author:"王芳济"
      }
  }},
  methods:{
  goback:function(){
 this.$router.go(-1)
  }
    },
  mounted:function(){
    alert(this.$route.params.id)
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
   margin-bottom: 30px;
  }
  .title{
    text-align: center
  }
  .author{
    text-align: right;
   
  
  }
  .retrun{
    text-align: left;
  }
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
