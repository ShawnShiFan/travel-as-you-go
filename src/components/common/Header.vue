<template>
    <header class="head-nav">

        <el-row>
            <el-col :span="6" class="logo-container">
                <img src="../../assets/images/logo.png" class="logo" alt=""/>
                <span class="title">高校职称评审管理系统</span>
            </el-col>
            <el-col :span="6" class="user">
                <div class="userinfo">

                    <!--<img src="https://www.gravatar.com/avatar/anything?s=200&d=mm" class="avatar" alt="" />-->
                    <div class="welcome">
                        <p class="name comename">欢迎</p>
                        <p class="name avatarname">{{user.name}}</p>
                    </div>
                    <span class="username">
						<el-dropdown trigger="click" @command="setDialogInfo">
						<span class="el-dropdown-link">
						<i class="el-icon-caret-bottom el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command='info'>个人信息</el-dropdown-item>
						<el-dropdown-item command='logout'>退出</el-dropdown-item>
						</el-dropdown-menu>
						</el-dropdown>
					</span>
                </div>
            </el-col>
        </el-row>
    </header>

</template>

<script>

    export default {
        name: "header-nav",
        data() {
            return {
                animate: false,
                marqueeList: [

                ]

            }
        },
        computed: {
            user() {
                return this.$store.getters.user;
            },
        },

        mounted() {
        },
        methods: {

            setDialogInfo(cmdItem) {
                // console.log(cmdItem)
                switch (cmdItem) {
                    case"info":
                        this.showInfoList();
                        break;
                    case"logout":
                        this.logout();
                        break;
                }
            },

            logout() {
                // console.log('退出');
                // 清除token
                localStorage.removeItem('eleToken');
                // 设置vuex store
                this.$store.dispatch('clearCurrentState');
                // 跳转
                this.$router.push('/');
            }
        },


    }

</script>

<style scoped>

    .marquee_list li {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        padding-left: 20px;
    }

    .marquee_list li span {
        padding: 0 2px;
    }

    .red {
        color: #FF0101;
    }

    .head-nav {
        width: 100%;
        height: 60px;
        min-width: 600px;
        padding: 5px;
        background: #5B5F87;
        color: #fff;
        border-bottom: 1px solid #1f2d3d;
    }

    .logo-container {
        /*line-height: 60px;*/
        min-width: 400px;
    }

    .logo {
        height: 50px;
        width: 50px;
        margin-right: 5px;
        vertical-align: middle;
        display: inline-block;
    }

    .title {
        position: relative;
        vertical-align: middle;
        font-size: 23px;
        font-family: "Microsoft YaHei";
        letter-spacing: 2px;
        left: 10px;
    }

    .user {
        line-height: 50px;
        text-align: right;
        float: right;
        padding-right: 10px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
    }

    .welcome {
        display: inline-block;
        width: auto;
        vertical-align: middle;
        padding: 0 5px;
    }

    .name {
        line-height: 20px;
        text-align: center;
        font-size: 14px;
    }

    .comename {
        font-size: 12px;
    }

    .avatarname {
        color: #409eff;
        font-weight: bolder;
    }

    .username {
        cursor: pointer;
        margin-right: 5px;
    }

    .el-dropdown {
        color: #fff;
    }

    .textBox {
        width: 1000px;
        height: 40px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        text-align: center;
        top: -46px;
        left: 400px;
    }

</style>
