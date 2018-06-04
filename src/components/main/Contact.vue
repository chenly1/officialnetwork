<template>
  <div calss="contact">
  <el-container class="out-container">
    <el-aside ><img  :src="contact.img"/></el-aside>
    <el-main>
                     <el-row :class="{marginout:con.label=='工程联络信箱'}"  v-for="(con,index) in contact.context" :key="index" :gutter="10">
                          <el-col :span="8">{{con.label}}</el-col>
                          <el-col :span="16">{{con.text}}</el-col>
                     </el-row>

    </el-main>
</el-container> 

  </div>
</template>
<script>
export default {
  data () {
    return {
      memoImg:"",
      contact:{img:require('../../static/sucai/img_overview01.jpg'),
      context:[{label:"地址",text:"上海市徐汇区龙腾大道2555号16栋"},
{label:"邮编",text:"200232"},
{label:"电话",text:"(8621) 64278928"},
{label:"传真",text:"(8621) 64278928"},
{label:"工程联络信箱",text:" deshaus@126.com"},
{label:"商务媒体信箱",text:" info@deshaus.com"},
{label:"招聘实习信箱",text:" deshaus.sh@163.com"}]

      }
      
    }
  },
  props:["showYear"],
  methods:{
      changeimg:function(item){
        this.mediaImg=item.img;
      },
    },
  mounted:function(){
      // this.mediaImg=this.mediaView.publish[0].publishList[0].img;
  },
  watch:{
    showYear:{
      immediate:true,
      handler:function(){
        console.log(this.showYear)//根据年份获取相应的记事内容
     }
    }
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
.contact{
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

.marginout{
  margin-top: 60px
}
</style>
