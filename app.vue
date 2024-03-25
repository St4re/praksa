<template>
  <AppHeader/>
  <main>
    <section class="grid">
      <AppCard class="first"/>
      <!--<AppCard class="second"/>
      <AppCard class="third"/>-->
      
        <EditForm/>
    </section>
  </main>
</template>

<script >
import "./assets/css/main.css"
import "./assets/css/base.css"

import AppHeader from "@/components/Header.vue"
import AppCard from "@/components/Card.vue"
import EditForm from "@/components/Form.vue"


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app.vue'

/*const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')*/


export default {
  name: "app",
  components: {
    AppHeader,
    AppCard,
    EditForm,
  },
  
  
}

</script>