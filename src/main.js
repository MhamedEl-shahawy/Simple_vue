import Vue from 'vue'
import App from './App.vue'
import Slider from '@jeremyhamm/vue-slider'

Vue.config.productionTip = false

Vue.use(Slider);

new Vue({
  render: h => h(App),
}).$mount('#app')
