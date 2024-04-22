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

</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 15%;
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
