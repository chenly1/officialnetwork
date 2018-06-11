<template>
  <div calss="memo">
  <el-container class="out-container">
    <el-main>
      <div class="memo" v-html="memo.content"></div>
    </el-main>
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
           let _that=this;
     getMemoyearlist().then(function(response){
       _that.yearList= response.data.data.yearList;
     }).catch((error)=>{
        console.log(error)
      })
      },
      changeimg:function(item){
        this.mediaImg=item.img;
      },
       getMemo:function(year){
       let _that=this;
     getMemo(year).then(function(response){
       _that.memo=response.data.data.memo;
       _that.memoImg=_that.memo.img;
     }).catch((error)=>{
        console.log(error)
      })
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
   /* color: #333; */
   width:  63%;  
   height: 60%;
  } 
 .el-main { 
  /* background-color: rgb(26, 105, 184);  */
   /* color: #333; */
   line-height: 30px;
   padding-left: 0;
   padding-top: 0cm;
   margin-top: 30px;
  }
  
.memo{
  padding-top: 0cm;
}

</style>
