<template>
  <div>
    <AppHeader/>
    <main>
      <section class="grid">
        <AppCard v-if="cards[0]" :cardData="cards[0]" class="first"/>
        <AppCard v-if="cards[1]" :cardData="cards[1]" class="second"/>
        <AppCard v-if="cards[2]" :cardData="cards[2]" class="third"/>
        <EditForm/>
        
      </section>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppCard from "@/components/Card.vue";
import EditForm from "@/components/Form.vue";
import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppCard,
    EditForm,
  },
  setup() {
    const cards = ref([]);

    onMounted(async () => {
      const person = [20, 4, 10]; // IDs of the persons to fetch
      const fetchPromises = person.map(id =>
        fetch(`https://swapi.dev/api/people/${id}`).then(response => response.json())
      );

      try {
        const results = await Promise.all(fetchPromises);
        cards.value = results;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return { cards };
  },
  
};
</script>