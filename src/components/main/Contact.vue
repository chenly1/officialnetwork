<template>
  <div calss="contact">
  <el-container class="out-container">
    <el-aside ><img  :src="contactImg"/></el-aside>
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
import {getContact} from '../../axios/axios'
export default {
  data () {
    return {
      contactImg:"",
      contact:{}
    }
  },
  methods:{
    getContact:function(){
        let _that=this;
     getContact().then(function(response){
       debugger
       _that.contact = response.data.data.contact;
       _that.contactImg=_that.contact.img
     }).catch((error)=>{
        console.log(error)
      })
    }
  
    },
  mounted:function(){
     this.getContact();
  },
  watch:{

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
   margin-top: 30px;
  }

.marginout{
  margin-top: 60px
}
</style>
