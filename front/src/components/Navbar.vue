<template>
  <div>
    <nav class="navbar-expand-md fixed-top tc-1">
      <img src="../assets/new-logo2.png" alt="Dctech Logo" id="logo" />
      <b-navbar toggleable type="dark" class="z-index-bottom">
        <b-navbar-toggle
          target="navbar-toggle-collapse"
          class="no-shadow ml-auto m-2 border-0"
        >
          <template #default="{ expanded }">
            <b-icon
              v-if="expanded"
              icon="grid"
              font-scale="1"
              class="tc-1 p-0"
            ></b-icon>
            <b-icon
              v-else
              icon="grid-fill"
              font-scale="1"
              class="tc-1"
            ></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" isNav>
          <b-navbar-nav class="ml-auto text-left pl-3">
            <b-nav-item class="on-hover">
              <router-link tag="p" to="/home" class="mb-0">
                HOME
              </router-link>
            </b-nav-item>
            <b-nav-item>WHO WE ARE</b-nav-item>
            <b-nav-item>FIBER PLAN</b-nav-item>
            <b-nav-item>HOW TO PAY</b-nav-item>
            <b-nav-item>NEWS</b-nav-item>
            <b-nav-item>CONTACT US</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div id="nav-top"></div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_user: {}
    };
  },
  created() {},
  methods: {
    logout() {
      this.$global.destroyGlobal();
      this.$auth.destroyToken();
      window.location.href = "/login";
    }
  }
};
</script>
<style>
.navbar {
  /* background: #242424; */
  background: #2e2e2e;
  font-family: "Century Gothic", "Gill Sans", "Gill Sans MT", "Calibri",
    "Trebuchet MS", sans-serif;
  font-size: small;
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 40px;
  margin-top: 50px;
  border-radius: 4px;
  letter-spacing: 0.05em;
  box-shadow: #3535357a 0 7px 15px 0;
}
.nav-link {
  color: #ffffff !important;
}
.btnr-div {
  position: relative;
  width: auto;
  height: 45px;
}
.btnr-div div {
  height: 45px;
  padding: 10px 0;
  text-indent: 10px;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
}
.outer {
  /* background-color: #575757; */
  background-color: #464e57;
  width: 100%;
}
.inner {
  /* background-color: #242424; */
  background-color: #292e33;
  width: 30%;
}
.navbar-brand:hover {
  color: #eeeeee;
}
.footer-div {
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
}
.center-span {
  font-family: "TW Cen MT";
  letter-spacing: 0.15em;
  font-weight: bold;
}
#logo {
  height: 63px;
  margin-top: 10px;
  z-index: 2;
  position: absolute;
  left: 0;
  margin-left: 65px;
  border-radius: 4px;
  /* border: 5px solid #ffffff; */
}
#nav-top {
  width: 100%;
  height: 72px;
  /* background-color: #ffffff; */
  z-index: 0;
  position: absolute;
  top: 0;
  transition: all 0.5s ease-in-out 0s;
  -moz-transition: all 0.5s ease-in-out 0s;
  -webkit-transition: all 0.3s ease-in-out 0s;
}
</style>
