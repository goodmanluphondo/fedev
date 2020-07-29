<template>
  <div id="app" class="site">
    <SiteHeader />
    <router-view />
  </div>
</template>

<script>
import SiteHeader from "@/components/Header.vue";

export default {
  name: "Home",
  data() {
    return {
      cart: []
    };
  },
  components: {
    SiteHeader
  }
};
</script>
<style>
*,
*::before,
*::after {
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Thin.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-Thin.woff") format("woff");
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-SemiBoldItalic.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-SemiBoldItalic.woff") format("woff");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-LightItalic.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-LightItalic.woff") format("woff");
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-MediumItalic.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-MediumItalic.woff") format("woff");
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Italic.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-Italic.woff") format("woff");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Light.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Regular.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Bold.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Medium.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-SemiBold.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-BoldItalic.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-BoldItalic.woff") format("woff");
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-ThinItalic.woff2") format("woff2"),
    url("./assets/fonts/Montserrat-ThinItalic.woff") format("woff");
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}
html {
  line-height: 1.5;
}
body {
  font-size: 12px;
  font-family: Montserrat, serif, sans-serif;
  position: relative;
  color: #647291;
  background-color: #000;
}
h6,
h5,
h4,
h3,
h2,
h1 {
  font-weight: 300;
  font-family: Montserrat, sans-serif;
}
h2 {
  margin: 0;
  margin-bottom: 28px;
  font-size: 32px;
  background: -webkit-linear-gradient(#ff3b70, #ff8057);
  background: linear-gradient(to right, #ff3b70, #ff8057);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h3 {
  margin: 0;
  margin-bottom: 14px;
  font-size: 28px;
}
h4 {
  margin: 0;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 400;
  color: #cdddff;
}
ul,
ol {
  list-style: none;
}
p {
  margin: 0;
  margin-bottom: 12px;
}
a {
  color: inherit;
  font-family: inherit;
  text-decoration: none;
}
.site {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #11141d;
}
.content {
  padding: 60px 40px;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
