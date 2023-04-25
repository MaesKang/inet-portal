<template>
  <main class="main">
    <div v-if="acc_details.detail.status != 'New'">
      <div class="acc-header ">
        <!-- <i class="material-icons input-icon" @click="goBack"
        >keyboard_backspace</i
      > -->

        <div class="pull-left">
          <p>{{ acc_details.detail.name }}</p>
          <p style="margin-top:-5px">
            {{ acc_details.account_no }}
          </p>
        </div>
        <br />
        <p class="pull-left" style="font-size:10px">
          Pay on or before {{ acc_details.date_due }}
        </p>
        <p class="pull-right">
          PHP <b> {{ acc_details.amount_due }}</b>
        </p>
      </div>

      <div style="display:flex;width:100%;">
        <button
          type="button"
          class="btn btn-link btn-mat-link-success active"
          v-if="showBillStateList == true"
        >
          Billing Statement List
        </button>
        <button
          type="button"
          class="btn btn-link btn-mat-link-success "
          @click="showList('billState')"
          v-else
        >
          Billing Statement List
        </button>
        <button
          type="button"
          class="btn btn-link btn-mat-link-success active"
          v-if="showSOA == true"
        >
          Statement of Account
        </button>
        <button
          type="button"
          class="btn btn-link btn-mat-link-success"
          @click="showList('soa')"
          v-else
        >
          Statement of Account
        </button>
      </div>

      <div v-if="showBillStateList == true">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Billing Date</th>
              <th scope="col">Due Date</th>
              <th scope="col">Amount Due</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(bill, index) in acc_details.bill_state_list"
              :key="index"
              style="cursor: pointer;"
              @click="viewDetails(bill)"
            >
              <th scope="row">{{ bill.date }}</th>
              <th scope="row">{{ bill.due_date }}</th>
              <th scope="row"><small>PHP </small>{{ bill.amount_due }}</th>
            </tr>
            <tr v-show="acc_details.bill_state_list.length == 0">
              <td colspan="5" class="text-center">
                <small class="col-red">
                  <i>No bill statement found.</i>
                </small>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else-if="showSOA == true">
        <div class="container-acnt">
          <div
            class="card card-acc"
            v-for="(soa, index) in sortedBills"
            :key="index"
          >
            <div class="card-body" style="display:flex">
              <div style="width:75%">
                <p class="theme-font">{{ soa.date }}</p>

                <br />
                <b class=" theme-font">{{ soa.description }}</b>
              </div>
              <div style="width:25%">
                <b
                  class=" theme-font text-danger"
                  v-if="
                    soa.balanceFormated == '0.00' && soa.priceFormated != null
                  "
                  ><small>PHP </small>{{ soa.priceFormated }}</b
                >
                <b
                  class=" theme-font text-danger"
                  v-else-if="
                    soa.priceFormated != null && soa.balanceFormated != null
                  "
                  ><small>PHP </small>{{ soa.balanceFormated }}</b
                >
                <b class=" theme-font text-success" v-else
                  ><small>PHP </small>{{ soa.amountFormated }}</b
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="acc-header ">
        <div class="pull-left">
          <p>{{ acc_details.detail.name }}</p>
          <p style="margin-top:-5px">
            {{ acc_details.account_no }}
          </p>
        </div>
        <br />
        <br />
        <p class="pull-left" style="font-size:10px">
          Target Installation Date
        </p>
        <p
          class="pull-right"
          v-if="acc_details.installation_details.target_date == null"
        >
          Pending
        </p>
        <p class="pull-right" v-else>
          {{ acc_details.installation_details.target_date }}
        </p>
      </div>
      <div class="container-acnt">
        <div class="card card-acc">
          <div class="card-body" style="display:flex">
            <div style="width:75%">
              <p class="theme-font">Contractor Status</p>
            </div>
            <div style="width:25%">
              <b class=" theme-font">Pending</b>
            </div>
          </div>
        </div>
        <div class="card card-acc" hidden>
          <div class="card-body" style="display:flex">
            <div style="width:75%">
              <p class="theme-font">Contract</p>
            </div>
            <div style="width:25%">
              <!-- <b
              class=" theme-font"
              v-if="acc_details.installation_details.contract_status == null"
            >
              Pending</b
            > -->
              <b class=" theme-font"> Pending</b>
            </div>
          </div>
        </div>
        <div class="card card-acc">
          <div class="card-body" style="display:flex">
            <div style="width:75%">
              <p class="theme-font">OTC</p>
            </div>
            <div style="width:25%">
              <b class=" theme-font">{{
                acc_details.installation_details.otc
              }}</b>
            </div>
          </div>
        </div>
        <div class="card card-acc">
          <div class="card-body" style="display:flex">
            <div style="width:75%">
              <p class="theme-font">Installation Date</p>
            </div>
            <div style="width:25%">
              <b
                class=" theme-font"
                v-if="acc_details.installation_details.target_date == null"
              >
                Pending
              </b>
              <b class=" theme-font" v-else>
                {{ acc_details.installation_details.target_date }}
              </b>
            </div>
          </div>
        </div>
        <div class="card card-acc" hidden>
          <div class="card-body" style="display:flex">
            <div style="width:75%">
              <p class="theme-font">Aging</p>
            </div>
            <div style="width:25%">
              <b class=" theme-font"></b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "view_account",
  components: {},
  data() {
    return {
      acc_details: {
        detail: "",
        bill_state_list: "",
        bills: ""
      },
      checked_item_preview: {},
      user: null,
      showBillStateList: true,
      showSOA: false
    };
  },

  created() {
    this.user = this.$global.getUser();
    console.log("portal user:" + this.user);
    if (this.$route.params.bill == undefined) {
      this.acc_details = this.$global.getAccount();
    } else {
      this.acc_details = this.$route.params.bill;
      console.log(this.acc_details);
    }
    this.showList("billState");
  },

  mounted() {},

  computed: {
    sortedBills() {
      return this.acc_details.bills.slice().reverse();
    }
  },

  methods: {
    showList(item) {
      if (item == "billState") {
        this.showBillStateList = true;
        this.showSOA = false;
        console.log(this.acc_details.bill_state_list);
      } else if (item == "soa") {
        this.showSOA = true;
        this.showBillStateList = false;
        console.log(this.acc_details.bills);
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    viewDetails(item) {
      console.log(item);
      this.checked_item_preview = {
        client: {
          name: "",
          address: "",
          account_no: ""
        },
        data: [],
        amount_due: 0,
        vatable: 0,
        ewt: 0,
        netOfVat: 0,
        vat: 0,
        due_date: null
      };

      item.client.address = item.client.location;
      item.saved = true;
      const options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      };
      if (item.type == "billstate") {
        item.amount_due_1 = item.amount_due;
        item.vatable_1 = parseFloat(item.amount_due.replace(/,/g, "")) / 1.12;
        item.ewt_1 = item.vatable_1 * 0.02;
        item.netOfVat_1 =
          parseFloat(item.amount_due.replace(/,/g, "")) - item.ewt_1;
        item.vat_1 = Number(item.vatable_1 * 0.12).toLocaleString(
          "en",
          options
        );
        item.vatable_1 = Number(item.vatable_1).toLocaleString("en", options);
        item.ewt_1 = Number(item.ewt_1).toLocaleString("en", options);
        item.netOfVat_1 = Number(item.netOfVat_1).toLocaleString("en", options);

        var summary_balance = 0;
        item.data.forEach(item => {
          item.amountFormated = item.balanceFormated;
          if (item.balanceFormated == "")
            summary_balance += parseFloat(item.priceFormated.replace(/,/g, ""));
          else
            summary_balance -= parseFloat(
              item.balanceFormated.replace(/,/g, "")
            );
          item.summary_balance = Number(summary_balance).toLocaleString(
            "en",
            options
          );
        });
      } else {
        item.vatable = parseFloat(item.amount_due.replace(/,/g, "")) / 1.12;
        item.ewt = item.vatable * 0.02;
        item.netOfVat =
          parseFloat(item.amount_due.replace(/,/g, "")) - item.ewt;
        item.vat = Number(item.vatable * 0.12).toLocaleString("en", options);
        item.vatable = Number(item.vatable).toLocaleString("en", options);
        item.ewt = Number(item.ewt).toLocaleString("en", options);
        item.netOfVat = Number(item.netOfVat).toLocaleString("en", options);

        var sub_balance = 0;
        item.data.forEach(item => {
          if (item.balanceFormated == " ")
            sub_balance += parseFloat(item.priceFormated.replace(/,/g, ""));
          else
            sub_balance += parseFloat(item.balanceFormated.replace(/,/g, ""));
          item.sub_balance = Number(sub_balance).toLocaleString("en", options);
        });
      }
      item.user = this.$route.params.user;

      this.checked_item_preview = item;
      this.$router.push({
        name: "view_bill_page",
        params: {
          bill_statement: this.checked_item_preview
        }
      });
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
</style>
