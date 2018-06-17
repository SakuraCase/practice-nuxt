<template>
  <div>
    <header-component/>
    <main class="columns">
      <sub-menu-component/>
      <div class="column">
        <content-component title="PIYO"/>
        <content-component title="BAR"/>
      </div>
    </main>
    <footer-component/>
  </div>
</template>

<script>
import HeaderComponent from '~/components/bulma/Header.vue'
import SubMenuComponent from '~/components/bulma/SubMenu.vue'
import ContentComponent from '~/components/bulma/Content.vue'
import FooterComponent from '~/components/bulma/Footer.vue'

export default {
  layout: 'tutorial',
  components: {
    HeaderComponent,
    SubMenuComponent,
    ContentComponent,
    FooterComponent
  }
}
</script>

<style>
main {
  background-color: #eee;
}
</style>
