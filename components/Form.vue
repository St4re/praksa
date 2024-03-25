<template>
    <form v-if="editingItem" id="form" :class="hiddenClass" >
        <label for="name">Name: </label>
        <input v-model="editingItem.name"id="name" type="text"/><br>
        <label for="height">Height: </label>
        <input id="height" type="text"/><br>
        <label for="mass">Mass: </label>
        <input id="mass" type="text"/><br>
        <label for="hair_color">Hair color: </label>
        <input id="hair_color" type="text"/><br>
        <label for="skin_color">Skin color: </label>
        <input id="skin_color" type="text"/><br>
        <label for="eye_color">Eye color: </label>
        <input id="eye_color" type="text"/><br>
        <label for="birth_year">Birth year: </label>
        <input id="birth_year" type="text"/><br>
        <label for="gender">Gender: </label>
        <input id="gender" type="text"/><br>
        <button @click="saveEdit" class="mr-4">Save</button>
        <button @click="cancelEdit">Cancel</button>
    </form>
</template>

<script>
import {mapState } from "pinia"
import useFormStore from "@/stores/form.js"
import {cardInfo} from "@/assets/cardInfo.json"

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
        }
    }
    
}
</script>
