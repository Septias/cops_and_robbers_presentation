<script lang="ts" setup>
import { inject, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = Number(route.name!.toString().substring(5))
const max = inject('max-pages') as number

function listener(e: any) {
  let next: number
  if (e.key === 'ArrowLeft') {
    next = id - 1
    router.push(`/slide${id - 1}`)
    if (router.getRoutes().find((r) => r.name === `slide${id - 1}`)?.meta?.skip) {
      next = id - 2
    }
  }
  else if (e.key === 'ArrowRight') {
    next = id + 1
  }
  else {
    return
  }
  if (router.getRoutes().find((r) => r.name === `slide${next}`)?.meta?.skip) {
    next = id + 1
  }
  if (next > max) {
    next = 1
  }
  else if (next < 1) {
    next = max
  }
  router.push(`/slide${next}`)
}
document.addEventListener('keydown', listener)

onUnmounted(() => {
  document.removeEventListener('keydown', listener)
})
</script>

<template lang="pug">
div.w-screen.h-screen.c-grid
  .min-width.flex.flex-col.justify-between.p-5.pt-25.max-h-screen
    div.flex-grow.overflow-auto
      slot
    .flex.justify-between.px-5.mt-10
      span Sebastian Klähn
      span.text-blue-700 Generalized Cops and Robbers
      router-link(to="slide2") {{ id }} / {{ max }}
</template>
