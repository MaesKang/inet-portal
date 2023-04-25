<template>
  <main class="main">
    <div class="acc-header ">
      <center><p>Accounts</p></center>
    </div>
    <div
      class="card card-acc"
      v-for="(item, index) in accounts"
      :key="index"
      @click="viewAccount(item)"
    >
      <div class="card-body">
        <b class="theme-font"
          >{{ item.account_no }}
          <p class="pull-right" style="margin-left:23px">
            <i
              class="material-icons input-icon text-danger"
              @click="removeItem(item)"
              >delete</i
            >
          </p></b
        >
        <br />
        <b class=" theme-font">{{ item.detail.name }}</b>
        <br />
        <div style="width:75%">
          <p>{{ item.detail.location }}</p>
        </div>
        <br />
        <p class="pull-right" v-if="item.detail.status == 'New'">
          <b> Pending Installation </b>
        </p>
        <p class="pull-right" v-else>
          PHP <b> {{ item.amount_due }}</b>
        </p>
      </div>
    </div>
    <center @click="addNewAccount" v-if="accounts.length > 0">
      <b>+</b> Add another account
    </center>
    <center @click="addNewAccount" v-else><b>+</b> Add account</center>
    <center @click="viewTickets">Support Center</center>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      accounts: [],
      account: {},
      detail: {
        name: "",
        location: ""
      },
      bills: [],
      amount_due: "0.00",
      date_due: "",
      showLoading: false,
      user: null,
      isloaded: false,
      acc_details: {},
      user: null
    };
  },
  created() {
    this.user = this.$global.getUser();
    this.accounts = this.$global.getEnrolledAccounts();
    if (this.$keycloak.isTokenExpired()) {
      this.$root.$emit("logout");
    }
    this.loadAccounts();
    console.log("user:" + this.user);
  },
  mounted() {},

  methods: {
    loadAccounts() {
      var temp = [];
      this.accounts.forEach(item => {
        this.$http
          .post(
            "https://inetinfosystem.dctechmicro.com/back/api/portal/getAccountBills",
            item
          )
          .then(response => {
            item.detail = response.body.client_details;
            item.bills = response.body.client_bills;
            item.bill_state_list = response.body.bill_state_list;
            item.installation_details =
              response.body.client_details.client_detail;

            if (item.bills.length > 0) {
              var lastPosition = item.bills.length - 1;
              item.amount_due = item.bills[lastPosition].balanceSum;

              // find latest billing statement with due date earlier than first day of current month
              var currentMonth = new Date().getMonth() + 1;
              var currentYear = new Date().getFullYear();
              var billingStatement = item.bill_state_list
                .filter(bs => {
                  var dueDate = new Date(bs.due_date);
                  return dueDate < new Date(currentYear, currentMonth - 1, 1);
                })
                .sort((a, b) => new Date(b.due_date) - new Date(a.due_date))[0];

              var dueDate = new Date(billingStatement.due_date);
              var day = dueDate.getDate();
              item.date_due =
                currentYear +
                "-" +
                (currentMonth < 10 ? "0" : "") +
                currentMonth +
                "-" +
                (day < 10 ? "0" : "") +
                day;
            }

            this.$http
              .post(
                "https://inetinfosystem.dctechmicro.com/back/api/portal/getAccountTickets",
                item
              )
              .then(response => {
                item.tickets = response.body;
              });
            temp.push(item);
          });
      });

      this.accounts = temp;
      console.log(this.accounts);
    },

    addNewAccount() {
      this.$router.push({
        path: "/enroll"
      });
    },
    viewTickets() {
      this.$router.push({
        path: "/support"
      });
    },

    removeItem(item) {
      swal({
        title: "Delete " + item.account_no + "?",
        text:
          "Warning, this would delete the account in your list permanently!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete("api/enrolledAccount/" + item.id)
            .then(response => {
              this.$global.setAccounts(response.body);

              swal("Sucessfully deleted " + item.account_no + "!", {
                icon: "success"
              });
              this.loadAccounts();
            })
            .catch(response => {
              swal({
                title: "Error",
                text: response.body.error,
                icon: "error",
                dangerMode: true
              }).then(value => {
                if (value) {
                }
              });
            });
        }
      });
    },
    viewAccount(bills) {
      this.acc_details = bills;
      this.$router.push({
        name: "view_account",
        params: {
          bill: this.acc_details
        }
      });

      this.$global.setAccount(this.acc_details);
    }
  }
};
</script>
<style scoped>
/* media queries */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  /* ids */
  #payment-img {
    width: 90%;
    border-radius: 20px;
  }
  #track-img {
    width: 60%;
  }
  #faq-span {
    width: 10px;
  }
  /* classes */
  .act-label,
  .act-label2,
  .act-label3 {
    text-align: center;
    font-weight: medium;
    line-height: 1.3em;
    font-size: small;
  }
  .act-label2 {
    margin-left: 10px;
  }
  .act-label3 {
    color: white;
  }
  .div1 {
    margin-top: 40px;
    height: 100px;
    width: 82%;
    border-radius: 0 30px 30px 0;
    z-index: 0;
  }
  .div2 {
    width: 70%;
    z-index: 1;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 4px 18px #a1a1a1;
    margin-top: -45px;
    margin-left: 90px;
  }
  .div3 {
    width: 70%;
    z-index: 0;
    background-color: #ffffff;
    border-radius: 0 20px 20px 0;
    box-shadow: 0px 4px 18px #a1a1a1;
    margin-top: 30px;
    padding-top: 7px;
    text-align: left;
  }
  .div4 {
    z-index: 2;
    margin-top: -10px;
    border-radius: 100px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .div5 {
    margin-left: 40%;
    padding-top: 7px;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  /* ids */
  #logo {
    width: 60%;
  }
  /* classes */
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  #logo {
    width: 30%;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  #logo {
    width: 30%;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  #logo {
    width: 30%;
  }
}
@media only screen and (min-width: 1500px) {
  #logo {
    width: 30%;
  }
}
/* ids */

/* classes */
.main {
  /* display: flex; */
  background-image: linear-gradient(120deg, #cacaca, #cacaca);
}
.div1,
.div4,
.div5 {
  background-image: linear-gradient(130deg, #048936, #b2b523);
}
.act-label,
.act-label2 {
  color: #048936;
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
</style>
