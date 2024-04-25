<template>
  <div>
    <AppHeader />
    <main>
      <section class="grid">
        <CardSkeleton v-if="isLoading" />
        <CardSkeleton v-if="isLoading" />
        <CardSkeleton v-if="isLoading" />

        <Card v-else v-for="(card, index) in cards" :key="index" :cardData="card" :class="`card-${index}`">
          <template #cardBody>

            <li>
              Name: <span class="capitalize">{{ card.name }}</span>
            </li>
            <li>
              Height: <span>{{ `${card.height} cm` }}</span>
            </li>
            <li>
              Mass: <span>{{ `${card.mass} kg` }}</span>
            </li>
            <li>
              Hair color: <span class="capitalize">{{ card.hair_color }}</span>
            </li>
            <li>
              Skin color: <span class="capitalize">{{ card.skin_color }}</span>
            </li>
            <li>
              Eye color: <span class="capitalize">{{ card.eye_color }}</span>
            </li>
            <li>
              Birth year: <span class="capitalize">{{ card.birth_year }}</span>
            </li>
            <li>
              Gender: <span class="capitalize">{{ card.gender }}</span>
            </li>

          </template>

          <template #cardFooter>
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
import CardSkeleton from "@/components/CardSkeleton.vue";

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
    CardSkeleton,
  },
  setup() {
    const cards = ref([]); // constant array for list of cards
    const isLoading = ref(true); //boolean for loader to show before fetching
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
        isLoading.value = false; // Turn off loader
      }
    });

    const editItem = (card) => {
      formStore.openForm(card); // opens the editing form with the cards values
    };
    return { cards, isLoading, editItem };
  },
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
}

main {
  background-color: black;
  height: 85vh;
  align-items: center;
  display: flex;
}

.grid {
  width: 43%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  justify-items: center;
  margin: 0 auto;
  filter: drop-shadow(0 0 100px #e3d61d66);
}

.loader {
  color: #e3d61d;
  font-size: 3em;
  text-transform: uppercase;
  left: 45%;
  position: absolute;
}

.card-0 {
  background-image: url("assets/images/yoda.png");
}

.card-1 {
  background-image: url("assets/images/vader.png");
}

.card-2 {
  background-image: url("assets/images/obi.png");
}

@media screen and (max-width: 1280px) {
  .grid {
    width: 60%;
    height: 85%;
    display: grid;
  }
}

@media screen and (max-width: 1024px) {
  main {
    height: 90vh;
  }

  .grid {
    width: 85%;
    height: 40%;
    display: grid;
  }
}

@media screen and (max-width: 768px) {
  main {
    background-color: black;
    height: 90vh;
    align-items: center;
    display: block;
  }

  .grid {
    width: 90%;
    height: 90%;
  }
}

@media screen and (max-width: 480px) {
  main {
    height: 150vh;
    align-items: center;
    display: block;
  }

  .grid {
    width: 60%;
    height: 33%;
    display: block;
    padding-top: 30px;
  }
}

@media screen and (max-width: 400px) {
  main {
    height: 150vh;
  }
}
</style>
