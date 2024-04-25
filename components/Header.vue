<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Upcoming</a></li>
        <li><a href="#">Legacy</a></li>
        <li><img src="assets/images/logo.png" alt="Star Wars Logo"></li>
        <li><a href="#">Merch</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: "AppHeader",
}
</script>
<style scoped lang="scss">
header {
  height: 15vh;
  overflow: hidden;
}

nav {
  width: 100%;
  height: 100%;

  img {
    max-width: 100%;
    height: auto;

  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 33%;
    width: 100%;
    background-color: black;
    height: 100%;

    li {
      display: flex;
      color: white;
      justify-content: center;
      font-weight: bold;
      font-size: 1.1em;
    }
  }
}

@media screen and (max-width: 1280px) {
  header {
    height: 15vh;
  }

  nav {
    img {
      max-width: 80%;
      height: auto;
    }

    ul {
      padding: 0 25%;

      li {
        font-size: 1em;
        padding-right: 5px;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  header {
    height: 10vw;
  }

  nav {
    img {
      max-width: 60%;
      height: auto;
    }

    ul {
      padding: 0 20%;

      li {
        font-size: 1em;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  nav {
    img {
      max-width: 100%;
      height: auto;
    }

    ul {
      padding: 0 20%;

      li {
        font-size: 0.8em;
        padding-right: 20px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  header {
    height: 8vh;
  }

  nav {
    img {
      max-width: 80%;
      height: auto;
    }

    ul {
      padding: 0 8%;

      li {
        font-size: 0.8em;
        padding-right: 12px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  nav {
    img {
      max-width: 100%;
      height: auto;
    }

    ul {
      li {
        font-size: 0.8em;
      }
    }
  }
}
</style>