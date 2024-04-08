<template>
    <article class="card">
        <ul>
            <li>Name: <span class="capitalize">{{ cardData.name }}</span></li>
            <li>Height: <span>{{ `${cardData.height} cm` }} </span></li>
            <li>Mass: <span>{{ `${cardData.mass} kg` }} </span></li>
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
import { useFormStore } from "@/stores/form.js"

export default {
    name: "Card",
    props: {
        cardData: Object, //get card data from parent App.vue as an object
    },
    setup(props) {
        const formStore = useFormStore();

        const editItem = () => {
            formStore.openForm(props.cardData); // opens the editing form with the cards values
        };

        return {
            editItem
        }
    }
}
</script>
