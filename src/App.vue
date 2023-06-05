<template>
  <v-app>
    <v-app-bar
    app
    color="#A1A7C4"
    elevation="0"
    >
      <img style="width: 40px" src="./assets/iit.svg">
      <v-toolbar-title class="ml-3" style="color: #2b2a28">Учебно-научный центр «Умные производственные системы»</v-toolbar-title>
    </v-app-bar>

    <v-main class="wrapper">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.wrapper{
  background: #F5F6FA;
}
</style>
