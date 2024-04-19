<template>
  <div>
    <AppHeader />
    <main>
      <div class="loader" v-if="loading">Loading...</div>
      <section v-else class="grid">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :cardData="card"
          :class="`card-${index}`"
        >
          <template #name>
            <li>
              Name: <span class="capitalize">{{ card.name }}</span>
            </li>
          </template>
          <template #height>
            <li>
              Height: <span>{{ `${card.height} cm` }}</span>
            </li>
          </template>
          <template #mass>
            <li>
              Mass: <span>{{ `${card.mass} kg` }}</span>
            </li>
          </template>
          <template #hair_color>
            <li>
              Hair color: <span class="capitalize">{{ card.hair_color }}</span>
            </li>
          </template>
          <template #skin_color>
            <li>
              Skin color: <span class="capitalize">{{ card.skin_color }}</span>
            </li>
          </template>
          <template #eye_color>
            <li>
              Eye color: <span class="capitalize">{{ card.eye_color }}</span>
            </li>
          </template>
          <template #birth_year>
            <li>
              Birth year: <span class="capitalize">{{ card.birth_year }}</span>
            </li>
          </template>
          <template #gender>
            <li>
              Gender: <span class="capitalize">{{ card.gender }}</span>
            </li>
          </template>
          <template #button>
            <ReusableButton @click="editItem(card)">Edit</ReusableButton>
          </template>
        </Card>
        <Form />
      </section>
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";
import ReusableButton from "@/components/ReusableButton.vue";

import { ref, onMounted } from "vue";
import { useCardStore } from "@/stores/card.js";
import { useFormStore } from "@/stores/form.js";
import useAPI from "@/composables/useAPI.js";

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
    const formStore = useFormStore();
    const { fetchData } = useAPI();

    onMounted(async () => {
      // Fetch data from Star Wars API if localStorage is empty, else get it from localStorage
      try {
        if (!localStorage.localCards) {
          const person = [20, 4, 10]; // IDs of people to fetch
          const fetchPromises = person.map((id) =>
            fetchData(`https://swapi.dev/api/people/${id}`)
          );
          const results = await Promise.all(fetchPromises);
          cardStore.setCards(results); // Set data in pinia state
          cards.value = results; // Set data to actual shown cards
        } else {
          const localCards = JSON.parse(localStorage.getItem("localCards")); // Get localStorage data
          cardStore.setCards(localCards); // Set data to state
          cards.value = localCards; // Set data to shown cards
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        loading.value = false; // Turn off loader
      }
    });

    const editItem = (card) => {
      formStore.openForm(card); // opens the editing form with the cards values
    };
    return { cards, loading, editItem };
  },
};
</script>
