<template>
    <el-row class="menu_page">
        <el-col>
            <el-menu
                    mode="vertical"
                    background-color="#5B5F87"
                    text-color="#fff"
                    active-text-color="#409eff"
                    class="el-menu-vertical-demo">
                <router-link to="/home">
                    <el-menu-item index="0">
                        <i class="el-icon-s-home"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                </router-link>
                <template v-for="item in items">
                    <el-submenu v-if="item.role===user.role" :index="item.path" :key="item.path">
                        <template slot="title">
                            <i :class="'fa fa-margin '+item.icon"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                        <router-link v-for="(citem,cindex) in item.children"
                                     :to="citem.path" :key="cindex">
                            <el-menu-item
                                    :index='citem.path'>
                                <i :class="'fa fa-margin '+citem.icon"></i>
                                <span slot="title" v-loading.fullscreen.lock="fullscreenLoading">{{citem.name}}</span>
                            </el-menu-item>
                        </router-link>
                    </el-submenu>

                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "leftmenu",
        data() {
            return {
                fullscreenLoading: false,
                items: [
                    {
                        icon: "el-icon-s-custom",
                        name: "人员信息管理",
                        path: "fund2",
                        role:'admin',
                        children: [
                            {path: "/teacher", name: "申报人信息",icon: "el-icon-user-solid"},
                            {path: "/expert", name: "专家信息",icon: "el-icon-s-custom"},
                            {path: "/administrativePersonnel", name: "行政部门信息",icon: "el-icon-s-custom"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "类别管理",
                        path: "fund4",
                        role:'admin',
                        children: [
                            {path: "/categoryList", name: "申报类别",icon: "el-icon-user-solid"},
                            {path: "/paperCategoryList", name: "论文类别",icon: "el-icon-user-solid"},
                            {path: "/prizeCategoryList", name: "获奖类别",icon: "el-icon-user-solid"},


                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "职称申报",
                        path: "fund3",
                        role:'teacher',
                        children: [
                            {path: "/declare", name: "职称申报",icon: "el-icon-user-solid"},
                            {path: "/selectDeclare", name: "申报查看",icon: "el-icon-s-custom"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "基本信息",
                        path: "fund5",
                        role:'teacher',
                        children: [
                            {path: "/prizeList", name: "获奖信息",icon: "el-icon-user-solid"},
                            {path: "/paperList", name: "论文信息",icon: "el-icon-s-custom"},
                            {path: "/workList", name: "工作经历",icon: "el-icon-s-custom"},
                            {path: "/courseList", name: "授课信息",icon: "el-icon-s-custom"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "职称人事审核",
                        path: "fund6",
                        role:'matter',
                        children: [
                            {path: "/matterCommit", name: "人事处审核",icon: "el-icon-user-solid"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "职称科技审核",
                        path: "fund7",
                        role:'science',
                        children: [
                            {path: "/scienceCommit", name: "科技处审核",icon: "el-icon-user-solid"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "职称教务处审核",
                        path: "fund7",
                        role:'education',
                        children: [
                            {path: "/educationCommit", name: "教务处审核",icon: "el-icon-user-solid"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "专家审核",
                        path: "fund8",
                        role:'expert',
                        children: [
                            {path: "/exportCommit", name: "专家打分",icon: "el-icon-user-solid"},
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "公告",
                        path: "fund9",
                        role:'admin',
                        children: [
                            {path: "/notice", name: "发布公告",icon: "el-icon-user-solid"},
                            {path: "/showAllNotice", name: "查询公告",icon: "el-icon-user-solid"}
                        ]
                    },
                    {
                        icon: "el-icon-s-custom",
                        name: "职称分数",
                        path: "fund10",
                        role:'admin',
                        children: [
                            {path: "/course", name: "职称分数查询",icon: "el-icon-user-solid"},
                        ]
                    },

                ]
            };
        },

        computed:{
            user(){
                return this.$store.getters.user;
            }

        },


        methods: {}

    }
</script>

<style scoped>
    .menu_page {
        position: fixed;
        top: 60px;
        left: 0;
        min-height: 100%;
        background-color: #5B5F87;
        z-index: 99;
    }

    .el-menu {
        border: none;
        font-size: 20px;
        font-weight: bold;
        font-family: "微软雅黑";
    }

    .fa-margin {
        margin-right: 20px;
    }

    .name {
        margin-right: 20px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 220px;
        min-height: 400px;
    }

    .el-menu-vertical-demo {
        width: 35px;
    }

    .el-submenu .el-menu-item {
        min-width: 180px;
    }

    .hiddenDropdown,
    .hiddenDropname {
        display: none;
    }

    a {
        text-decoration: none;
    }
</style>
