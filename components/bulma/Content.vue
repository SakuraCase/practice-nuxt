<template>
  <article class="box media">
    <figure class="media-left">
      <p class="image is-64x64">x</p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p><strong>{{ title }}</strong></p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

