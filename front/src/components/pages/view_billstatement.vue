<template>
  <main class="main">
    <table
      class="parent"
      background="https://i.ibb.co/7WS6qS7/dctech-logo.png"
      style="
            background-repeat: no-repeat;
            background-position: center;
            background-size: 400px;
            font-size:9px;
            font-family: Clear Sans Regular;

          "
    >
      <tr style="background-color: rgba(255, 255, 255, 0.8)">
        <td>
          <div>
            <!-- logo -->
            <div class="rowFields mx-auto row">
              <table
                style="width: 100%; border-collapse: collapse"
                class="normalTbl"
              >
                <tr class>
                  <td class="normalTbl" style="width: 40%">
                    <img
                      src="https://i.ibb.co/CW69PnT/email-logo.png"
                      style="width: 100%;margin-top:30px"
                    />
                  </td>
                  <td
                    class="normalTbl"
                    style="vertical-align: top; width: 60%"
                  ></td>
                </tr>
              </table>
            </div>
            <!-- billing statement -->
            <div class="rowFields mx-auto row">
              <table
                style="
                      width: 80%;
                      border-collapse: collapse;
                      color: black;
                      border: 1px solid black;
                      padding: 5px;
                      margin-top:20px;
                      margin-left:5px
                    "
              >
                <tr>
                  <th
                    style="
                          width: 50%;
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    BILLING STATEMENT
                  </th>
                  <th
                    colspan="2"
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    No. {{ bill_statement.id }}
                  </th>
                </tr>

                <tr>
                  <td
                    rowspan="4"
                    style="border: 1px solid black; padding: 10px"
                  >
                    {{ bill_statement.client.name }}
                    <br />
                    {{ bill_statement.client.address }}
                    <br />
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid none solid solid;
                        "
                  >
                    Date:
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid solid solid none;
                        "
                  >
                    {{ bill_statement.date }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid none solid solid;
                        "
                  >
                    Due Date:
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid solid solid none;
                        "
                  >
                    <span>{{ bill_statement.due_date }}</span>
                  </td>

                  <!-- dari -->
                </tr>
                <tr>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid none solid solid;
                        "
                  >
                    Account No.
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid solid solid none;
                        "
                  >
                    {{ bill_statement.client.acc_no }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid none solid solid;
                        "
                  >
                    Amount Due:
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: solid solid solid none;
                        "
                  >
                    PHP {{ bill_statement.amount_due }}
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div class="rowFields mx-auto row">
              <table
                class="center"
                id="table2"
                style="
                      width: 97%;
                      border-collapse: collapse;
                      border: 1px solid black;
                      padding: 5px;
                       margin-left:5px
                    "
              >
                <tr>
                  <th
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    Date
                  </th>
                  <th
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    Transactions
                  </th>
                  <th
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    Amount
                  </th>
                  <th
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    Balance
                  </th>
                  <th
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          text-align: center;
                        "
                  >
                    Total
                  </th>
                </tr>
                <tr v-for="item in bill_statement.data" :key="item.id">
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none none;
                        "
                  >
                    {{ item.date }}
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none;
                        "
                  >
                    {{ item.description }}
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none solid;
                        "
                  >
                    <span v-if="item.priceFormated != null">
                      {{ item.priceFormated }}
                    </span>
                    <span v-else>{{ item.sub_amount }}</span>
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none solid;
                        "
                  >
                    {{ item.balanceFormated }}
                  </td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none solid;
                        "
                  >
                    {{ item.sub_balance }}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none none;
                        "
                  ></td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none;
                        "
                  ></td>
                  <td
                    style="border: 1px solid black; padding: 10px"
                    colspan="2"
                  >
                    Vatable Sales
                  </td>
                  <td style="border: 1px solid black; padding: 10px">
                    {{ bill_statement.vatable }}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none none;
                        "
                  ></td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none;
                        "
                  ></td>
                  <td
                    style="border: 1px solid black; padding: 10px"
                    colspan="2"
                  >
                    Vat 12%
                  </td>
                  <td style="border: 1px solid black; padding: 10px">
                    {{ bill_statement.vat }}
                  </td>
                </tr>

                <tr v-if="bill_statement.client.package_type_id == '2'">
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none none;
                        "
                  ></td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none;
                        "
                  ></td>
                  <td
                    style="border: 1px solid black; padding: 10px"
                    colspan="2"
                  >
                    EWT 2%
                  </td>
                  <td style="border: 1px solid black; padding: 10px">
                    {{ bill_statement.ewt }}
                  </td>
                </tr>

                <tr v-if="bill_statement.client.package_type_id == '2'">
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none solid none none;
                        "
                  ></td>
                  <td
                    style="
                          border: 1px solid black;
                          padding: 10px;
                          border-style: none;
                        "
                  ></td>
                  <td
                    style="border: 1px solid black; padding: 10px"
                    colspan="2"
                  >
                    Net of Vat
                  </td>
                  <td style="border: 1px solid black; padding: 10px">
                    {{ bill_statement.netOfVat }}
                  </td>
                </tr>

                <tr>
                  <td
                    style="border: 1px solid black; padding: 10px"
                    colspan="2"
                  >
                    PROMPT PAYMENT IS HIGHLY APPRECIATED
                  </td>
                  <td
                    style="border: 1px solid black; padding: 10px"
                    colspan="2"
                  >
                    Total Amount Due
                  </td>
                  <td style="border: 1px solid black; padding: 10px">
                    PHP {{ bill_statement.amount_due }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </main>
</template>

<script>
export default {
  name: "view_bill_page",
  components: {},
  data() {
    return {
      bill_statement: {},
      datenow: new Date(),
      user: null
    };
  },
  created() {
    this.bill_statement = this.$route.params.bill_statement;
    this.datenow = this.formatDateMDY(this.datenow);
    this.user = this.$global.getUser();

    this.bill_statement.date = this.formatDateMDY(this.bill_statement.date);

    console.log(this.bill_statement);
  },
  mounted() {},

  methods: {
    formatDateMDY(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      var mstring = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec."
      ];
      return [mstring[month - 1], day, year].join(" ");
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
