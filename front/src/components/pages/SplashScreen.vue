<template>
  <main class="main">
    <img src="../../assets/new-logo2-no-bg.png" alt="Dctech Logo" id="logo" />
  </main>
</template>

<script>
import footer from "../Footer.vue";

export default {
  components: {
    my_footer: footer
  },
  created() {}
};
</script>

<style scoped>
/* media queries */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #logo {
    width: 60%;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  #logo {
    width: 60%;
  }
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
  display: flex;
  background-image: linear-gradient(120deg, #048936, #005c22);
  align-items: center;
  justify-content: center;
}
</style>
