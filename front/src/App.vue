<template>
  <div class="container" id="app">
    <div class="container-fluid">
      <!-- <navbar></navbar> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UnderConstruction from "./components/pages/Under_Construction.vue";
import Home from "./components/pages/Home.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    uc: UnderConstruction,
    home: Home,
    navbar: Navbar
  },
  data() {
    return {
      isAuth: null,
      tokenParsed: null,
      isloaded: false,
      user: null
    };
  },
  beforeCreate() {},
  mounted() {
    this.$root.$on("logout", () => {
      this.logout();
    });
  },
  created() {
    this.tokenParsed = this.$keycloak.tokenParsed;
    this.isAuth = this.$keycloak.authenticated;
    console.log("maes logger");
    console.log(this.$keycloak);
    this.load();
  },
  methods: {
    load() {
      if (this.isAuth) {
        console.log(
          "authenticated user:" + this.tokenParsed.preferred_username
        );
        this.$http
          .get("api/enrolledAccount/" + this.tokenParsed.preferred_username)
          .then(function(response) {
            this.$global.setAccounts(response.body);
            this.$global.setUser(this.tokenParsed.preferred_username);
          });
      }
    },
    logout() {
      this.$global.destroyGlobal();
      this.$auth.destroyToken();
      this.$keycloak.logout({
        redirectURL: "http://localhost::8080/"
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Lexend", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.no-shadow:focus {
  box-shadow: none;
}
.bg-1 {
  background-color: #0ab66e;
}
.bg-2 {
  background-color: #181818;
}
.tc-1 {
  color: #f7f7f7 !important;
}
.main {
  /* vuejs logo color palette */
  /* background-color: #42b883 !important; */
  /* background-color: #35495e !important; */
  background-size: cover;
  background-position: center;
  background-color: #ffffff !important;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.main::-webkit-scrollbar {
  /* WebKit */
  width: 0;
  height: 0;
}
.home-content {
  background: linear-gradient(#e9e9e9 1100px, #dddddd 0);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.z-index-bottom {
  z-index: 1;
  position: relative;
}
.mr-24 {
  margin-right: 24px !important;
}
</style>
