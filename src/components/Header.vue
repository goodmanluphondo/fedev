<template>
  <header>
    <div class="logo">
      <h1>
        <a href="#">dploy</a>
      </h1>
    </div>
    <div class="menu">
      <nav class="menu-links">
        <a href="#">
          <i class="menu-icon menu-icon-home"></i>
        </a>
        <a href="#">
          <i class="menu-icon menu-icon-unknown menu-icon-active"></i>
        </a>
      </nav>
    </div>
    <div class="info">
      <div class="info-icon"></div>
      <div class="info-message">
        Build on project name completed by person name
      </div>
    </div>
    <div class="menu">
      <nav class="menu-links">
        <a href="#">
          <i class="menu-icon menu-icon-notifications">
            <span class="menu-icon-option">2</span>
          </i>
        </a>
        <a href="#">
          <i class="menu-icon menu-icon-alerts">
            <span class="menu-icon-option menu-icon-cross">&times;</span>
          </i>
        </a>
      </nav>
    </div>
    <div class="user">
      <div class="user-details">
        <div class="user-profile">
          <div class="user-names">Frodo Baggins</div>
          <div class="user-email">frodo@mordor.co</div>
        </div>
        <div class="user-picture">
          <img src="@/assets/T189G7EMC-U189XABK7-58e28f9aa76c-48.png" />
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 70px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #171c27;
}
.logo {
  padding: 15px 25px;
}
.logo h1 a {
  width: 100px;
  height: 30px;
  display: block;
  font-size: 10px;
  line-height: 30px;
  text-indent: -9999px;
  text-decoration: none;
  background-size: auto 30px;
  background-image: url("../assets/logo.svg");
  background-repeat: no-repeat;
}
.menu {
  text-align: center;
}
.menu-links {
  display: flex;
  justify-content: center;
}
.menu-icon {
  width: 50px;
  height: 50px;
  display: block;
  margin: 0px 5px;
  position: relative;
  border-radius: 10px;
  background-size: 20px;
  background-color: rgba(61, 69, 88, 0.3);
  background-repeat: no-repeat;
  background-position: center;
}
.menu-icon.menu-icon-home {
  background-image: url("../assets/home.png");
}
.menu-icon.menu-icon-unknown {
  background-image: url("../assets/unknown.png");
}
.menu-icon.menu-icon-notifications {
  background-size: 100%;
  background-image: url("../assets/notifications.svg");
}
.menu-icon.menu-icon-alerts {
  background-size: 100%;
  background-color: #11141d;
  background-image: url("../assets/alerts.svg");
}
.menu-icon-active {
  border: 1px solid #ff3b70;
  background-color: #11141d;
}
.menu-icon-option {
  top: 10px;
  right: 5px;
  width: 18px;
  height: 18px;
  display: block;
  z-index: 10;
  padding: 0;
  font-size: 10px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  border-radius: 50%;
  color: #171c27;
  background-color: #cdddff;
  position: absolute;
}
.menu-icon-cross {
  font-size: 20px;
}
.user {
  text-align: right;
}
.user-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  line-height: 1;
}
.user-names {
  font-size: 14px;
  font-weight: 500;
}
.user-email {
  font-size: 10px;
  font-weight: 500;
}
.user-picture {
  width: 50px;
  height: 50px;
  margin: 0px;
  margin-left: 20px;
}
.info {
  width: 480px;
  height: 40px;
  padding: 14px;
  display: block;
  line-height: 1;
  text-align: center;
  border-radius: 10px;
  background-color: #11141d;
}
.info-icon {
  width: 12px;
  height: 12px;
  margin: 0px;
  margin-right: 12px;
  display: inline-block;
  background-size: 100%;
  background-image: url("../assets/success-light.png");
  background-repeat: no-repeat;
  background-position: bottom center;
}
.info-message {
  color: #647291;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
}
</style>
