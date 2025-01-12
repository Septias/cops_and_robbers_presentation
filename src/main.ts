import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import { defineComponent } from 'vue/dist/vue.esm-bundler'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import './styles/main.sass'
import 'uno.css'

const slide_name_matcher = /slide\d+/
const App = defineComponent({
  setup() {
    const slide_count = routes.filter(i => i.name?.toString().match(slide_name_matcher)).length
    provide('max-pages', slide_count)
  },
  template: '<router-view />',
})

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
    ctx.router.beforeEach((to) => {
      if (!to.name?.toString().match(slide_name_matcher)) {
        return 'slide1'
      }
    })
  },
)
