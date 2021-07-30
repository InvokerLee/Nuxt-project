import Vue from 'vue'
import  { merge } from '../../index'
import Main from './main.vue'

// defaults
const defaults = {
  width: 540,
  title: '',
  message: '',
  showClose: true,
  showCancelBtn: false,
  cancelBtnText: 'Cancel',
  showConfirmBtn: false,
  confirmBtnText: 'Ok',
  onClose: null,
  onConfirm: null,
}

const MessageBoxConstructor = Vue.extend(Main)

let instance

const MessageBox = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}

  const data = merge({}, defaults, options)

  instance = new MessageBoxConstructor({
    data,
  })

  // mount
  instance.$mount()
  document.body.appendChild(instance.$el)

  instance.visible = true
  
  return instance
}

export default MessageBox
