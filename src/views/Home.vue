<template>
    <div class="home">
        <h1 class="title">公告：</h1>
        <div class="texts">
            <el-table
                    :data="tableData"
                    style="width: 800px">
                <el-table-column
                        label="序号"
                        prop="noticeId"
                        width="100">
                </el-table-column>
                <el-table-column
                        label="标题"
                        prop="noticeTitle">
                </el-table-column>
                <el-table-column
                        label="发布日期"
                        prop="noticeDate">
                </el-table-column>

                <el-table-column
                        align="right">
                    <template slot-scope="scope">
                        <el-tooltip content="查看详情" placement="top">
                            <el-button
                                    size="mini"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)" icon="el-icon-edit"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="page.total">
            </el-pagination>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                tableData: [],
                roomOption:[],
                dialogFormVisible: false,
                dialogFormVisibleUpdate: false,
                form: {

                },
                page: {
                    total: 1,
                },
                formUpdate: {
                    userId:"",
                    username: "168111545101",
                    password: "",
                    name: "",
                    role: "",
                    phone: "",
                    sex: "",
                    categoryId: ""

                },
                formLabelWidth: '120px'

            }
        },

        created() {
            this.getAllNotice(1,10);
        },
        methods: {

            getAllNotice(pageNum,pageSize) {
                this.$axios({
                    method: 'get',
                    url: `api/notice/getAllNotice/${pageNum}/${pageSize}`,
                }).then(res => {
                    let data = res.data.data;
                    this.tableData = data.list;
                    this.page.total = data.total;
                });
            },

            handleEdit(index, row) {
                let notice = JSON.stringify(row);
                this.$router.push({
                    name:"NoticeDetails",
                    query: {notice:notice}
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.getAllNotice(1, val);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`)
                this.getAllNotice(val, 10);
            }

        },
    }
</script>

<style scoped>
    .home{
        margin-top: 20px;
        margin-left: 20px;
    }
    .container{
        margin-left: 80px;
        width: 1200px;
        height: 600px;
        background: darkgrey;
        opacity:0.2;
        box-shadow: 10px 10px 5px #888888;
    }
    .texts{
        /*position: absolute;*/
       margin-left: 50px;
    }

    .title {
        font-size: 30px;
    }
    .block{
        margin-left: 200px;
        margin-top: 20px;
    }

    .lead {
        margin-top: 50px;
        font-size: 22px;
    }
</style>
