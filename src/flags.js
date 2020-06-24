const flags = {
  'first-banner': false
}

export default {
  install (Vue) {
    Vue.prototype.$featureFlag = {
      check: (nameFlag) => flags[nameFlag] || false
    }
  }
}