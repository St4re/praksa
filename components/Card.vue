<template>
  <article v-for="card in cards" :key="card.id" class="card" >
        <ul >
          <li>Name: <span>{{card.name}}</span></li>
          <li>Height: <span>{{card.height}} </span></li>
          <li>Mass: <span>{{card.mass}}</span></li>
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
         /* cardData: cardInfo,*/
        }
    },
    
    computed: {
        ...mapStores(useFormStore),
        ...mapState(useFormStore, ["hiddenClass"])
    },
    
    mounted() {
         fetch(`https://swapi.dev/api/people/${person[0]}`)
            .then(response => response.json()) 
            .then(data => {
                console.log(data)
                this.cards = data; 
            })
            
            .catch(error => console.error('Error fetching data:', error));
            person.shift()
            
    },
    methods: {
        editItem() {
            this.editingItem = {...card}
        }
    }
}
</script>

