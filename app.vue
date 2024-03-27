<template>
  <AppHeader/>
  <main>
    <section class="grid">
      
      <AppCard class="first"/>
      <AppCard class="second"/>
      <AppCard class="third"/>
      
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

export default {
  name: "App",
  components: {
    AppHeader,
    AppCard,
    EditForm,
  },
  
  
}

</script>