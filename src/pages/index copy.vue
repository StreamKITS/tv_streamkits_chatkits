<template>
  <q-btn color="primary" label="Primary" />
  <QBtn color="secondary" label="Secondary" />
  <LazyQBtn color="amber" glossy label="Amber" />
  <div class="q-pa-md row justify-center">
  <div class="col col-12" v-for="i in 10">
  <QChatMessage
  :text="['hey, how are you?']"
    :name="'me' + i"
    text-color="white"
        bg-color="primary"
        sent stamp
  ></QChatMessage>
  </div>
  </div>
</template>
