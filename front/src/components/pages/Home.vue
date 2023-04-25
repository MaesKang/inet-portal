<template>
  <main class="main">
    <div class="home-content">
      <div id="home-div">
        <div id="home-title" class="top-border-half bottom-border-half">
          EXPERIENCE THE DIFFERENCE
        </div>
        <div id="subscribe-btn-div">
          <a href="" id="subscribe-btn" class="transparent-btn">
            SUBSCRIBE NOW!
          </a>
        </div>
      </div>
      <div id="dcServices-div">
        <div id="techSupport-div" class="services-div">
          <div class="services-img-div">
            <img
              src="../../assets/tech-support.png"
              alt=""
              class="services-img"
            />
          </div>
          <span id="service-title-span">Technical Support</span>
          <span id="service-content-span">
            Experience the consistency of Dctech's technical support with
            technical engineers team.
          </span>
        </div>
        <div id="fibConnection-div" class="services-div">
          <div class="services-img-div">
            <img
              src="../../assets/fiber-optic.png"
              alt=""
              class="services-img"
            />
          </div>
          <span id="service-title-span">Fiber Connection</span>
          <span id="service-content-span">
            Delivering the fastest, reliable and newest technology in your
            premises.
          </span>
        </div>
        <div id="helpdesk-div" class="services-div">
          <div class="services-img-div">
            <img
              src="../../assets/24-7-support.png"
              alt=""
              class="services-img"
            />
          </div>
          <span id="service-title-span">Helpdesk Support</span>
          <span id="service-content-span">
            Provides phone assistance for internet trouble shooting or webserver
            problem.
          </span>
        </div>
      </div>
      <div id="whoWeAre-div">
        <div id="video-div">
          <iframe
            id="vid-iframe"
            src="https://www.youtube.com/embed/1RzhA3GnQfg?DCTECH?autoplay=1&mute=1"
          >
          </iframe>
        </div>
        <div id="usText-div">
          DCTECH was founded on April 28, 1989 by a team of enthusiasts, Walden
          Lima, Ryan Sumalinog and Agnes Sumalinog. The group started as a
          computer consumable dealer, until it has found its way to include
          hardware, software and peripherals to its pool of products.
          <br /><br />
          DCTECH has expanded its customer base, formal incorporation followed
          in May 1990. Over the years, the company has continuously grown and
          developed to become an established and recognized company in all
          sectors of the IT industry. <br /><br />Currently, DCTECH is operating
          four (4) divisions, the Computer Division, Internet Division,
          Solutions Division and Metal Division. <br /><br />As a leading
          Solution and Network Data provider, DCTECH strives to continually
          provide better products and services that meet the growing needs of
          our customers. <br /><br />At DCTECH, we leave nothing to chance to be
          at the leading edge of technology. Being at the forefront, we strive
          to be first to provide the best and the newest technology has to
          offer. <br /><br />Our main aim is to provide sales and services at
          par excellence, with unparalleled quality and reliability. Total
          customer satisfaction is our number one priority.
        </div>
      </div>
    </div>
    <my_footer></my_footer>
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

<style>
/* ids */
#home-div {
  background: url("https://picsum.photos/720/1250") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-top: 300px;
  padding-bottom: 180px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-flow: wrap;
}
#home-title {
  width: 100%;
  background-image: linear-gradient(90deg, #ffffff00, #1b1b1b, #ffffff00);
  color: #ffffff;
  padding: 25px;
  font-family: "Clear Sans Light", "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  font-size: 3em;
  letter-spacing: 0.05em;
  margin-bottom: 50px;
}
#subscribe-btn-div {
  width: 100%;
}
#subscribe-btn {
  font-family: "Clear Sans", "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  font-size: xx-large;
  color: #000000;
  text-shadow: 0 2px 8px #ffffff;
}
#dcServices-div {
  background: #252525;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
}
#service-title-span {
  /* font-size: 1.1vw; */
  font-size: min(max(16px, 1.1vw), 22px);
  text-align: left;
  color: #ffed8f;
  width: 100%;
  padding-top: 2%;
}
#service-content-span {
  /* font-size: 0.9vw; */
  font-size: min(max(15px, 0.9vw), 20px);
  text-align: left;
  width: 100%;
  padding-top: 5%;
}
#whoWeAre-div {
  background: #7c7c7c;
  width: 100%;
  /* margin-top: 150px; */
  /* z-index: 0; */
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}
#video-div {
  /* background: url("../../assets/vid-bg-tiny.png") no-repeat;
  background-size: cover;
  background-position: center; */
  background: #f7f7f7;
  flex: 1;
  padding: 100px;
  min-width: 500px;
  min-height: 300px;
}
#usText-div {
  font-family: "Comfortaa", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  background: #ffffff;
  color: #5c5c5c;
  flex: 1;
  padding: 100px;
  padding-top: 0;
  min-width: 500px;
  text-align: justify;
}
#vid-iframe {
  width: 80%;
  height: 80%;
}
/* classes */
.top-border-half {
  border-top: 1px solid transparent;
  position: relative;
}
.bottom-border-half {
  border-bottom: 1px solid transparent;
  position: relative;
}
.top-border-half:after {
  content: "";
  width: 50%;
  height: 7px;
  background-image: linear-gradient(90deg, #000000, #ffffff);
  position: absolute;
  right: 0;
  top: -1px;
}
.bottom-border-half:before {
  content: "";
  width: 50%;
  height: 7px;
  background-image: linear-gradient(90deg, #ffffff, #000000);
  position: absolute;
  left: 0;
  bottom: -1px;
}
.transparent-btn,
.transparent-btn:hover,
.transparent-btn:focus {
  background: transparent;
  outline: none;
  border: 0;
  box-shadow: none;
  text-decoration: none;
}
.services-div {
  flex: 1;
  min-width: 300px;
  font-family: "Comfortaa", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  /* background-image: linear-gradient(#1d1d1d, #000000); */
  background: #131313;
  display: flex;
  color: #ffffff;
  padding: 40px;
  padding-bottom: 4%;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: left;
}
.services-img-div {
  width: 100%;
  background: #050505;
  text-align: center;
  padding: 20px;
  margin-bottom: 25px;
}
.services-img {
  width: 40%;
}

/* remove to follow services design */
/* #techSupport-div > .services-round-div,
#helpdesk-div > .services-round-div {
  padding-bottom: 30%;
  width: 30%;
}
#techSupport-div > #service-title-span,
#helpdesk-div > #service-title-span {
  font-size: min(max(15px, 0.9vw), 20px);
}
#techSupport-div > #service-content-span,
#helpdesk-div > #service-content-span {
  font-size: min(max(14px, 0.8vw), 18px);
} */
</style>
