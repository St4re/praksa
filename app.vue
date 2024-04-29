<template>
  <div>
    <Header />
    <main>
      <div class="background">
      <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap="20">
        <CardSkeleton v-if="isLoading" v-for="number in 3" />
        <Card v-else v-for="(card, index) in cards" :key="index" :class="`card-${index}`">
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
        <!--<Form />-->
        <Dialog/>
    </Flex>
    </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import Form from "@/components/Form.vue";
import ReusableButton from "@/components/ReusableButton.vue";
import CardSkeleton from "@/components/CardSkeleton.vue";
import Flex from "@/components/Flex.vue"
import Spacer from "@/components/Spacer.vue"
import Dialog from "@/components/Dialog/Dialog.vue"
import DialogTitle from "@/components/Dialog/DialogTitle.vue"
import DialogPanel from "@/components/Dialog/DialogPanel.vue"
import DialogDescription from "@/components/Dialog/DialogDescription.vue"

import { ref, onMounted } from "vue";
import { useCardStore } from "@/stores/card.js";
import { useFormStore } from "@/stores/form.js";
import useAPI from "@/composables/useAPI.js";

export default {
  name: "App",
  components: {
    Header,
    Card,
    Form,
    CardSkeleton,
    Flex,
    Spacer,
    Dialog,
    DialogTitle,
    DialogPanel,
    DialogDescription
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
  background-color: black;
}

main {
  background-color: black;
  height:90vh;
}
.background {
  display:flex;
  width:100%;
  height:100%;
  filter: drop-shadow(0 0 100px #e3d61d66);
  justify-content: center;
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
@media screen and (max-width:849px) {
  main {
    height:100%;
    padding: 20px 0;
  }
}
</style>
