<template>
  <div>
    <AppHeader/>
    <main>
      <div class="loader" v-if="loading">Loading...</div>
      <section v-else class="grid">
        
        <Card v-for="(card, index) in cards" :key="index" :cardData="card" :class="`card-${index}`"/>
        <Form/>
        
      </section>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";

import { ref, onMounted } from "vue";
import { useCardStore } from "@/stores/card.js"

export default {
  name: "App",
  components: {
    AppHeader,
    Card,
    Form,
    
  },
  setup() {
    const cards = ref([]); // constant array for list of cards
    const loading = ref(true); //boolean for loader to show before fetching
    const cardStore = useCardStore();

    onMounted(async () => {
      // if localStorage is empty fetch data from StarWars API, else get it from the localStorage
     if (!localStorage.localCards) {
      const person = [20, 4, 10]; // IDs of people to fetch
      const fetchPromises = person.map(id =>
        fetch(`https://swapi.dev/api/people/${id}`).then(response => response.json())
      );

      try {
        const results = await Promise.all(fetchPromises);
        cardStore.setCards(results); //set data in pinia state
        cards.value = results; //set data to actual shown cards
        loading.value = false; //loader is off
      } catch (error) {
        console.error('Error fetching data:', error);
        loading.value = false; //loader is off
      } 
    } else {
        const localCards = JSON.parse(localStorage.getItem('localCards')) //gets localStorage data
        cardStore.setCards(localCards); //set data to state
        cards.value = localCards; //set data to shown cards
        loading.value = false; //loader is off
      }

    });
    return { cards, loading };
  },
};
</script>