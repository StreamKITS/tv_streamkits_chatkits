<template lang="pug">
div
    q-splitter.q-custom(v-model="splitter" style="height: calc(100vh - 100px)")
      template(v-slot:before)
        .m-2.row
          .col.mx-2
            template(v-for='message in messages.reverse()')
              textbox-message(v-if='message.type === "message"' :message='message')
              textbox-joinpart(v-else-if='message.type === "join" || message.type === "part"' :message='message')
      template(v-slot:after)
        //.m-2.row
          .col.mx-2
            template(v-for='message in messages')
              message(:message='message')
          .col.mx-2
            template(v-for='message in messages')
              message(:message='message')
          .col.mx-2
            template(v-for='message in messages')
              message(:message='message')
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import tmi from 'tmi.js'
import { Textbox, TypeMessage } from '@/libraries/Message'

export default defineComponent({
  data() {
    return {
      messages: [] as Textbox[],
    }
  },
  setup() {
    const client = new tmi.Client({
      channels: ['tacxtv'],
    })
    const splitter = ref<number>(20)
    return { client, splitter }
  },
  mounted() {
    this.client.connect()
    this.client.on('message', (_, tags: tmi.ChatUserstate, content: string, self: boolean) => {
      if (self) return
      this.messages.push({ ...tags, content, type: TypeMessage.MESSAGE })
    })
    this.client.on('join', (_, username: string, self: boolean) => {
      this.messages.push({ username, type: TypeMessage.JOIN })
    })
    this.client.on('part', (_, username: string, self: boolean) => {
      this.messages.push({ username, type: TypeMessage.JOIN })
    })
  },
})
</script>

<style lang="sass">
.q-custom
  .q-splitter__before
    min-width: 370px
</style>
