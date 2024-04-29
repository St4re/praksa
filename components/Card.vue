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
  width: 270px;
  height: 580px;
  //width:15vw;
  //height:62vh;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 40px;
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

@media screen and (max-width: 768px) {
  .card {
    ul {
      li {
        font-size: 0.9em;
        margin-left: 8%;
      }
    }
  }
}

@media screen and (max-width: 480px) {

  .card {
    padding-bottom: 7%;
    margin-bottom: 7%;
  }

  :deep(li) {
    font-size: 0.9em;
    margin-left: 8%;
  }

}

@media screen and (max-width: 400px) {
  :deep(li) {
    font-size: 0.8em;
  }
}
</style>
