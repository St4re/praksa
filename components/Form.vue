<template>
    <form v-if="isFormOpen" id="form" :class="hiddenClass">
        <label for="name">Name: </label>
        <input class="capitalize" v-model="editingItem.name" id="name" type="text" /><br>
        <label for="height">Height: </label>
        <input class="capitalize" v-model="editingItem.height" id="height" type="number" /><br>
        <label for="mass">Mass: </label>
        <input v-model="editingItem.mass" id="mass" type="number" /><br>
        <label for="hair_color">Hair color: </label>
        <input class="capitalize" v-model="editingItem.hair_color" id="hair_color" type="text" /><br>
        <label for="skin_color">Skin color: </label>
        <input class="capitalize" v-model="editingItem.skin_color" id="skin_color" type="text" /><br>
        <label for="eye_color">Eye color: </label>
        <input class="capitalize" v-model="editingItem.eye_color" id="eye_color" type="text" /><br>
        <label for="birth_year">Birth year: </label>
        <input v-model="editingItem.birth_year" id="birth_year" type="text" /><br>
        <label for="gender">Gender: </label>
        <input class="capitalize" v-model="editingItem.gender" id="gender" type="text" /><br>
        <button @click.prevent="saveEdit" class="mr-4">Save</button>
        <button @click.prevent="cancelEdit">Cancel</button>
    </form>
</template>

<script>
import { computed } from 'vue';
import { useFormStore } from "@/stores/form.js"
import { useCardStore } from "@/stores/card.js"


export default {
    name: "Form",
    props: {
        index: Number //index of the card being edited
    },
    setup(props) {
        const formStore = useFormStore();
        const cardStore = useCardStore();

        const isFormOpen = computed(() => formStore.isOpen); //gets the state value of isOpen
        const editingItem = computed(() => formStore.editingItem); //gets the state value of editingItem

        const cancelEdit = () => {
            formStore.restoreOriginalData(); //sets back original data
            formStore.closeForm(); // closes form
        };

        const saveEdit = () => {
            cardStore.updateCards(props.index, formStore.editingItem); //updates the card and updates data in state and local storage
            formStore.closeForm(); //closes form
        };

        const hiddenClass = computed(() => !isFormOpen.value ? "hidden" : "");

        return { isFormOpen, editingItem, cancelEdit, saveEdit, hiddenClass };
    }
}
</script>
