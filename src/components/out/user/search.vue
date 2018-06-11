<template>
    <section>
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
<el-input
  type="textarea"
  :rows="30"
  placeholder="请输入简介内容"
  v-model="textarea">
</el-input>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </section>
</template>

<script>
import { getIntroduction } from '@/axios/axios'

export default {
    data() {
        return {
         
        }
    },
    methods: {
       
    },
    mounted() {
        this.getListData();
    }
}
</script>
<style scope>
.el-textarea{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
