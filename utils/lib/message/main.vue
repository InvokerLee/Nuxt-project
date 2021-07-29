<template>
  <div class="lib--message" :style="{ top }">
    <v-snackbar
      v-model="visible"
      :color="color"
      top
      :vertical="vertical"
      :timeout="timeout"
      absolute
    >
      <div>
        {{ message }}
      </div>
      <template v-if="showClose" #action="{ attrs }">
        <v-btn text v-bind="attrs" style="margin-right: 8px;" @click="visible = false">
          <span>CLOSE</span>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      // 定义默认参数
      color: '',
      timeout: 3000,
      vertical: false,
      showClose: true,
      top: '20px',
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        // 销毁
        this.destroyMyself()
      }
    }
  },
  methods: {
    destroyMyself() {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
<style>
.lib--message {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
