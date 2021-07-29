<template>
  <div>
    <v-row justify="center" align="center">
      <v-btn color="success" @click="showMessage('success')">Success</v-btn>
      <v-btn color="error" @click="showMessage('error')">Error</v-btn>
      <v-btn color="#ccc" @click="showMessage('normal')">Normal</v-btn>
      <v-btn color="warning" @click="showMessage('warning')">Warning</v-btn>
    </v-row>
  </div>
</template>
<script>
export default {
  methods: {
    showMessage(type) {
      this.$message[type](`${type} message!`)
    }
  },
}
</script>
