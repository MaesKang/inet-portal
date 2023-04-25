<template>
  <div class="container-fluid">
    <div class="container-div">
      <div class="formMiddle-div">
        <div class="loginImg-div">
          <img
            src="../../assets/lock.png"
            alt="STOCK INVENTORY MANAGEMENT SYSTEM"
            class="loginTop-img"
          />
        </div>
        <form @submit.prevent="login" class="form-signin">
          <validation-provider rules="required" v-slot="{ errors }">
            <div class="input-group">
              <span class="input-group-addon span-append" id="basic-addon1">
                <i class="fas fa-envelope input-icon"></i>
              </span>
              <input
                type="text"
                ref="email"
                name="email"
                class="form-control fields"
                placeholder="Email"
                v-model.trim="email"
                autocomplete="off"
                aria-describedby="basic-addon1"
                autofocus
              />
            </div>
            <small class="error-span">{{ errors[0] }}</small>
          </validation-provider>
          <div v-if="!passwordHidden" class="field-div">
            <validation-provider rules="required" v-slot="{ errors }">
              <div class="input-group" style="margin-top: 10px !important">
                <span class="input-group-addon span-append">
                  <i class="fas fa-key input-icon"></i>
                </span>
                <input
                  type="text"
                  placeholder="Password"
                  class="form-control fields"
                  v-model="password"
                  @keyup.enter="login"
                />
                <span
                  @click="hidePassword"
                  class="input-group-addon span-click"
                >
                  <i class="fas fa-eye-slash pass-eye"></i>
                </span>
              </div>
              <small class="error-span">{{ errors[0] }}</small>
            </validation-provider>
          </div>
          <div v-if="passwordHidden" class="field-div">
            <validation-provider rules="required" v-slot="{ errors }">
              <div class="input-group" style="margin-top: 10px !important">
                <span class="input-group-addon span-append">
                  <i class="fas fa-key input-icon"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  class="form-control fields"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon2"
                  v-model="password"
                  @keyup.enter="login"
                />
                <span
                  @click="showPassword"
                  class="input-group-addon span-click"
                >
                  <i class="fas fa-eye pass-eye"></i>
                </span>
              </div>
              <small class="error-span">{{ errors[0] }}</small>
            </validation-provider>
          </div>
          <b-button class="login-btn" size="sm" type="submit" @click="login">
            L O G I N
          </b-button>
        </form>
        <div class="loginImg-div">
          <img
            src="../../assets/dctech logo.png"
            alt="STOCK INVENTORY MANAGEMENT SYSTEM"
            class="loginBottom-img"
          />
        </div>
      </div>
      <div class="footer">
        <span class="center-span">
          SIMS ©2021 BETA VERSION 1.0
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

export default {
  name: "Login",
  props: {
    passwordText: {
      default: "",
      type: String
    },
    fieldLabel: {
      default: "",
      type: String
    }
  },
  components: {
    ValidationProvider
  },
  data() {
    return {
      email: "",
      password: "",
      remember: "",
      isAuth: null,
      login_failed: false,
      passwordHidden: {
        default: false,
        type: Boolean
      }
    };
  },
  beforeCreate() {
    localStorage.clear();
  },
  created() {
    this.isAuth = this.$auth.isAuthenticated();
  },
  methods: {
    login() {
      var subEmail = this.email;

      if (!subEmail.includes("@dctechmicro.com"))
        subEmail += "@dctechmicro.com";

      var data = {
        client_id: 2,
        client_secret: "dvrLOBs6Xv4acIw9PCLaITdlAMxLV5S5ui4ajWXu",
        grant_type: "password",
        username: subEmail,
        password: this.password
      };

      this.$http
        .post("oauth/token", data)
        .then(response => {
          console.log(response.body);
          this.$global.setEmail(subEmail);
          this.$auth.setToken(
            response.body.access_token,
            response.body.expires_in + Date.now()
          );
          // this.$router.push("/"); // to redirect to dashboard page after login
          window.location.href = "/";
        })
        .catch(response => {
          swal("Error", "Incorrect credentials.", "error");
        });
    },
    hidePassword() {
      this.passwordHidden = true;
    },
    showPassword() {
      this.passwordHidden = false;
    }
  }
};
</script>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .formMiddle-div {
    width: 50% !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .formMiddle-div {
    width: 50% !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .formMiddle-div {
    width: 50% !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .formMiddle-di {
    width: 50% !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .formMiddle-div {
    width: 30% !important;
    padding: 35px !important;
  }
}
@media only screen and (min-width: 1500px) {
  .formMiddle-div {
    width: 28% !important;
    padding: 35px !important;
  }
}
.container-fluid {
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #242424;
}
.container-div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(#c4c4c4, #fffadb);
}
.formMiddle-div {
  width: 30%;
  background: #ffffff66;
  border-radius: 10px;
  margin-top: 4px;
  margin-bottom: 4px;
  padding: 50px;
}
.version-div {
  justify-content: flex-end;
  align-self: flex-end;
  margin-bottom: 5px;
}
.fields {
  background-color: #ffffff;
  font-size: small;
  color: #1b1b1b;
  border-radius: 0 0 0 0;
  border: 0;
  padding-right: 35px;
  padding-left: 12px !important;
}
.error-span,
.error-span2 {
  display: block;
  text-align: right;
  color: red;
  margin-bottom: 0;
  margin-top: 0;
}
.error-span2 {
  margin-top: -12px;
}
.pass-eye {
  margin-top: 9px;
}
.fields:focus {
  outline: none !important;
  box-shadow: none;
  background-color: #ffffff;
  color: #1b1b1b;
}
.login-btn {
  transition: all 0.5s ease;
  color: #ffffff;
  font-family: "TW Cen MT";
  font-weight: bold;
  background-color: #e7d101;
  border: 0;
  padding: 7px;
  border-radius: 0 0 0 0;
  width: 100%;
  margin-top: 10px;
}
.login-btn:hover,
.login-btn:focus {
  background-color: #cab600;
  padding: 7px;
  border: 0;
  /* color: #19b45f; */
  color: #ffffff;
}
.span-click {
  cursor: pointer;
  border-radius: 0;
  background: #f5f5f5 !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
}
.span-append {
  border-radius: 0;
  background: #535353 !important;
  padding-right: 0;
  padding-left: 0;
}
.input-icon {
  color: #ffffff !important;
  margin-left: 9px;
  margin-right: 9px;
  margin-top: 9px;
}
.field-div {
  margin-bottom: 12px !important;
}
.loginTop-img {
  height: 60px;
  margin-bottom: 40px;
}
.loginBottom-img {
  height: 50px;
  margin-top: 40px;
}
.loginImg-div {
  width: 100%;
  text-align: center;
}
.footer {
  padding: 14px;
  background: rgba(0, 0, 0, 0.1);
  color: #535353;
  font-weight: bold;
  font-family: "TW Cen MT";
  letter-spacing: 0.15em;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
}
.footerLeft-span {
  flex: 1;
  text-align: left;
}
.footerRight-span {
  flex: 1;
  text-align: right;
}
.center-span {
  flex: 1;
  text-align: center;
}
</style>
