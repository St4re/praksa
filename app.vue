<template>
  <div>
    <Header />
    <main>
      <div id="text" style="color:white;text-align:center;font-size: 2em;"></div>
      <div class="background">
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap" gap="20px">
          <CardSkeleton v-if="isLoading" v-for="number in 3" />
          <Card v-else v-for="(card, index) in cards" :key="index" :class="`card card-${index}`">
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
              <!--<ReusableButton @click="editItem(card)">Edit</ReusableButton>-->
              <ReusableButton @click="editItem(card)">Edit</ReusableButton>
            </template>
          </Card>
          <!--<Form />-->

        </Flex>
        <Dialog :open="isOpen" @close="closeModal" :initialFocus="completeButtonRef">
          <div class="fixed inset-0 overflow-y-auto backdrop-blur">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <DialogPanel as="article" class="w-full max-w-md overflow-hidden rounded-2xl bg-black ">
                <DialogTitle as="h3" class="text-2xl font-medium leading-6 text-amber-300">
                  Character Data
                </DialogTitle>
                <DialogDescription as="h6">
                  <p class="text-lg text-amber-300">
                    Edit the information here:
                  </p>
                </DialogDescription>
                <FormInputs :editingItem="editingItem" :formInputs="formInputData" />
                <ReusableButton ref="completeButtonRef" class="dialogBtn" @click="saveChanges(index)">Save</ReusableButton>
                <ReusableButton @click="closeModal">Cancel</ReusableButton>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Card from "@/components/Card.vue";
import ReusableButton from "@/components/ReusableButton.vue";
import CardSkeleton from "@/components/CardSkeleton.vue";
import Flex from "@/components/Flex.vue"
import FormInputs from "@/components/FormInputs.vue"
import formInputData from "@/assets/formInputData.json"

import Dialog from '@/components/Dialog/Dialog.vue'
import DialogTitle from "@/components/Dialog/DialogTitle.vue"
import DialogPanel from "@/components/Dialog/DialogPanel.vue"
import DialogDescription from "@/components/Dialog/DialogDescription.vue"

import { useCardStore } from "@/stores/card.js";
import { useFormStore } from "@/stores/form.js";
import useAPI from "@/composables/useAPI.js";

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
  } 
  catch (error) {
    console.error("Error fetching data:", error);
  } 
  finally {
    isLoading.value = false; // Turn off loader
  }
});

const editItem = (card) => {
  isOpen.value = true;
  formStore.editingItem = card
  formStore.originalData = JSON.parse(JSON.stringify(card))
};

const isOpen = ref(false);
const completeButtonRef = ref(null)
const editingItem = computed(() => formStore.editingItem)

function saveChanges(numberOfCard) {
  cardStore.updateCards(numberOfCard, formStore.editingItem);
  isOpen.value = false;
}
function closeModal() {
  formStore.restoreOriginalData();
  isOpen.value = false;
}

 async function postString(statement, timer) {
  try {
  setTimeout(() => {
    document.getElementById("text").innerHTML = statement;
  }, timer);
} catch (error) {
  console.error(`Error: ${error}`)
}
}

postString("May the force be with you", 3000)

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
  height: 90vh;
}

.background {
  display: flex;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 100px #e3d61d66);
  justify-content: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 270px;
  max-width:270px;
  min-height: 350px;
  max-height: 550px;
  width:15vw;
  height:62vh;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 5%;
  flex-grow:1;
  
  li {
  color: white;
  font-size: 1.1em;
  margin-left: 10%;
  font-weight: 300;
  list-style: none;
}

span {
  font-weight: 600;
}
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

.dialogBtn {
  margin-right: 20px;
}

@media screen and (max-width:849px) {
  main {
    height: 100%;
    padding: 20px 0;
  }
}
</style>
