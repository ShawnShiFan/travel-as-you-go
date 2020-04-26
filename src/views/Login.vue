<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <img class="title" src="../assets/images/logo3.png"  />
<!--                <span class="title">高校职称评审管理系统</span>-->
                <el-form :model="loginUser" :rules="rules" ref="loginForm"
                         label-width="80px" label-left="20px" class="loginForm">

                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="loginUser.username" placeholder="请输入用户名"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="loginUser.password" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>

                    <div class="tiparea">
                        <p>还没有账号? 现在 <router-link to="/register">注册</router-link></p>
                    </div>
                </el-form>
            </div>
        </section>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode';

    export default {
        name: "login",
        data() {
            return {
                loginUser:{
                    username:'',
                    password:'',

                },
                rules: {
                    username: [
                        {
                            required: true,
                            message: '用户名不能为空',
                            trigger: 'blur'
                        },
                        {
                            min: 5,
                            max: 30,
                            message: '长度在6到30之间',
                            trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true,
                            message: '密码不能为空',
                            trigger: 'blur'
                        },
                        {
                            min: 4,
                            max: 30,
                            message: '长度在6到30之间',
                            trigger: 'blur'
                        }
                    ],
                }
            }
        },

        methods: {

            submitForm(formName){
                this.$refs[formName].validate(valid => {
                    if(valid){
                        this.$axios.post("api/user/loginUser", this.loginUser).then(res => {
                            return res.data;
                        }).then(data=>{
                            console.log(data)
                            if (data.code === 400) {
                                this.$message({
                                    message: '账号或密码错误！',
                                    type: 'error'
                                });
                                return;
                            }

                            localStorage.setItem('eleToken', data.data);

                            // 解析 token
                            const decoded = jwt_decode(data.data);

                            // token存储到vuex
                            this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded));
                            this.$store.dispatch('setUser', decoded);
                            this.$router.push('/index');
                        });
                    }
                });
            },

            isEmpty(value){
                return (
                    value === undefined ||
                    value === null ||
                    (typeof value === "object" && Object.keys(value).length === 0) ||
                    (typeof value === "string" && value.trim().length === 0)
                );
            }
        }


    }
</script>

<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../assets/images/timg.jpg) no-repeat center center;
        background-size: 100% 100% ;
    }

    .title{
        position: relative;
        top: 20px;
        left: -8px;
    }

    .login .form_container{
        width: 450px;
        height: 600px;
        position: relative;
        top: 50%;
        left: 50%;
        margin-left: -225px;
        margin-top: -300px;
        padding: 25px;
        border-radius: 5px;
        text-align: center;
    }

    .form_container .manage_tip .title{
        font-family: 'Microsoft YaHei';
        font-weight: bold;
        font-size: 26px;
        color: #fff;
    }

    .loginForm {
        width: 430px;
        height: 300px;
        margin-top: 30px;
        background-color: #fff;
        padding: 60px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #ccc;
    }

    .submit_btn {
        width: 100%;
    }

    .tiparea {
        text-align: right;
        font-size: 12px;
        color: #333;
    }

    .tiparea p a {
        color: #409eff;
    }

</style>
