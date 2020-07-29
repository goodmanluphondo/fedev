<template>
  <div class="project-details">
    <div class="avatar">
      <img src="@/assets/1908-fixed-lte-gitlab-avatar.png" />
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
      <a href="#" class="btn" onclick="rollback()">Rollback</a>
      <a href="#" class="btn btn-deploy">Deploy Now</a>
    </div>
    <a href="#" class="archive">Archive Project</a>
  </div>
</template>

<style>
.project-details {
  flex: none;
  width: 340px;
  margin: 0;
  margin-right: 20px;
  text-align: center;
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
