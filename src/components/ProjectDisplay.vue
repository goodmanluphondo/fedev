<template>
  <div class="project-display">
    <div class="">
      <div class="section">
        <div class="heading">
          <h2>Dploy Script</h2>
          <div class="">
            <a href="#" class="btn btn-graphical">
              <span class="">Edit Script</span>
              <span class="icon icon-pen"></span>
            </a>
          </div>
        </div>
        <div class="card script">
          <p>
            git pull origin master<br />
            composer install --no-interaction --prefer-dist
            --optimize-autoloader<br />
            echo "" | sudo -S service php7.3-fpm reload
          </p>
          <p>
            if [-f artisan]<br />
            then<br />
            &ensp;&ensp;php artisan migrate --force<br />
            &ensp;&ensp;php artisan horizon:terminate<br />
            fi
          </p>
          <p>
            yarn<br />
            yarn prod
          </p>
          <p>
            if [-f artisan]<br />
            then<br />
            &ensp;&ensp;php artisan migrate --force<br />
            &ensp;&ensp;php artisan horizon:terminate<br />
            fi
          </p>
        </div>
      </div>
      <div class="section">
        <div class="heading">
          <h2>Deployments</h2>
          <div class="">
            <a href="#" class="btn btn-graphical">
              <span class="">View Deployment History</span>
              <span class="icon icon-history"></span>
            </a>
          </div>
        </div>
        <div class="deployments">
          <div class="container">
            <div class="deployment-details">
              <div class="card deployment-card success">
                <div class="commit-details">
                  <h4>Froddo Baggins</h4>
                  <p>
                    Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor
                    sit amet amet amet amet.
                  </p>
                </div>
                <div class="commit-results">
                  <span class="commit-time">15:52 | 23 AUG</span>
                  <span class="commit-number">#7a7df2e</span>
                </div>
              </div>
            </div>
            <div class="deployment-details">
              <div class="card deployment-card warning">
                <div class="commit-details">
                  <h4>Bilbbo Baggins</h4>
                  <p>
                    Commit Details Lorem ipsum dolor sit amet lorem ipsul dolor
                    sit amet amet amet amet.
                  </p>
                </div>
                <div class="commit-results">
                  <span class="commit-time">15:52 | 23 AUG</span>
                  <span class="commit-number">#7a7df2e</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="heading">
          <h2>Builds</h2>
        </div>
        <div class="card builds">
          <div class="alert">There is currently no build history</div>
        </div>
      </div>
      <div class="section">
        <div class="heading">
          <h2>Sentry Issues</h2>
          <div class="">
            <a href="#" class="btn btn-graphical">
              <span class="">View on Sentry</span>
              <span class="icon icon-sentry"></span>
            </a>
          </div>
        </div>
        <div class="sentry-issues">
          <div class="container">
            <div class="issues">
              <div class="issues-list">
                <div class="issues-header">
                  <div class="issue-description"></div>
                  <div class="issue-users">Users Affected</div>
                  <div class="issue-events">Events</div>
                </div>
                <div class="issue">
                  <div class="issue-description">UnhandledRejection</div>
                  <div class="issue-users">265</div>
                  <div class="issue-events">265</div>
                </div>
                <div class="issue">
                  <div class="issue-description">UnhandledRejection</div>
                  <div class="issue-users">265</div>
                  <div class="issue-events">265</div>
                </div>
                <div class="issue">
                  <div class="issue-description">UnhandledRejection</div>
                  <div class="issue-users">265</div>
                  <div class="issue-events">265</div>
                </div>
                <div class="issue">
                  <div class="issue-description">UnhandledRejection</div>
                  <div class="issue-users">265</div>
                  <div class="issue-events">265</div>
                </div>
                <div class="issue">
                  <div class="issue-description">UnhandledRejection</div>
                  <div class="issue-users">265</div>
                  <div class="issue-events">265</div>
                </div>
              </div>
            </div>
            <div class="totals">
              <div class="totals-blocks">
                <div class="block affected-users">
                  <span class="block-count">52</span>
                  <span class="block-text">Affected Users</span>
                </div>
                <div class="block errors">
                  <span class="block-count">102</span>
                  <span class="block-text">Errors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.project-display {
  width: calc(100% - 360px);
}
.section {
  margin: 0;
  margin-bottom: 28px;
}
.heading {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-pen {
  background-image: url("../assets/pen.png");
}
.icon-sentry {
  background-image: url("../assets/sentry.png");
}
.icon-history {
  background-image: url("../assets/history.png");
}
.alert {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3d4558;
  font-size: 21px;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
}
.deployment-details {
  width: calc(50% - 5px);
}
.commit-details,
.commit-results {
  width: calc(50% - 20px);
}
.commit-number {
  width: 100%;
  display: block;
  padding: 16px 46px;
  border-radius: 10px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: #647291;
  background: rgba(100, 114, 145, 0.2);
}
.commit-time {
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 24px;
  line-height: 28px;
}
.script {
  width: 100%;
  padding: 35px 40px;
  background-color: #171c27;
}
.builds {
  width: 100%;
  height: 160px;
  border: 1px solid rgba(61, 69, 88, 0.3);
  background-color: rgba(23, 28, 39, 0.2);
}
.content {
  display: flex;
}
.issues {
  width: calc(100% - 260px);
}
.issues-list {
  width: 100%;
}
.issue-description {
  flex: 50%;
}
.issue-users {
  flex: 25%;
}
.issue-events {
  flex: 25%;
}
.issues-header {
  padding: 0 28px 12px;
  /* padding-bottom: 12px; */
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
}
.issues-header,
.issue {
  width: 100%;
  display: flex;
  line-height: 1;
}
.issue {
  padding: 14px 28px;
  margin: 0px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;

  background-color: #171c27;
}
.totals {
  flex: none;
  width: 250px;
  padding: 0;
  padding-top: 22px;
}
.totals-blocks {
  width: 100%;
  display: block;
}
.block {
  width: 250px;
  display: block;
  margin: 0;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 28px;
  text-align: center;
  background-color: #171c27;
}
.block-count {
  display: block;
  margin: 0;
  margin-bottom: 7px;
  font-size: 42px;
  font-weight: 600;
  line-height: 1;
}
.block-text {
  display: block;
  margin: 0;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
}
</style>
