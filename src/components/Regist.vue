<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <div class="regist-page">
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
                        <el-button class="login-btn" type="primary" @click="regist">提交</el-button>
                    </p>
                    <p>
                        name: {{$store.state.user.data.name}}
                        <router-link :to="{path: '/login'}">
                            已有账户？直接登录
                        </router-link>
                    </p>
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
import {mapActions} from 'vuex'
export default {
  name: 'Regist',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      registForm: {
        name: '',
        mail: '',
        passwd: '',
        nickname: ''
      }
    }
  },
  methods: {
    ...mapActions('user', ['checkUserName']),
    validateName (rule, value, callback) {
      if (value) {
        if (value.length < 6) {
          callback(new Error('用户名不能少于6位'))
        } else {
          this.checkUserName({
            username: value
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
                type: 'error',
                message: '网络错误，请重试'
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
          this.$store.dispatch('user/signUp', {
            username: this.registForm.name,
            email: this.registForm.mail,
            password: this.registForm.passwd,
            name: this.registForm.nickname
          })
            .then((res) => {
              console.log('res', res.data.message)
              if (res.success) {
                this.$notify({
                  message: `恭喜您，${this.registForm.name}!${res.data.message}`,
                  type: 'success'
                })
                this.$router.push({path: '/'})
              } else if (!res.data.success) {
                this.$message.error(res.data.message)
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
    }
  }
}
</script>
<style lang="less" scoped>
  .regist-page {
    padding-top: 100px;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .regist-form {
      width: 50%;
      margin: 0 auto;
  }
  .login-btn {
      margin-top: 22px;
      margin-bottom: 22px;
  }
</style>
