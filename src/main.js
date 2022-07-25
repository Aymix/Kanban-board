import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store/store'

Vue.config.productionTip = false

store.subscribe( (mutation, state) => {
    localStorage.setItem('columns', JSON.stringify(state.columns));  
    
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
