<template>
  <div name="modal">
    <div class="modal-mask" @click="closeModal">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document" @click.stop>
          <div class="modal-content p-4">
            <div class="modal-header border-0 p-0">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="closeModal">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              <p>{{ message }}</p>
            </div>
            <div class="modal-footer border-0 p-0">
              <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    message() {
      return this.$store.state.modalMessage;
    }
  },
  methods: {
    closeModal() {
      this.$store.state.showModal = false;
    },
    dontClose() {
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
