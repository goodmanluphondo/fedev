<template>
  <div class="modal-wrapper" @click.self="closeModal()">
    <div v-if="currentModalScreen == 1">
      <div class="modal">
        <div class="modal-close" @click="closeModal()">&times;</div>
        <div class="modal-title">
          <h2>Project Rollback</h2>
          <span class="modal-title-description"
            >Choose a deployment to roll back to</span
          >
        </div>
        <div class="modal-body">
          <ul class="list">
            <li class="list-item">
              <div class="list-item-column">
                <span class="modal-commit-user">Frodo B</span>
              </div>
              <div class="list-item-column">
                <span class="modal-commit-number">#7a7df2e</span>
              </div>
              <div class="list-item-column">15:25 25 09 2019</div>
            </li>
            <li class="list-item">
              <div class="list-item-column">
                <span class="modal-commit-user">Arwen</span>
              </div>
              <div class="list-item-column">
                <span class="modal-commit-number">#7a7df2e</span>
              </div>
              <div class="list-item-column">15:25 25 09 2019</div>
            </li>
            <li class="list-item">
              <div class="list-item-column">
                <span class="modal-commit-user">Bilbo B</span>
              </div>
              <div class="list-item-column">
                <span class="modal-commit-number">#7a7df2e</span>
              </div>
              <div class="list-item-column">15:25 25 09 2019</div>
            </li>
            <li class="list-item">
              <div class="list-item-column">
                <span class="modal-commit-user">Pippin T</span>
              </div>
              <div class="list-item-column">
                <span class="modal-commit-number">#7a7df2e</span>
              </div>
              <div class="list-item-column">15:25 25 09 2019</div>
            </li>
            <li class="list-item">
              <div class="list-item-column">
                <span class="modal-commit-user">Gandalf</span>
              </div>
              <div class="list-item-column">
                <span class="modal-commit-number">#7a7df2e</span>
              </div>
              <div class="list-item-column">15:25 25 09 2019</div>
            </li>
          </ul>
        </div>
        <div class="modal-options">
          <a href="#" class="modal-btn" @click="stepBack()">Back</a>
          <a
            href="#"
            class="modal-btn modal-btn-inverted"
            @click="stepForward()"
            >Next</a
          >
        </div>
      </div>
    </div>

    <div v-else-if="currentModalScreen == 2">
      <div class="modal">
        <div class="modal-close" @click="closeModal()">&times;</div>
        <div class="modal-title">
          <h2>Are you sure?</h2>
          <span class="modal-title-description"
            >Are you sure you want to roll back?</span
          >
        </div>
        <div class="modal-body">
          <div class="modal-deployment">
            <div class="modal-deployment-user">
              <h4>Pippin Took</h4>
              <p>
                This is a generc commit message to be replaced by a real commit
                message that contains details of the commit.
              </p>
            </div>
            <div class="modal-deployment-info">
              <div class="modal-commit-time">15:25 &emsp; 25 09 2019</div>
              <div class="modal-commit-number">#7a7df2e</div>
            </div>
          </div>
        </div>
        <div class="modal-options">
          <a href="#" class="modal-btn" @click="stepBack()">No, Go Back</a>
          <a
            href="#"
            class="modal-btn modal-btn-inverted"
            @click="stepForward()"
            >Yes, Rollback</a
          >
        </div>
      </div>
    </div>

    <div v-else-if="currentModalScreen == 3">
      <div class="modal">
        <div class="modal-close" @click="closeModal()">&times;</div>
        <div class="modal-title">
          <div class="modal-icon">
            <div class="modal-icon-check"></div>
          </div>
          <h2>Rollback successful</h2>
          <span class="modal-title-description"
            >Fixed LTE has been rolled back successfully</span
          >
        </div>
        <div class="modal-body">
          <a href="#" class="modal-btn modal-btn-inverted" @click="closeModal()"
            >Go to Project</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$store.dispatch("closeModal");
    },
    stepBack() {
      if (this.currentModalScreen == 1) {
        this.$store.dispatch("closeModal");
      } else {
        let screen = this.currentModalScreen - 1;
        this.$store.dispatch("updateModalScreen", screen);
      }
    },
    stepForward() {
      let screen = this.currentModalScreen + 1;
      this.$store.dispatch("updateModalScreen", screen);
    },
    handleModalClick() {
      console.log("you have clicked on the modal.");
    }
  },
  computed: {
    modal() {
      return this.$store.state.modal;
    },
    currentModalScreen() {
      return this.$store.state.modalScreen;
    }
  }
};
</script>
<style scoped>
.modal-wrapper {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: block;
  position: fixed;
  background: rgba(17, 20, 29, 0.9);
}
.modal {
  width: 680px;
  height: auto;
  margin: 160px auto 0px;
  padding: 80px 80px 120px;
  display: block;
  text-align: center;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  background-color: #171c27;
}
.modal-close {
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  font-size: 24px;
  /* font-weight: 700; */
  line-height: 30px;
  text-align: center;
  display: block;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  color: #cdddff;
  background-color: rgba(61, 69, 88, 0.3);
}
.modal-title {
  margin: 0;
  margin-bottom: 30px;
}
.modal-title h2 {
  margin: 0;
}
.modal-title-description {
  font-size: 20px;
  font-weight: 400;
}
.modal-icon {
  width: 90px;
  height: 90px;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 2px solid #ff3b70;
  border-radius: 50%;
  position: relative;
}
.modal-icon-check {
  top: 9px;
  left: 26px;
  width: 33px;
  height: 52px;
  display: block;
  border: solid #ff3b70;
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  position: absolute;
}
.modal-body {
  position: relative;
}
.list-item {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  padding: 10px 30px;
  margin: 0;
  margin-bottom: 10px;
  border-radius: 10px;
  color: #647291;
  background-color: rgba(61, 69, 88, 0.3);
}
.list-item:hover {
  border: 1px solid #cdddff;
}
.modal-deployment {
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #647291;
  background-color: #171c27;
}
.modal-deployment-user {
  padding: 10px;
  text-align: left;
}
.modal-deployment-info {
  width: 250px;
  padding: 10px;
  text-align: right;
}
.modal-options {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  position: absolute;
  z-index: 1001;
  background-color: rgba(61, 69, 88, 0.3);
}
.modal-commit-time {
  display: block;
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 24px;
  line-height: 28px;
}
.modal-commit-user {
  display: inline-block;
  min-width: 100px;
  text-align: left;
}
.modal-commit-number {
  width: 100%;
  display: block;
  padding: 10px 30px;
  border-radius: 10px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  color: #647291;
  background: rgba(100, 114, 145, 0.2);
}
.modal-btn {
  flex: none;
  width: auto;
  height: 40px;
  padding: 14px 60px;
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  border-radius: 10px;
  position: relative;
  background-color: rgba(61, 69, 88, 0.3);
}
.modal-btn-inverted {
  border: 1px solid #cdddff;
  background: rgba(0, 0, 0, 0.1);
}
</style>
