<!--
 * @Description: 
 * @Author: 李超越
 * @Date: 2023-05-31 09:33:42
 * @LastEditTime: 2023-05-31 18:01:11
 * @LastEditors: 李超越
-->
<template>
  <div class="page-login">
    <Particles id="tsparticles" class="login-partic" :options="options" />
    <!-- <div class="inner">
      <div class="header">
        <div class="logo"></div>
        <div class="title">管理系统</div>
      </div>
      <form @submit.stop.prevent="submitForm" class="form">
        <div class="name">帐号</div>
        <div
          class="input-wrapper input-1"
          :class="{ 'input-focus': focusInput === 1 }"
        >
          <div class="icon"></div>
          <input
            type="text"
            v-model="form.rootNumber"
            maxlength="11"
            class="typer"
            placeholder="请输入帐号"
            @focus="focusInput = 1"
            @blur="focusInput = null"
          />
        </div>

        <div class="name">密码</div>
        <div
          class="input-wrapper input-2"
          :class="{ 'input-focus': focusInput === 2 }"
        >
          <div class="icon"></div>
          <input
            :type="passwordType"
            v-model="form.password"
            maxlength="20"
            class="typer"
            placeholder="请输入密码"
            @focus="focusInput = 2"
            @blur="focusInput = null"
          />
          <div
            class="showPassword-1"
            v-show="passwordType === 'password'"
            @mousedown="
              passwordType === 'password'
                ? (passwordType = 'text')
                : (passwordType = 'password')
            "
          ></div>
          <div
            class="showPassword-2"
            v-show="passwordType === 'text'"
            @mousedown="
              passwordType === 'password'
                ? (passwordType = 'text')
                : (passwordType = 'password')
            "
          ></div>
        </div>
        <div class="link" @click="forgePassword">忘记密码？</div>
        <button
          class="login-now-1"
          v-show="form.rootNumber === '' || form.password === ''"
        >
          立即登录<i class="icon"></i>
        </button>
        <button
          class="login-now-2"
          v-show="form.rootNumber !== '' && form.password !== ''"
        >
          立即登录<i class="icon"></i>
        </button>
      </form>
    </div> -->
    <!-- <el-dialog
      title="重置密码"
      v-model:visible="forgePasswordFlag"
      width="440px"
    >
      <el-form
        :model="forgePasswordForm"
        label-width="120px"
        label-position="left"
      >
        <el-form-item label="手机号码" required>
          <el-input
            placeholder="请输入手机号码"
            auto-complete="new-password"
            v-model="forgePasswordForm.phone"
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" required>
          <el-input
            placeholder="请输入验证码"
            style="width: 168px"
            auto-complete="new-password"
            v-model="forgePasswordForm.code"
          ></el-input
          ><el-button class="get_code_span" type="primary" @click="getCode"
            >codeText</el-button
          >
        </el-form-item>
        <el-form-item label="新密码" required>
          <el-input
            :type="passwordType"
            auto-complete="new-password"
            minlength="6"
            maxlength="18"
            placeholder="请输入新密码6-18位数字或字母"
            v-model="forgePasswordForm.newPassword"
          ></el-input>
          <div
            class="forge_password_icon_1"
            v-show="passwordType === 'password'"
            @mousedown="
              passwordType === 'password'
                ? (passwordType = 'text')
                : (passwordType = 'password')
            "
          ></div>
          <div
            class="forge_password_icon_2"
            v-show="passwordType === 'text'"
            @mousedown="
              passwordType === 'password'
                ? (passwordType = 'text')
                : (passwordType = 'password')
            "
          ></div>
        </el-form-item>
        <el-form-item label="确认密码" required>
          <el-input
            :type="passWordType"
            auto-complete="new-password"
            minlength="6"
            maxlength="18"
            placeholder="请确认您的密码"
            v-model="forgePasswordForm.surePassword"
          ></el-input>
          <div
            class="forge_password_icon_1"
            v-show="passWordType === 'password'"
            @mousedown="
              passWordType === 'password'
                ? (passWordType = 'text')
                : (passWordType = 'password')
            "
          ></div>
          <div
            class="forge_password_icon_2"
            v-show="passWordType === 'text'"
            @mousedown="
              passWordType === 'password'
                ? (passWordType = 'text')
                : (passWordType = 'password')
            "
          ></div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button style="width: 112px" @click="forgePasswordFlag = false"
          >取 消</el-button
        >
        <el-button style="width: 112px" type="primary" @click="confirm"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
  </div>
</template>
<script setup>
import { reactive, toRefs } from "vue";

const data = reactive({
  options: {
    fpsLimit: 50,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.6,
          size: 10,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  },
});

const { options } = toRefs(data);
// import { mapGetters, mapActions } from "vuex";
// import { ajax } from "../lib/xhr";
// import md5 from "md5";
//   name: "BaseLogin",
//   data() {
//     return {
//       focusInput: null,
//       passwordType: "password",
//       passWordType: "password",
//       form: {
//         rootNumber: "",
//         password: "",
//       },
//       timer: null,
//       forgePasswordFlag: false,
//       forgePasswordForm: {
//         phone: "",
//         code: "",
//         newPassword: "",
//         surePassword: "",
//       },
//     };
//   },
//   computed: {
//     // ...mapGetters(["codeText"]),
//   },
//   methods: {
//     // ...mapActions(["SetUserInfo", "SetToken", "SetCodeText"]),
//     async submitForm() {
//       let form = Object.assign({}, this.form);
//       if (!form.rootNumber) return this.$message.error("请输入帐号");
//       if (!/^1[123456789]\d{9}$/i.test(form.rootNumber))
//         return this.$message.error("请输入正确的帐号格式（手机号码）");
//       if (!form.password) return this.$message.error("请输入密码");
//       //   form.password = md5(form.password);
//       //   let { data } = await ajax({
//       //     url: "/adminlogin",
//       //     data: form,
//       //     type: "post",
//       //   });
//       //   this.SetUserInfo(data.userInfo);
//       //   this.SetToken(data.auth_token);
//       //   this.$router.replace({ name: "personal" });
//     },
//     forgePassword() {
//       this.forgePasswordFlag = !this.forgePasswordFlag;
//     },
//     getCode() {
//       let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
//       if (!this.forgePasswordForm.phone) {
//         return this.$message.error("请输入手机号码");
//       } else if (!reg.test(this.forgePasswordForm.phone)) {
//         return this.$message.error("请输入正确的手机号码");
//       } else if (this.codeText === "获取验证码") {
//         // await ajax({
//         //   url: "/designer/back/password/getcode",
//         //   type: "post",
//         //   data: {
//         //     phone: parseInt(this.forgePasswordForm.phone),
//         //   },
//         // });
//         // this.countDown();
//       } else {
//         return this.$message.error("请60S后再获取验证码");
//       }
//     },
//     confirm() {
//       let { phone, code, newPassword, surePassword } = this.forgePasswordForm;
//       let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
//       let passWordReg = /^[a-z0-9]{6,18}$/;
//       if (!phone) {
//         return this.$message.error("请输入手机号码");
//       }
//       if (!reg.test(phone)) {
//         return this.$message.error("请输入正确的手机号码");
//       }
//       if (!code) {
//         return this.$message.error("请输入验证码");
//       }
//       if (!newPassword) {
//         return this.$message.error("请输入新密码");
//       }
//       if (!passWordReg.test(newPassword)) {
//         return this.$message.error("请输入正确的密码格式6-18位数字或字母");
//       }
//       if (!surePassword) {
//         return this.$message.error("请输入确认密码");
//       }
//       if (newPassword !== surePassword) {
//         return this.$message.error("新密码与确认密码不一致");
//       }
//       //   await ajax({
//       //     url: "/designer/back/uppassword",
//       //     type: "post",
//       //     data: {
//       //       phone: parseInt(phone),
//       //       code,
//       //       newPassword: md5(newPassword),
//       //       surePassword: md5(surePassword),
//       //     },
//       //   });
//       this.$message.success("重置密码成功");
//       this.forgePasswordFlag = !this.forgePasswordFlag;
//       this.forgePasswordForm = {
//         phone: "",
//         code: "",
//         newPassword: "",
//         surePassword: "",
//       };
//     },
//     // 计算时间
//     countDown() {
//       //   let that = this;
//       //   let second = 60;
//       //   let setTimer = setInterval(() => {
//       //     let reg = /^1\d{10}$/;
//       //     that.SetCodeText(`${second}S`);
//       //     second--;
//       //     if (second <= 0) {
//       //       that.SetCodeText("获取验证码");
//       //       clearInterval(setTimer);
//       //     } else if (!reg.test(that.forgePasswordForm.phone)) {
//       //       that.SetCodeText("获取验证码");
//       //       clearInterval(setTimer);
//       //     }
//       //   }, 1000);
//     },
//   }
</script>
<style lang="less">
.page-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 440px;
    background-color: #ffffff;
    box-shadow: 0px 12px 32px 0px rgba(170, 170, 170, 0.3);
    border-radius: 8px;
    z-index: 2;
    box-sizing: border-box;
    height: 480px;
  }
  .form {
    width: 330px;
    margin: 0 auto;
  }
  .header {
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    background: rgba(44, 46, 54, 1);
    border-radius: 8px 8px 0 0;
    .logo {
      width: 140px;
      height: 72px;
      border-radius: 8px 0px 0px 0px;
      //   background: url("../images/bg_login_logo.svg") no-repeat center;
    }
    .title {
      flex: 1;
      height: 100%;
      background: rgba(60, 63, 72, 1);
      box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.18);
      border-radius: 0px 8px 0px 0px;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      line-height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .name {
    font-size: 16px;
    margin-bottom: 14px;
  }
  h2 {
    border-bottom: 1px solid #454447;
    padding-bottom: 20px;
    margin-bottom: 40px;
    font-weight: bold;
    i {
      font-size: 36px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  .input-wrapper {
    transition: all 0.2s ease;
    position: relative;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .icon {
      width: 48px;
      background-color: #f5f5f5;
      background-position: center;
      background-repeat: no-repeat;
      border-right: 1px solid #dcdcdc;
      height: 48px;
      border-radius: 4px 0 0 4px;
    }
    input {
      display: block;
      width: 240px;
      padding: 10px 0 10px 10px;
      border: 0 none;
      outline: none;
      font-size: 14px;
    }
    input::-webkit-input-placeholder {
      color: #dcdcdc;
    }
  }
  .showPassword-1 {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    // background: url("../images/ic_32_eye_d.svg") no-repeat center;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .forge_password_icon_1 {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    // background: url("../images/ic_32_eye_d.svg") no-repeat center;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .showPassword-2 {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    // background: url("../images/ic_32_eye_p.svg") no-repeat center;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .forge_password_icon_2 {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    // background: url("../images/ic_32_eye_p.svg") no-repeat center;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .input-1 {
    .icon {
      //   background: url("../images/ic_48_laccount_d.svg");
      width: 48px;
    }
  }
  .input-2 {
    margin-bottom: 18px;
    .icon {
      //   background-image: url("../images/ic_48_password_d.svg");
      width: 48px;
    }
  }
  .input-focus {
    border-color: #dbb87c;
    box-shadow: 0px 4px 5px 0px rgba(255, 177, 47, 0.2);
    .icon {
      background-color: #dbb87c;
    }
    &.input-1 {
      .icon {
        // background-image: url("../images/ic_48_laccount_p.svg");
      }
    }
    &.input-2 {
      .icon {
        // background-image: url("../images/ic_48_password_p.svg");
      }
    }
  }
  .link {
    color: #aaa;
    font-size: 14px;
    cursor: pointer;
  }
  .login-now-1 {
    display: block;
    width: 100%;
    margin-top: 30px;
    height: 50px;
    line-height: 50px;
    border: 0 none;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    background: rgba(220, 220, 220, 1);
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      //   background: url("../images/ic_16_login_arrow_d.svg");
      margin-left: 10px;
    }
  }
  .login-now-2 {
    display: block;
    width: 100%;
    margin-top: 30px;
    height: 50px;
    line-height: 50px;
    border: 0 none;
    color: #fff;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;
    background: #dbb87c;
    border-radius: 6px;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      //   background: url("../images/ic_16_login_arrow_p.svg");
      margin-left: 10px;
    }
  }
  a {
    color: #454447;
  }
  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .get_code_span {
    display: inline-block;
    cursor: pointer;
    width: 112px;
  }
}
</style>
