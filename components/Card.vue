<template>
    <article class="card">

        <ul>
            <li>Name: <span>{{ cardData.name }}</span></li>
            <li>Height: <span>{{ cardData.height + " cm" }} </span></li>
            <li>Mass: <span>{{ cardData.mass + " kg" }} </span></li>
            <li>Hair color: <span class="capitalize">{{ cardData.hair_color }}</span></li>
            <li>Skin color: <span class="capitalize">{{ cardData.skin_color }}</span></li>
            <li>Eye color: <span class="capitalize">{{ cardData.eye_color }}</span></li>
            <li>Birth year: <span>{{ cardData.birth_year }}</span></li>
            <li>Gender: <span class="capitalize">{{ cardData.gender }}</span></li>
        </ul>
        <button @click.prevent="editItem(cardData)">Edit</button>
    </article>
</template>

<script>
import "./assets/css/main.css"

import { mapStores } from "pinia"
import { mapState } from "pinia"
import { cardInfo } from "@/assets/cardInfo.json"

import { useFormStore } from "@/stores/form.js"

export default {
    name: "AppCard",
    props: {
        cardData: Object,
    },
    computed: {
        ...mapStores(useFormStore),
        ...mapState(useFormStore, ["hiddenClass"]),

        editingItem() {
            return useFormStore().editingItem;

        }
    },


    methods: {

        editItem(card) {
            const formStore = useFormStore();
            formStore.openForm(card);
            formStore.setEditingItem(card);
            formStore.setOriginalData(JSON.parse(JSON.stringify(card)));
        },


    }
}
</script>
