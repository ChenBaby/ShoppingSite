<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <div class="login-page">
                <h1>登录</h1>
                <el-form status-icon ref="loginForm" label-width="100px" label-position="top" class="login-form" :model="loginForm" :rules="rules">
                    <el-form-item label="用户名" prop="name" class="text-left">
                        <el-input type="text" v-model="loginForm.name" autoComplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="passwd" class="text-left">
                        <el-input type="password" v-model="loginForm.passwd" autoComplete="off" @keyup.enter.native="login"></el-input>
                    </el-form-item>
                    <p>
                        <a @click="reset" class="reset-btn">忘记密码？</a>
                    </p>
                    <p>
                        <el-button class="login-btn" type="primary" @click="login">登录</el-button>
                    </p>
                    <router-link :to="{path: '/regist'}">
                        注册
                    </router-link>
                </el-form>
            </div>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'Login',
  components: {
    Header,
    Footer
  },
  data: function () {
    var validatePass = (rule, value, callback) => {
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/.test(value)) {
        callback(new Error('请输入至少6位的数字和字母组合的密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        name: '',
        passwd: ''
      },
      rules: {
        name: [{
          required: true, message: '用户名不能为空'
        }, {
          min: 6, message: '用户名不能少于6位'
        }],
        passwd: [{
          required: true, message: '密码不能为空'
        }, {
          validator: validatePass, trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    login: function () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/signIn', {
            username: this.loginForm.name,
            password: this.loginForm.passwd
          })
            .then((res) => {
              console.log('res', res.data.message)
              if (res.success) {
                // this.$notify({
                //   message: `欢迎您，${this.loginForm.name}!${res.data.message}`,
                //   type: 'success'
                // })
                this.$store.commit('user/setIsLogged', true)
                localStorage.setItem('CK', res.data.ck)
                this.$store.dispatch('user/getUserInfo').then(res => {
                  this.$store.commit('user/setUserInfo', res.data)
                })
                this.$router.push('/')
              } else {
                this.$message.error(res.message)
              }
            })
            .catch(err => {
              console.log(err)
              this.$message({
                type: 'error',
                message: '网络错误，请重试'
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset: function () {
      console.log('点击找回密码')
    }
  }
}
</script>
<style lang="less" scoped>
  .login-page {
    padding-top: 100px;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .login-form {
      width: 50%;
      margin: 0 auto;
  }
  .login-btn, .reset-btn {
      margin-bottom: 22px;
      display: inline-block;
  }
</style>
