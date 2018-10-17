<template>
    <div class="login-panel" :class="{open: this.opened}" v-if="!isRegist">
        <h1>登录</h1>
        <el-form status-icon ref="loginForm" label-width="100px" label-position="top" class="login-form" :model="loginForm" :rules="rules">
            <el-form-item label="用户名" prop="name" class="text-left">
                <el-input type="text" v-model="loginForm.name" autoComplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="passwd" class="text-left">
                <el-input type="password" v-model="loginForm.passwd" autoComplete="off" @keyup.enter.native="login"></el-input>
            </el-form-item>
            <p>
                <el-button class="login-btn" type="primary" @click="login">登录</el-button>
            </p>
            <a href="javascript:void(0)" @click="showRegist">注册</a>
        </el-form>
    </div>
    <div v-else>
        <Regist @showLoginPanel="showLogin"></Regist>
    </div>
</template>
<script>
import Regist from './Regist'
export default {
    "name": 'Login',
    "props": {
        "open": Boolean
    },
    "components": {
        Regist
    },
    data () {
        return {
            "loginForm": {
                "name": '',
                "passwd": ''
            },
            "rules": {
                "name": [{
                    "required": true, "message": '用户名不能为空'
                }, {
                    "min": 6, "message": '用户名不能少于6位'
                }],
                "passwd": [{
                    "required": true, "message": '密码不能为空'
                }, {
                    "validator": this.validatePass, "trigger": 'blur'
                }]
            },
            "isRegist": false
        }
    },
    "methods": {
        validatePass (rule, value, callback) {
            if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)) {
                callback(new Error('请输入至少6位的数字和字母组合的密码'))
            } else {
                callback()
            }
        },
        "login": function () {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.$store.dispatch('user/signIn', {
                        "username": this.loginForm.name,
                        "password": this.loginForm.passwd
                    })
                        .then((res) => {
                            console.log('res', res.data.message)
                            if (res.success) {
                                localStorage.setItem('CK', res.data.ck)
                                this.$store.dispatch('user/getUserInfo').then(res => {
                                    this.$store.commit('user/setUserInfo', res.data)
                                })
                                this.$emit('overlayClosed')
                                this.$router.push('/')
                            } else {
                                this.$message.error(res.message)
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
        "showRegist": function () {
            this.isRegist = true
        },
        "showLogin": function () {
            this.isRegist = false
        }
    },
    "computed": {
        "opened" () {
            return this.open
        }
    }
}
</script>
<style lang="less" scoped>
  .regist-panel {
      width: 100%;
      max-width: 320px;
      background-color: #fff;
      padding: 40px 50px;
      /deep/ .el-form-item__label {
          padding-bottom: 0;
      }
      /deep/ .el-form-item {
        margin-bottom: 10px;
      }
  }
  .login-panel{
    height: 380px;
    width: 100%;
    max-width: 320px;
    background-color: #fff;
    padding: 40px 50px;
    transform: translateY(-100%);
    &.open {
        animation: panelslidein .2s forwards ease-in-out;
    }

  }
  .login-btn {
      margin-top: 22px;
      margin-bottom: 22px;
      display: inline-block;
  }
  @keyframes panelslidein {
    0% {
        opacity: 0
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
  }
</style>
