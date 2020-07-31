<template>
  <div class="project-details">
    <div class="avatar">
      <img src="@/assets/1908-fixed-lte-gitlab-avatar.png" />
    </div>
    <div class="nav-back">
      <span class="nav-back-arrow"></span>
    </div>
    <div class="card project-card">
      <h3>Fixed LTE</h3>
      <p class="description">Node CMS | ~/repo/fixed-wireless</p>
      <div class="details">
        <div class="details-section">
          <span class="">Project ID: 234</span>
          <a href="#" class="btn btn-gitlab">view on gitlab</a>
        </div>
        <div class="details-section">
          <span class="">Auto Deploy</span>
          <span class="toggle">
            <span class="toggle-switch switched-on"></span>
          </span>
        </div>
        <div class="details-section">
          <span class="">Slack Notifications</span>
          <span class="toggle">
            <span class="toggle-switch"></span>
          </span>
        </div>
      </div>
    </div>
    <div class="project-options">
      <a href="#" class="btn" @click="rollback()">Rollback</a>
      <a href="#" class="btn btn-deploy">Deploy Now</a>
    </div>
    <a href="#" class="archive">Archive Project</a>
  </div>
</template>
<script>
export default {
  methods: {
    rollback() {
      if (!this.modal) {
        this.$store.dispatch("displayModal");
      }
    }
  },
  computed: {
    modal() {
      return this.$store.state.modal;
    }
  }
};
</script>
<style scoped>
.project-details {
  flex: none;
  width: 340px;
  margin: 0;
  margin-right: 20px;
  text-align: center;
  position: relative;
}
.avatar {
  top: 0px;
  left: 90px;
  z-index: 10;
  width: 160px;
  height: 160px;
  display: block;
  padding: 10px;
  position: absolute;
  border-radius: 50%;
  overflow: hidden;
  background-color: #171c27;
}
.avatar img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}
.nav-back {
  width: 50px;
  height: 50px;
  margin: 10px 20px 20px;
  display: block;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(61, 69, 88, 0.3);
  position: relative;
}
.nav-back-arrow {
  top: 18px;
  left: 22px;
  width: 14px;
  height: 14px;
  display: block;
  border: solid #647291;
  border-width: 0px 0px 1px 1px;
  transform: rotate(45deg);
  position: absolute;
}
.archive,
.description {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}
.project-card {
  margin: 0;
  padding: 14px;
  padding-top: 100px;
  text-align: center;
  color: #cdddff;
  background-color: #171c27;
}
.project-options {
  width: 100%;
  display: flex;
  margin: 28px 0px;
  justify-content: space-between;
}
.project-options .btn {
  width: calc(50% - 5px);
}
.details {
  text-align: left;
}
.details-section {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 10px;
  padding: 18px 20px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  color: #647291;
  background-color: rgba(61, 69, 88, 0.3);
}
.toggle {
  width: 40px;
  height: 20px;
  display: block;
  padding: 2px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background-color: #171c27;
  /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .25); */
}
.toggle-switch {
  width: 16px;
  height: 16px;
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
}
.switched-on {
  right: 2px;
  background: linear-gradient(to right, #ff3b70, #ff8057);
}
</style>
