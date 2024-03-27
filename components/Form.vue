<template>
    <form v-if="editingItem" id="form" :class="hiddenClass">
        <label for="name">Name: </label>
        <input v-model="editingItem.name" id="name" type="text"/><br>
        <label for="height">Height: </label>
        <input v-model="editingItem.height" id="height" type="text"/><br>
        <label for="mass">Mass: </label>
        <input v-model="editingItem.mass" id="mass" type="text"/><br>
        <label for="hair_color">Hair color: </label>
        <input v-model="editingItem.hair_color" id="hair_color" type="text"/><br>
        <label for="skin_color">Skin color: </label>
        <input v-model="editingItem.skin_color" id="skin_color" type="text"/><br>
        <label for="eye_color">Eye color: </label>
        <input v-model="editingItem.eye_color" id="eye_color" type="text"/><br>
        <label for="birth_year">Birth year: </label>
        <input v-model="editingItem.birth_year" id="birth_year" type="text"/><br>
        <label for="gender">Gender: </label>
        <input v-model="editingItem.gender" id="gender" type="text"/><br>
        <button @click="saveEdit" class="mr-4">Save</button>
        <button @click="cancelEdit">Cancel</button>
    </form>
</template>

<script>
import {mapState} from "pinia"
import useFormStore from "@/stores/form.js"

export default {

    name: "EditForm",
    data() {
        return {
                editingItem: null,

    
        }
    },
    computed: {
        ...mapState(useFormStore, ["hiddenClass"])
    },
    methods: {
        cancelEdit() {
            this.editingItem = null
            this.$store.form.isOpen = false;
        },
        /*saveEdit() {
      const index = cards.findIndex((card) => card.id === this.editingItem.id);
      if (index !== -1) {
        cards[index] = { ...this.editingItem };
        this.editingItem = null;
        this.formVisible = false;
      } else {
        console.error("Item not found for editing.");
      }
    }*/
    }
    
}
</script>
