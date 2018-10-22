<template>
    <div class="regist-panel">
        <h1>注册</h1>
        <el-form ref="registForm" label-width="100px" label-position="top" :model="registForm" class="regist-form">
            <el-form-item label="用户名" prop="name" class="text-left"
                :rules="[{required: true,message: '用户名不能为空'},{validator: validateName,trigger: 'blur'}]">
                <el-input type="text" v-model="registForm.name" autoComplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mail" class="text-left" :rules="[{required: true,message: '邮箱不能为空'},{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                <el-input type="mail" v-model="registForm.mail" autoComplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passwd" class="text-left" :rules="[{required: true,message: '密码不能为空'},,{ min: 6, message: '密码不得少于6位', trigger: 'blur' },{validator: validatePass}]">
                <el-input type="password" v-model="registForm.passwd" autoComplete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname" class="text-left" :rules="[{required: true,message: '昵称不能为空'}]">
                <el-input type="text" v-model="registForm.nickname" autoComplete="off"></el-input>
            </el-form-item>
            <p>
                <el-button class="regist-btn" type="primary" @click="regist">提交</el-button>
            </p>
            <a href="javascript:void(0)" @click="showLogin">已有账户？直接登录</a>
        </el-form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    "name": 'Regist',
    "props": {
        "open": Boolean
    },
    data () {
        return {
            "registForm": {
                "name": '',
                "mail": '',
                "passwd": '',
                "nickname": ''
            }
        }
    },
    "methods": {
        ...mapActions('user', ['checkUserName', 'signUp']),
        validateName (rule, value, callback) {
            if (value) {
                if (value.length < 6) {
                    callback(new Error('用户名不能少于6位'))
                } else {
                    this.checkUserName({
                        "username": value
                    })
                        .then(res => {
                            if (res.data) {
                                if (res.data.isUsed) {
                                    callback(new Error('用户名已存在'))
                                } else {
                                    callback()
                                }
                                console.log(res)
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            this.$message({
                                "type": 'error',
                                "message": '网络错误，请重试'
                            })
                        })
                }
            }
        },
        validatePass (rule, value, callback) {
            if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)) {
                callback(new Error('请输入至少6位的数字和字母组合的密码'))
            } else {
                callback()
            }
        },
        regist () {
            console.log('提交注册')
            this.$refs['registForm'].validate((valid) => {
                if (valid) {
                    this.signUp({
                        "username": this.registForm.name,
                        "email": this.registForm.mail,
                        "password": this.registForm.passwd,
                        "name": this.registForm.nickname
                    })
                        .then((res) => {
                            console.log('res', res.data.message)
                            if (res.success) {
                                this.$notify({
                                    "message": `恭喜您，${this.registForm.name}!${res.data.message}`,
                                    "type": 'success'
                                })
                                this.$router.push({"path": '/login'})
                            } else if (!res.data.success) {
                                this.$message.error(res.data.message)
                            }
                        })
                        .catch(err => {
                            console.log(err)
                            this.$message({
                                "type": 'error',
                                "message": '网络错误，请重试'
                            })
                        })
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        "showLogin": function () {
            this.$emit('loginOpened')
        }
    }
}
</script>
<style lang="less" scoped>
    .regist-panel {
        padding: 40px;
        /deep/ .el-form-item__label {
            padding-bottom: 0;
        }
        /deep/ .el-form-item {
        margin-bottom: 10px;
        }

    }
    .regist-btn {
        margin-top: 22px;
        margin-bottom: 22px;
    }
</style>
