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
    data() {
        return {

        }
    },
    props: {
        index: Number
    },
    computed: {
        ...mapState(useFormStore, ['hiddenClass']),
        isFormOpen() {
            const formStore = useFormStore();
            return formStore.isOpen;
        },
        editingItem() {
            const formStore = useFormStore();
            return formStore.editingItem;
        }
    },
    methods: {
        cancelEdit() {
            const formStore = useFormStore();
            formStore.restoreOriginalData();
            formStore.closeForm();
        },
        saveEdit() {
            const formStore = useFormStore();
            const cardStore = useCardStore();
            console.log(this.index, formStore.editingItem)
            cardStore.updateCards(this.index, formStore.editingItem)
            formStore.clearOriginalData();
            formStore.closeForm();

        }
    }

}
</script>
