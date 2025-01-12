import {
  defineConfig,
  extractorSplit,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  theme: {
    colors: {
      accent: "rgb(37 99 235)"
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  extractors: [
    extractorPug(),
    extractorSplit,
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
