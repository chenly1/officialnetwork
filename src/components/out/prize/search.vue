<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="query">
                <el-row>
                    <el-col :span="3">
                        <el-select v-model="query.BRXZ" placeholder="建档类型" clearable>
                            <el-option v-for="item in BRXZ" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="3">
                        <el-select v-model="query.isBind" placeholder="绑定用户" clearable>
                            <el-option v-for="item in isBind" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="3">
                        <el-select v-model="query.criteria" placeholder="查询条件" @change="display()">
                            <el-option v-for="item in criteria" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <template v-if='displayVal'>
                        <el-col :span="3">
                            <el-form-item>
                                <el-input v-model="query.parameter" placeholder=""></el-input>
                            </el-form-item>
                        </el-col>
                    </template>
                    <template v-else>
                        <el-col :span="9" style="margin-right: -15px;">
                            <el-form-item class="monthClass" style="margin-right: -10px;">
                                <el-select v-model="date.startMonth" placeholder="" filterable clearable>
                                    <el-option v-for="item in monthList" :key="item" :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="月" class="monthClass" style="margin-right: -5px;">
                            </el-form-item>
                            <el-form-item label="" class="dayClass" style="margin-right: -10px;">
                                <el-select v-model="date.startDay" placeholder="" filterable clearable>
                                    <el-option v-for="item in dayList" :key="item" :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="日  -" class="monthClass" style="margin-right: -5px;">
                            </el-form-item>
                            <el-form-item label="" class="monthClass" style="margin-right: -10px;">
                                <el-select v-model="date.endMonth" placeholder="" filterable clearable>
                                    <el-option v-for="item in monthList" :key="item" :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="月" class="monthClass" style="margin-right: -5px;">
                            </el-form-item>
                            <el-form-item label="" class="dayClass" style="margin-right: -10px;">
                                <el-select v-model="date.endDay" placeholder="" filterable clearable>
                                    <el-option v-for="item in dayList" :key="item" :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="日" class="monthClass" style="margin-right: 0px;">
                            </el-form-item>
                        </el-col>
                    </template>
                    <el-col :span="4">
                        <el-select v-model="query.orderBy" placeholder="排序">
                            <el-option v-for="item in orderBy" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-button v-on:click="getListData" icon="search">查询</el-button>
                </el-row>
            </el-form>
        </el-col>

        <el-table :data="tableData" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%">
            <el-table-column type="selection" width="45">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column label="儿童卡号" prop="JZKH" sortable min-width="80">
            </el-table-column>
            <el-table-column label="儿童姓名" prop="BRXM" sortable min-width="80">
            </el-table-column>
            <el-table-column label="出生日期" prop="CSNY" sortable>
            </el-table-column>
            <el-table-column label="建档类型" prop="XZMC" sortable>
            </el-table-column>
            <el-table-column label="建档日期" prop="JDSJ" sortable min-width="100">
            </el-table-column>
            <el-table-column label="注册用户" prop="mobilePhone" sortable min-width="100">
            </el-table-column>
            <el-table-column label="注册日期" prop="created" sortable min-width="100">
            </el-table-column>
            <!-- <el-table-column label="用户ID" prop="accountId" sortable min-width="100" v-if="false">
            </el-table-column> -->
        </el-table>

        <!--底部工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">发送消息</el-button>
            <el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange" :current-page="page.pageNum" :page-size="page.pageCount" :page-sizes="[10, 20, 50, 100]" :total="page.total" style="float:right;">
            </el-pagination>
        </el-col>

    </section>
</template>

<script>
import { findEmp } from '@/axios/axios'

export default {
    data() {
        return {
            listLoading: false, // 加载动画
            displayVal: true,// 查询输入框显示
            sels: [],// 列表选中列
            query: {
                criteria: 'BRXM',//查询条件
                parameter: '',// 查询参数
                timeFrame: '', // 时间范围
                isBind: '', // 是否绑定注册用户
                orderBy: '4',// 排序
                BRXZ: '' // 儿童类型
            },
            date: {
                startMonth: '',
                startDay: '',
                endMonth: '',
                endDay: '',
            },
            page: {
                total: 0,
                pageCount: 10,
                pageNum: 1
            },
            criteria: [
                {
                    value: "BRXM",
                    label: "儿童姓名"
                },
                {
                    value: "JZKH",
                    label: "儿童卡号"
                },
                {
                    value: "birthday",
                    label: "生日范围"
                }
            ],
            BRXZ: [
                {
                    value: "1",
                    label: "会员"
                },
                {
                    value: "2",
                    label: "普通"
                },
                {
                    value: "3",
                    label: "员工家属"
                }
            ],
            isBind: [
                {
                    value: "0",
                    label: "未绑定"
                },
                {
                    value: "1",
                    label: "已绑定"
                }
            ],
            monthList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            dayList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
            orderBy: [
                {
                    value: "4",
                    label: "建档时间倒序"

                },
                {
                    value: "5",
                    label: "建档日期顺序"

                },
                {
                    value: "2",
                    label: "出生日期倒序"

                },
                {
                    value: "3",
                    label: "出生日期顺序"

                },
                {
                    value: "0",
                    label: "注册时间倒序"
                },
                {
                    value: "1",
                    label: "注册时间顺序"

                }
            ],
            tableData: [],
            tableData2: [
                {
                    mobilePhone: '13500000001',
                    created: '2017-10-01',
                    BRXM: '何青哲',
                    JZKH: '0000000001',
                    type: 'member',
                    XZMC: '会员',
                    CSNY: '111',
                }, {
                    mobilePhone: '13500000002',
                    created: '2017-10-01',
                    BRXM: '李永欣',
                    JZKH: '0000000004',
                    type: 'consumer',
                    XZMC: '普通用户',
                    CSNY: '112',
                }, {
                    mobilePhone: '13500000003',
                    created: '2017-10-01',
                    BRXM: '艾云尼',
                    JZKH: '0000000005',
                    type: 'consumer',
                    XZMC: '普通用户',
                    CSNY: '113',
                }]
        }
    },
    methods: {
        // 获取table列表数据
        getListData() {
            
            this.listLoading = true;
            var that_ = this;
            var param_search;
            var startDate='';
            var endDate='';
            if (this.query.criteria == 'birthday') {
                if (this.date.startMonth != '' && this.date.startDay != '') {
                    startDate = this.date.startMonth + '-' + this.date.startDay;
                }
                if (this.date.endMonth != '' && this.date.endDay != '') {
                    endDate = this.date.endMonth + '-' + this.date.endDay;
                }
                param_search = 'pageNum=' + this.page.pageNum
                    + '&pageCount=' + this.page.pageCount
                    + '&startDate=' + startDate
                    + '&endDate=' + endDate
                    + '&BRXZ=' + this.query.BRXZ
                    + '&isBind=' + this.query.isBind
                    + '&orderBy=' + this.query.orderBy;
            } else {
                param_search = 'pageNum=' + this.page.pageNum
                    + '&pageCount=' + this.page.pageCount
                    + '&' + this.query.criteria
                    + '=' + this.query.parameter
                    + '&BRXZ=' + this.query.BRXZ
                    + '&isBind=' + this.query.isBind
                    + '&orderBy=' + this.query.orderBy;
            }
            // 
            findEmp(param_search).then(function(response) {
                // 
                that_.tableData = response.data.tableData;
                that_.page.total = response.data.total;
                that_.listLoading = false;
            }).catch(function(error) {
                console.log(error);
            });
        },
        // 分页
        handleCurrentChange(val) {
            this.page.pageNum = val;
            this.getListData();
        },
        // 页码大小
        handleSizeChange(val) {
            this.page.pageCount = val;
            this.getListData();
        },
        // 显示
        display() {
            // 
            if (this.query.criteria == 'birthday') {
                this.displayVal = false;
                this.query.parameter = '';
            } else {
                this.displayVal = true;
                this.date.startMonth = '';
                this.date.startDay = '';
                this.date.endMonth = '';
                this.date.endDay = '';
            }
        },
        // 批量选择
        selsChange: function(sels) {
            this.sels = sels;
        },
        // 批量操作事件
        batchRemove: function() {
        this.$router.push({ name:'消息管理_编辑',params: {children:this.sels} })


            console.log(this.sels);
            // var ids = this.sels.map(item => item.pid).toString();
            // this.$confirm('确认删除选中记录吗？', '提示', {
            //     type: 'warning'
            // }).then(() => {
            //     this.listLoading = true;
            //     let para = { ids: ids };
            //     // batchRemoveUser(para).then((res) => {
            //     //     this.listLoading = false;
            //     this.$message({
            //         message: '删除成功',
            //         type: 'success'
            //     });
            //     this.getListData();
            //     // });
            // }).catch(() => {

            // });
        },
    },
    mounted() {
        this.getListData();
    }
}
</script>

<style scoped>
.toolbar .el-select {
    /* border: 1px solid red; */
    margin-right: 10px;
    margin-bottom: 0;
}

.monthClass .el-select {
    width: 62px;
}

.dayClass .el-select {
    width: 62px;
}
</style>
