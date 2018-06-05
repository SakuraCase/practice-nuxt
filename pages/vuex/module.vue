<template>
  <div>
    <button @click="inc">{{ counter }}</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex' 

export default {
  computed: {
    ...mapGetters('module', ['counter'])
  },
  methods: {
    ...mapMutations('module', ['inc'])
  }
}
</script>

