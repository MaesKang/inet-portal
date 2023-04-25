<template>
  <main class="main">
    <div>
      <div class="acc-header">
        <center>
          <p>Account Enrollment</p>
        </center>
      </div>
      <div class="acc-input" v-if="showVerify">
        <p class="text-label">
          Please provide the following details to verify your account.
        </p>
        <p class="text-label">
          Email Address
          <small class="text-danger"> * Email provided upon application</small>
        </p>
        <input
          class="v-input"
          type="text"
          id="email"
          name="email"
          v-model.trim="verify_email"
        />
        <center>
          <button type="button" class="btn " @click="verify_account">
            VERIFY
          </button>
          <!-- <button
            type="button"
            class="btn "
            data-toggle="modal"
            data-target="#modalOTP"
            href="#modalOTP"
            id="openOTP"
            hidden
          >
            VERIFY
          </button> -->
        </center>

        <!-- MODAL OTP -->
        <b-modal ref="openOTP" title="My Modal" hide-header hide-footer>
          <center>
            <h6>Please enter the one time password <br /></h6>
            <div>
              <span> sent to</span> <small>{{ contact }}</small>
            </div>
            <!-- OTP HERE -->
            <b-form-group label="OTP" label-for="otp">
              <div class="otp-inputs">
                <input
                  v-for="(input, index) in 4"
                  :key="index"
                  ref="otpInputs"
                  v-model="otp[index]"
                  type="number"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  min="0"
                  max="1"
                  maxlength="1"
                  @keydown.delete="deleteInput(index)"
                  @keydown.backspace="deleteInput(index)"
                  @input="focusNextInput(index)"
                />
              </div>
            </b-form-group>
            <div
              class="mt-3 content d-flex justify-content-center align-items-center"
              v-if="wrongOTP"
            >
              <span class="text-danger ms-3">Wrong OTP entered</span>
            </div>
            <div class="mt-4">
              <button class="btn" @click="validateOTP">
                Validate
              </button>
            </div>
          </center>
        </b-modal>
      </div>
      <div class="acc-input" v-else>
        <p class="text-label">Account Number</p>
        <input
          class="v-input"
          type="text"
          id="acc_no"
          name="acc_no"
          v-model.trim="account_no"
        />
        <center>
          <button type="button" class="btn" @click="checkAccount">
            Add account
          </button>
        </center>
      </div>
    </div>
  </main>
</template>
<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      account_no: null,
      showVerify: false,
      wrongOTP: false,
      verify_email: null,
      generated_otp: null,
      input_otp: null,
      contact: "",
      user: null,
      otp: []
    };
  },
  mounted() {},

  created() {
    this.user = this.$global.getUser();
    this.accounts = this.$global.getEnrolledAccounts();
    if (this.$keycloak.isTokenExpired()) {
      this.$root.$emit("logout");
    }
    console.log("user:" + this.user);
  },

  methods: {
    resetOTP() {
      console.log("popcorn");
      this.otp = [];
      const modalEl = this.$refs.ref_modalOTP;
      $(modalEl).modal("show");
    },

    checkAccount() {
      var data = {
        detail: this.account_no,
        type: "acc_no"
      };
      this.$http
        .post(
          "https://inetinfosystem.dctechmicro.com/back/api/portal/verifyAccount",
          data
        )
        .then(response => {
          console.log(response.body);

          if (response.body == true) {
            swal({
              title: "Account Found",
              text: "Proceed to verification?",
              buttons: {
                Yes: true,
                cancel: "Cancel"
              }
            }).then(value => {
              switch (value) {
                case "Yes":
                  this.showVerify = true;
                  break;

                default:
                  break;
              }
            });
          } else {
            swal({
              title: "Account not exist!",
              text:
                "The account number you entered  does not exist. Please check and try again."
            });
          }
        })
        .catch(response => {
          console.log(response.body);
          swal({
            title: response.body.error,
            text: "",
            icon: "error",
            dangerMode: true
          });
        });
    },
    verify_account() {
      var data = {
        acc_no: this.account_no,
        detail: this.verify_email,
        type: "email_add"
      };
      this.$http
        .post(
          "https://inetinfosystem.dctechmicro.com/back/api/portal/verifyAccount",
          data
        )
        .then(response => {
          console.log(response.body);
          if (response.body == 0) {
            swal({
              title: "Oops!",
              text:
                "The email address you've provided do not match to this account."
            });
          } else {
            var num = response.body;
            this.contact =
              num.slice(0, 4) +
              num.slice(4, num.length - 4).replace(/\d/g, "*") +
              num.slice(num.length - 3);

            this.generateOTP(this.account_no);
          }
        })
        .catch(response => {
          // console.log(response.body);
          swal({
            title: response.body.error,
            text: "",
            icon: "error",
            dangerMode: true
          });
        });
    },
    generateOTP(acc) {
      this.generated_otp = Math.floor(Math.random() * 9000 + 1000);

      var data = {
        acc_no: acc,
        otp: this.generated_otp
      };
      this.$http
        .post(
          "https://inetinfosystem.dctechmicro.com/back/api/portal/sendOTP",
          data
        )
        .then(response => {
          console.log(response.body);
          console.log(this.generated_otp);
          this.otp = [];
          // document.getElementById("openOTP").click();
          this.$refs.openOTP.show();
        })
        .catch(response => {
          swal({
            title: response.body.error,
            text: "",
            icon: "error",
            dangerMode: true
          });
        });
    },
    focusNextInput(index) {
      if (index < this.$refs.otpInputs.length - 1 && this.otp[index]) {
        this.$refs.otpInputs[index + 1].focus();
      }
    },
    deleteInput(index) {
      if (!this.otp[index]) {
        this.$refs.otpInputs[index - 1].focus();
      }
      this.$set(this.otp, index, "");
    },
    validateOTP() {
      this.input_otp = this.otp.join("");
      if (this.input_otp == this.generated_otp) {
        var data = {
          user_id: this.user,
          account_no: this.account_no
        };

        this.$http
          .post("api/enrolledAccount", data)
          .then(response => {
            // this.$http.get("api/enrolledAccount").then(response => {
            this.$global.setAccounts(response.body);

            swal({
              title: "Your account has been verified!",
              text: "Account successfully enrolled.",
              icon: "success"
            });

            // document.getElementById("request-dismiss").click();
            this.$refs.openOTP.hide();

            this.$router.push({
              path: "/myAccounts"
            });

            this.account_no = null;
            this.showVerify = false;
            this.wrongOTP = false;
            this.verify_email = null;
            this.generated_otp = null;
            this.input_otp = null;
            this.contact = "";
            // });
          })
          .catch(response => {
            console.log(response.body);
            swal({
              title: response.body.error,
              text: "",
              icon: "error",
              dangerMode: true
            });
          });
      } else {
        this.wrongOTP = true;
      }
    }
  },
  watch: {
    otp: function(newVal) {
      console.log(newVal.join(""));
    }
  }
};
</script>

<style scoped>
body {
  font-family: Clear Sans Regular;
}
.acc-header {
  background: rgb(84, 170, 96);
  font-family: Clear Sans Regular;
  height: 70px;
  margin-top: -8px;
  padding: 28px;
  color: aliceblue;
  font-size: 16px;
}

.v-input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  border-radius: 10px;
}

.v-input[type="text"]:focus {
  border: 3px solid #555;
  border-radius: 10px;
}

.btn {
  font-family: Clear Sans Regular;
  background-color: #90b892;
  color: white;
  padding: 15px 37px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 10px 2px;
  cursor: pointer;
  border-radius: 25px !important;
  letter-spacing: 1px;
  font-weight: bold;
}

.acc-input {
  padding: 50px;
}

.text-label {
  font-family: Clear Sans Regular;
  color: #7a7a7a;
}

.card-otp {
  width: 400px;
  border: none;
  height: 300px;
  box-shadow: 0px 5px 20px 0px #166f34;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Clear Sans Regular;
}
.card-otp h6 {
  color: #110a10;
  font-size: 20px;
}
.inputs input {
  width: 40px;
  height: 40px;
}

.form-control:focus {
  box-shadow: none;
  border: 2px solid #166f23;
}
.content a {
  color: #d64f4f;
  transition: all 0.5s;
}
.content a:hover {
  color: #090509;
}

.otp-inputs {
  display: flex;
  width: fit-content;
  align-items: center;
}
.otp-inputs input {
  width: 40px;
  height: 40px;
  text-align: center;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-right: 10px;
  font-size: 24px;
}
.otp-inputs input:last-child {
  margin-right: 0;
}
.otp-inputs input:focus {
  outline: none;
  border-bottom-color: #007bff;
}
</style>
