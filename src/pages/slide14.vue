
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
  .m-2
    h1 Linking Labelling and Sequence of Relations
    theorem3.modal

    proof3c
</template>
