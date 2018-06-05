<template>
  <div>
    <h2>name</h2>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const { name } = params
    return {
      name
    }
  }
}
</script>
