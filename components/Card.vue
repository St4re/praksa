<template>
  <article class="card">
    <slot name="cardHeader"></slot>
    <slot name="cardBody"></slot>
    <slot name="cardFooter"></slot>
  </article>

</template>

<script>

</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 270px;
  max-width:270px;
  min-height: 350px;
  max-height: 550px;
  width:15vw;
  height:62vh;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 5%;
  flex-grow:1;
}

:deep(li) {
  color: white;
  font-size: 1.1em;
  margin-left: 10%;
  font-weight: 300;
  list-style: none;
}

:deep(span) {
  font-weight: 600;
}
</style>
