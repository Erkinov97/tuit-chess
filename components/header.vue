<template>
  <div class="col-md-12">
    <nav class="navbar">
      <div class="logo">
        <nuxt-link to="/">
          <img src="~/assets/img/chess-logo.jpg" alt="" />
        </nuxt-link>
      </div>
      <div class="title">
          <nuxt-link to="/">
              <h1>TUIT CHESS</h1>
          </nuxt-link>
      </div>
      <ul class="d-flex">
        <li class="mr-2"><nuxt-link to="/">Kirish</nuxt-link></li>
        <li><nuxt-link to="/">Ro'yhatdan o'tish</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
nav {
    background: #fff;
  border: 1px solid;
  a {
    img {
      width: 100px;
    }
  }
}
</style>
