<template>
  <main class="main">
    <div>
      <div class="acc-header ">
        <center><p>Support Center</p></center>
      </div>
      <!-- tickets -->
      <div class="container-acnt">
        <!-- <div class="pull-right">Submit a Ticket</div> -->
        <button type="button" class="btn " @click="runSpeedTest">
          Run Speed Test
        </button>

        <br />
        <div>
          <table>
            <thead>
              <tr>
                <th>Ticket No.</th>
                <th>Complaint</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ticket in tickets" :key="ticket.id">
                <td>{{ ticket.ticket_id }}</td>
                <td v-if="ticket.complaint !== null">
                  {{ ticket.complaint.name }}
                </td>
                <td v-else>N/A</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- FAQs -->
    </div>
  </main>
</template>

<script>
import { ModelListSelect } from "vue-search-select";

export default {
  components: {
    "model-list-select": ModelListSelect
  },
  data() {
    return {
      isloaded: false,
      user: null,
      tickets: [],
      downloadSpeed: null,
      uploadSpeed: null
    };
  },
  created() {
    this.user = this.$global.getUser();
    console.log(this.user);
    this.loadTickets();
  },
  mounted() {
    // var Tawk_API = Tawk_API || {},
    //   Tawk_LoadStart = new Date();
    // (function() {
    //   var s1 = document.createElement("script"),
    //     s0 = document.getElementsByTagName("script")[0];
    //   s1.async = true;
    //   s1.src = "https://embed.tawk.to/643cf8a031ebfa0fe7f8b421/1gu72mdip";
    //   s1.charset = "UTF-8";
    //   s1.setAttribute("crossorigin", "*");
    //   s0.parentNode.insertBefore(s1, s0);
    // })();
  },
  methods: {
    runSpeedTest() {
      // this.$http
      //   .get(
      //     "https://api.speedtest.net/api/js/servers?fields=id,name,country,cc,lat,lon,url"
      //   )
      //   .then(response => {
      //     console.log(response.body[0].id);
      // const serverId = response.body[0].id;
      // const speedTestUrl = `https://api.speedtest.net/api/js/test?x=${Date.now()}&serverid=${serverId}`;
      // return this.$http.get(speedTestUrl);
      // })
      // .then(response => {
      //   this.downloadSpeed = response.body.download / 1000000; // convert from bps to Mbps
      //   this.uploadSpeed = response.body.upload / 1000000; // convert from bps to Mbps
      // })
      // .catch(error => {
      //   console.error(error);
      // });
    },
    loadTickets() {
      this.$http.get("api/enrolledAccount/" + this.user).then(response => {
        var items = response.body;
        var ticketsArray = [];
        var postRequests = [];
        items.forEach(item => {
          var postRequest = this.$http.post(
            "https://inetinfosystem.dctechmicro.com/back/api/portal/getAccountTickets",
            item
          );
          postRequests.push(postRequest);
          postRequest.then(response => {
            Array.prototype.push.apply(ticketsArray, response.body);
          });
        });

        Promise.all(postRequests).then(() => {
          console.log("maes logs");
          console.log(ticketsArray);
          this.tickets = ticketsArray;
        });
      });
    }
  }
};
</script>
<!--Start of Tawk.to Script-->
<!-- <script type="text/javascript">
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/643cf8a031ebfa0fe7f8b421/1gu72mdip";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
</script> -->
<!--End of Tawk.to Script-->

<style scoped>
.container-acnt {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  font-family: Clear Sans Regular;
  margin-top: 20px;
}
/* Define styles for the table */
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10px;
}

/* Define styles for the table header */
thead {
  background-color: #f2f2f2;
}

/* Define styles for table cells */
td,
th {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

/* Define styles for table rows */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

.theme-font {
  color: rgb(0, 150, 100);
  font-weight: 700;
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
.btn {
  font-family: Clear Sans Regular;
  background-color: #90b892;
  color: white;
  /* padding: 15px 37px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  cursor: pointer;
  border-radius: 10px !important;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
