<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">Hoge</div>
      <div class="navbar-burger" data-target="navMenu" @click="toggleMenu" :class="{'is-active': isMenuActive}">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{'is-active': isMenuActive}">
      <div class="navbar-end">
        <nuxt-link to="/bulma/about" class="navbar-item">About</nuxt-link>
        <nuxt-link to="/bulma/hoge" class="navbar-item">Hoge</nuxt-link>
        <nuxt-link to="/bulma/hoge" class="navbar-item">Hoge</nuxt-link>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data: () => {
    return {isMenuActive: false}
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    }
  },
  watch: {
    '$route' () {
      this.isMenuActive = false
    }
  }
}
</script>
