<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
};
</script>
<style lang="scss" scoped>
button {
  background-color: #e3d61d;
  padding: 5px 45px;
  border-radius: 7px;
  font-weight: bold;
  box-shadow: 0px 0px 30px 0px #e3d61d4d;
  font-size: 1.3em;
  margin: 0 auto;
  margin-top: 12%;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e3d61d;
    background-color: black;
  }
}

@media screen and (max-width: 1280px) {
  button {
    font-size: 1.2em;
  }
}

@media screen and (max-width: 768px) {
  button {
    padding: 5px 25px;
  }
}

@media screen and (max-width: 480px) {
  button {
    font-size: 1.1em;
    margin-top: 8%;
  }
}

@media screen and (max-width: 400px) {
  button {
    padding: 5px 23px;
    font-size: 0.9em;
  }
}
</style>