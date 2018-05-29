<template>
  <div >
<el-container>
  <el-aside width="200px"><img src="../../static/sucai/img_overview01.jpg"/></el-aside>
  <el-main>
    <el-table 
      :data="tableData" :show-header="false"  @current-change="rowchange()" @cell-mouse-enter="cellmouseover"
      style="width: 100%">
      <el-table-column
        prop="project"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date" width="180">
      </el-table-column>
    </el-table>

  </el-main>
</el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
        tableData: [{
            project:"青浦下幼儿园",
            type:"建成",
            date: '2016-2009',
          }, {
            project:"青浦下幼儿园11",
            type:"建成",
            date: '2016-2009',
          }, {
            project:"青浦下幼儿园22",
            type:"方案",
            date: '2016-2009',
          }, {
            project:"青浦下幼儿园33",
            type:"建成",
            date: '2016-2009',
          }]
    }
  },
  methods:{
    rowchange:function(currentRow, oldCurrentRow){
      alert("123")
    },
    cellmouseover:function(row, column, cell, event){
     
      debugger


    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table__row{

}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
