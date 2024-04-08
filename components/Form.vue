<template>
    <form v-if="isFormOpen" id="form" :class="hiddenClass">
        <label for="name">Name: </label>
        <input class="capitalize" v-model="editingItem.name" id="name" type="text" /><br>
        <label for="height">Height: </label>
        <input v-model="editingItem.height" id="height" type="number" /><br>
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
import { mapState } from "pinia"
import { useFormStore } from "@/stores/form.js"
import { useCardStore } from "@/stores/card.js"

export default {

    name: "EditForm",
    props: {
        index: Number //index of the card being edited
    },
    computed: {
        ...mapState(useFormStore, ['hiddenClass']),
        isFormOpen() {
            const formStore = useFormStore(); 
            return formStore.isOpen; //gets the state value of isOpen
        },
        editingItem() {
            const formStore = useFormStore();
            return formStore.editingItem; //gets the state value of editingItem
        }
    },
    methods: {
        cancelEdit() {
            //on cancel button triggers these functions from form.js
            const formStore = useFormStore();
            formStore.restoreOriginalData(); //sets back original data
            formStore.closeForm(); // closes form
        },
        saveEdit() {
            //on save button triggers these functions from form.js and card.js
            const formStore = useFormStore();
            const cardStore = useCardStore();
            cardStore.updateCards(this.index, formStore.editingItem) //updates the card and updates data in state and local storage 
            formStore.closeForm(); //closes form
        }
    }
}
</script>
