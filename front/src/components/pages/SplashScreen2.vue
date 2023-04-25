<template>
  <main class="main">
    <div class="div1"></div>
    <div class="div2">
      <img src="../../assets/undraw-payment.png" id="payment-img" />
      <label class="act-label">
        Check account transactions<br />and balance
      </label>
    </div>
    <div class="div3">
      <label class="act-label2"> Track installation </label>
      <img src="../../assets/undraw-completed-steps.png" id="payment-img" />
    </div>
    <!-- <div class="div4">
      <img src="../../assets/track-location-white.png" id="track-img" />
    </div> -->
    <div class="div5">
      <label class="act-label3">
        Ask questions and <br />
        <span class="faq-span">read through FAQs</span>
      </label>
    </div>
    <div class="div6"></div>
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
