import Vue from 'vue'
import  { merge } from '../../index'
import Main from './main.vue'

const types = ['success', 'error', 'normal', 'warning'];

const defaults = {
  color: '',
  timeout: 3000,
  vertical: false,
  showClose: true,
  top: '20px',
}

const getColor = (type) => {
  return {
    error: '#ff5252',
    info: '#16d',
    success: '#4caf50',
    normal: '#333',
    warning: '#fb8c00',
  }[type]
}

const MessageConstructor = Vue.extend(Main)

let instance

const Message = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options,
    }
  }

  if (!options.color) {
    options.color = getColor(options.type || 'normal')
  }

  // 防止永久存在
  if (options.timeout === -1 && !(options.showClose || defaults.showClose)) {
    options.timeout = defaults.timeout
  }
  console.log(options)

  const data = merge({}, defaults, options)
  instance = new MessageConstructor({
    data,
  })

  // 挂载
  instance.$mount()
  document.body.appendChild(instance.$el)

  instance.visible = true;

  return instance;
}

types.forEach((type) => {
  Message[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
