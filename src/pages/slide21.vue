<script lang="ts" setup>
onUpdated(() => {
  // @ts-expect-error idk
  MathJax.typeset()
})
onMounted(() => {
  // @ts-expect-error idk
  MathJax.typeset()
})
</script>


<template lang="pug">
slide
  h1 Thank you for listening
  p If you have any questions, feel free to ask
</template>
