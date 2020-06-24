import Vue from 'vue'
import App from './App.vue'
import $featureFlag from './flags.js'

Vue.config.productionTip = false
Vue.use($featureFlag)

new Vue({
  render: h => h(App),
}).$mount('#app')
