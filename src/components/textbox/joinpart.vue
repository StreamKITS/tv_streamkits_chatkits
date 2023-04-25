<template lang="pug">
section.my-2
    q-card.p-1.q-custom-message(dark flat bordered)
      q-card-section.p-0.text-gray
        span(v-if='message.type === "join"') [JOIN]&nbsp;
        span(v-else) [PART]&nbsp;
        span(v-html='message.username')
</template>
<script lang="ts">
import { defineComponent, defineProps } from 'vue'
import { TextboxJoinPart } from '@/libraries/Message'

export default defineComponent({
  props: {
    message: defineProps<TextboxJoinPart>(),
  },
  mounted() {
    console.log(this.message)
  },
})
</script>
