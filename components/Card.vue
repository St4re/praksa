<template>
  <article class="card">
    <slot name="name"></slot>
    <slot name="height"></slot>
    <slot name="mass"></slot>
    <slot name="hair_color"></slot>
    <slot name="skin_color"></slot>
    <slot name="eye_color"></slot>
    <slot name="birth_year"></slot>
    <slot name="gender"></slot>
    <slot name="button"></slot>
  </article>
</template>

<script>
import "./assets/css/main.css";
import { useFormStore } from "@/stores/form.js";

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
      editItem,
    };
  },
};
</script>
<style lang="scss">

.card li {
  color: white;
  font-size: 1.1em;
  margin-left: 10%;
  font-weight: 300;
  list-style: none;
}

.card li span {
  font-weight: 600;
}
</style>
