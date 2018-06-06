<template>
  <div>
    <button @click="$store.commit('increment')">{{ $store.state.count }}</button>
  </div>
</template>

<script>
export default {
  layout: 'layout'
}
</script>
