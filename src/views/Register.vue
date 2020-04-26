<template>
    <div class="register">
        <section class="form_container">
            <div class="manage_tip">
                <img class="title" src="../assets/images/logo3.png" />
                <el-form :model="registerUser" :rules="rules" ref="registerUser"
                         label-width="100px" label-left="20px" class="registerUser">

                    <el-form-item label="选择身份">
                        <el-select filterable placeholder="请选择" style="width: 290px" v-model="registerUser.role">
                            <el-option label="申报人" value="teacher"></el-option>
                            <el-option label="专家" value="expert"></el-option>
                            <el-option label="人事处" value="matter"></el-option>
                            <el-option label="科技处" value="science"></el-option>
                            <el-option label="教务处" value="education"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="registerUser.username" ref='order' placeholder="请输入用户名"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="registerUser.password" placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="registerUser.checkPass" placeholder="请确认密码"></el-input>
                    </el-form-item>

                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="registerUser.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select filterable placeholder="请选择" style="width: 290px" v-model="registerUser.sex">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="手机号" prop="phone">
                        <el-input v-model="registerUser.phone" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号" prop="idCard">
                        <el-input v-model="registerUser.idCard" placeholder="请输入身份证号"></el-input>
                    </el-form-item>
                    <el-form-item label="高校名称" prop="company">
                        <el-input v-model="registerUser.company" placeholder="请输入高校名称"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="userEmail">
                        <el-input v-model="registerUser.userEmail" placeholder="请输入邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="userPosition">
                        <el-input v-model="registerUser.userPosition" placeholder="请输入职位"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" class="submit_btn" :plain="true" @click="submitForm('registerUser')">
                            注册
                        </el-button>
                        <el-button type="primary" class="submit_btn" :plain="true" @click="reback">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Register.vue",
        components: {},
        data() {

            // 用户名验证
            var Admin = (rule, value, callback) => {
                // console.log(1)
                if (value === '') {
                    callback(new Error('用户名不为空'));
                } else if (value.length !== 7 && value.length !== 12) {
                    callback(new Error('格式错误'));
                } else {
                    callback();
                }

            };

            //确认密码
            var validatePass2 = (rule, value, callback) => {
                if (value !== this.registerUser.password) {
                    callback(new Error('两次输入密码不一致！'));
                } else {
                    callback();
                }
            };

            return {
                registerUser: {
                    username: '',
                    password: '',
                    checkPass: '',
                    role: '',
                    name: '',

                },
                options: [],
                rules: {

                    username: [
                        {
                            required: true,
                            message: '用户名不能为空',
                            trigger: 'blur'
                        },
                        {
                            validator: Admin,
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
                            min: 6,
                            max: 30,
                            message: '长度在6到30之间',
                            trigger: 'blur'
                        }
                    ],
                    checkPass: [
                        {
                            required: true,
                            message: '密码不能为空',
                            trigger: 'blur'
                        },
                        {
                            min: 6,
                            max: 30,
                            message: '长度在6到30之间',
                            trigger: 'blur'
                        },
                        {
                            validator: validatePass2,
                            trigger: 'blur'
                        }
                    ],
                    name: [
                        {
                            required: true,
                            message: '姓名不能为空',
                            trigger: 'blur'
                        },
                        {
                            min: 2,
                            max: 4,
                            message: '长度在2到4个字符之间',
                            trigger: 'blur'
                        }
                    ],
                },
            }
        },
        created() {

        },

        methods: {
            submitForm(formName) {
                console.log(this.registerUser);
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$axios
                            .post('api/user/addUser', this.registerUser)
                            .then(res => {
                                return res.data
                            })
                            .then(data => {

                                if (data.code === 201) {
                                    this.$message({
                                        message: '账号注册成功！',
                                        type: 'success'
                                    });
                                    this.$router.push('/');
                                } else {
                                    this.$message({
                                        message: '账号已存在！',
                                        type: 'error'
                                    });
                                }
                            });


                    }


                })

            },
            reback() {
                this.$router.push('/');
            }
        }
    }

</script>

<style scoped>
    /*.title{*/
    /*    position: relative;*/
    /*    top: 25px;*/
    /*    left: 2px;*/
    /*}*/
    .register {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("../assets/images/timg.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }

    .form_container {
        width: 500px;
        height: 600px;
        position: absolute;
        top: 30%;
        left: 50%;
        margin-left: -250px;
        margin-top: -300px;
        padding: 25px;
        border-radius: 5px;
        text-align: center;
    }

    .register .form_container .manage_tip .title {
        font-family: "Microsoft YaHei";
        font-weight: bold;
        font-size: 26px;
        color: #fff;
    }

    .register .form_container .manage_tip .college {
        width: 340px;
        padding-right: 82px;
    }

    .register .form_container .manage_tip .grade {
        width: 340px;
        padding-right: 82px;
    }

    .register .form_container .manage_tip .radio {


    }

    .registerUser {

        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px #cccc;

    }

    .submit_btn {
        width: 40%;

    }
</style>
