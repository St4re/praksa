<template>
    <div class="loader" v-if="loading">Loading...</div>

    <article v-bind="$attrs" v-else v-for="card in cards" :key="card.id" class="card" >
        <ul >
          <li>Name: <span>{{card.name}}</span></li>
          <li>Height: <span>{{card.height + " cm"}} </span></li>
          <li>Mass: <span>{{card.mass  + " kg"}} </span></li>
          <li>Hair color: <span class="capitalize">{{ card.hair_color }}</span></li>
          <li>Skin color: <span class="capitalize">{{ card.skin_color }}</span></li>
          <li>Eye color: <span class="capitalize">{{ card.eye_color }}</span></li>
          <li>Birth year: <span>{{ card.birth_year }}</span></li>
          <li>Gender: <span class="capitalize">{{ card.gender }}</span></li>
        </ul>
        <button @click.prevent="editItem(card)">Edit</button>
      </article>
</template>

<script>
import "./assets/css/main.css"

import {mapStores } from "pinia"
import {mapState } from "pinia"
import {cardInfo} from "@/assets/cardInfo.json"

import useFormStore from "@/stores/form.js"

let person = [20,4,10];

export default {
    name: "AppCard",
     data() {
        return {
          cards: [],
          loading: false,
         /* cardData: cardInfo,*/
        }
    },
    
    computed: {
        ...mapStores(useFormStore),
        ...mapState(useFormStore, ["hiddenClass"])
    },
    
    async mounted() {
        this.loading = true;
    try {
        fetch(`https://swapi.dev/api/people/${person[0]}`)
            .then(response => response.json()) 
            .then(data => {
                this.cards.push(data);
            })
            person.shift()
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        this.loading = false;

    }
},
    methods: {
        editItem(card) {
            this.editingItem = {...card}
        }
    }
}
</script>

