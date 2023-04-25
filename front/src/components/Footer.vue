<template>
  <div id="foot-main">
    <div id="foot-space"></div>
    <div id="foot-top"></div>
    <div id="my_footer">
      <div id="left-foot-div">
        <div id="lf-child-div">
          <p>
            <i class="fas fa-map-marker-alt fa-2x left-foot-icon mr-24"></i>
            Dctech Building, Shanghai Street, Matina Aplaya, Davao City
          </p>
          <p>
            <i class="fas fa-phone fa-2x left-foot-icon"></i>
            (082) 221 - 2380
          </p>
          <p>
            <i class="fas fa-envelope fa-2x left-foot-icon"></i>
            sales@dctechmicro.com
          </p>
        </div>
      </div>
      <div id="center-foot-div">
        <a
          href="https://www.facebook.com/dctechmicroservicesinc/"
          target="_blank"
          ><i id="fb-icon" class="fab fa-facebook"></i
        ></a>
        <a href=""><i id="skype-icon" class="fab fa-skype"></i></a>
        <a href=""><i id="viber-icon" class="fab fa-viber"></i></a>
        <a href=""><i id="mail-icon" class="fas fa-envelope-open-text"></i></a>
      </div>
      <div id="right-foot-div">
        © 2016 - 2021 DctecH Micro Services Inc.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style>
/* ids */
#my_footer {
  font-family: "Comfortaa", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
}
#left-foot-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #343434;
  padding: 40px;
  padding-bottom: 30px;
  min-width: 400px;
}
#lf-child-div {
  flex: 1;
  display: flex;
  flex-direction: column;
  line-height: 2em;
  font-size: min(max(10px, 0.8vw), 12px);
  align-self: center;
  text-align: left;
}
#center-foot-div {
  flex: 1;
  display: flex;
  flex-direction: row;
  background: #077949;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-width: 400px;
}
#center-foot-div > a {
  font-size: 4vh;
  text-shadow: #000000 0 4px 8px;
  color: #ffffff;
  margin: 6px;
  border: 0;
  transition: 0.5s;
}
#center-foot-div > a:hover {
  font-size: 4.1vh;
  color: #f1f1f1;
}
#right-foot-div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(max(10px, 0.8vw), 12px);
  background: #1d1d1d;
  padding: 40px;
  min-width: 400px;
}
#foot-top {
  height: 50px;
  background: linear-gradient(#bbbbbb 20px, #707070 0);
}
#foot-space {
  height: 50px;
}
#fb-icon:hover {
  color: #5d86d8;
}
#skype-icon:hover {
  color: #00aff0;
}
#viber-icon:hover {
  color: #877cd3;
}
#mail-icon:hover {
  color: #d65a5c;
}
/* classes */
.left-foot-icon {
  color: #ffed8f;
  margin-right: 20px;
}
</style>
