<template>
  <div class="login-container">
    <div class="main-content">
      <div class="title">系统</div>
      <el-form class="login-form">
        <div class="form-title">
          <el-divider><span>欢迎登录系统</span></el-divider>
        </div>
        <el-form-item prop="pass">
          <el-input
            type="text"
            autocomplete="off"
            clearable
            v-model="username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            autocomplete="off"
            clearable
            v-model="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            :loading="loading"
            :disabled="isCanClick"
            @click="login()"
            v-html="loginName"
            ></el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <div>Copyright©2020xxxxxxxxx</div>
      <div>技术支持：xxxxx</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Provide } from "vue-property-decorator";
import LoginService from "../../api/login";
import md5 from 'md5';

@Component
export default class Login extends Vue {
  private username: string = "";
  private password: string = "";
  private loading: boolean = false;

  get isCanClick(): boolean {
    return this.username == "" || this.password == "";
  }

  get loginName(): string {
    if (this.loading) {
      return "登录中...";
    }
    return "登&nbsp;&nbsp;&nbsp;录";
  }

  login() {
    let config = {
        header: {
            platform: 3,
            deviceModel: 'pc',
            devId: 'pc'
        }
    }
    let param = {
      username: this.username,
      password: md5(this.password)
    };
    console.log(param)
    this.loading = true;
    LoginService.login(param, config).then((res: any) => {
        if(res.success) {
            console.log(res);
            // this.$message.success(res.msg);
        }  else {
            // this.$message.error(res.msg);
        }
    }).finally(()=>{
    this.loading = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  overflow: auto;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/bg.png) center center / cover no-repeat fixed;
}
.main-content {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 0 30px;
  box-sizing: border-box;
  .login-form {
    width: 26%;
    min-width: 400px;
    max-width: 520px;
    background: white;
    padding: 50px;
    box-sizing: border-box;
    margin-left: 16%;
    box-shadow: 0px 6px 14px 0px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    .form-title {
      text-align: center;
      line-height: 30px;
      margin: 15px 0 50px;
      span {
        color: #479ff8;
        font-size: 24px;
        white-space: nowrap;
      }
      .el-divider {
        background: #479ff8;
      }
    }
    .el-form-item {
      margin-bottom: 30px;
      /deep/ input {
        height: 50px;
        line-height: 50px;
      }
    }
    .login-btn {
      width: 100%;
      margin-top: 20px;
      height: 50px;
      line-height: 50px;
      padding: 0;
      font-size: 20px;
    }
  }
  .title {
    font-size: 40px;
    font-weight: bold;
    color: white;
  }
}
.footer {
  text-align: center;
  color: white;
  font-size: 14px;
  position: fixed;
  bottom: 12px;
  width: 100%;
  line-height: 25px;
}
</style>
