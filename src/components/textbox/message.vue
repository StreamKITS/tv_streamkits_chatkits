<template lang="pug">
section.my-2
    q-card.p-1.q-custom-message(dark flat bordered)
      q-card-section.p-0.text-yellow
        b(v-text='message["display-name"]')
        span &nbsp;:&nbsp;
        span(v-text='message.content')
</template>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
import { TextboxMessage } from '@/libraries/Message'

export default defineComponent({
  props: {
    message: defineProps<TextboxMessage>(),
  },
  mounted() {
    console.log(this.message)
  },
})
</script>
