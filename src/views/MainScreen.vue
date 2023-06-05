<template>
<div>
  <div class="bgr_industry"></div>
  <!-- <div class="content"> -->
  <v-container class="content" style="width: 550px; padding: 40px 0;">
    <v-row justify="center">
      <v-col class="d-flex justify-center text-h5">
        Выберите уровень  экскурсии
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col class="d-flex justify-center">
        <v-btn color="#1E5EFF" elevation="0" dark large to="/standart-excursion">
          Стандартный
        </v-btn>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-btn color="#1E5EFF" elevation="0" dark large to="/advanced-excursion">
          Продвинутый
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <!-- </div> -->
</div>
</template>

<script>

export default {
  name: 'MainScreen',
  components: {
  },
  data(){
    return {
    }
  },
  watch: {},
  mounted() {},
  created(){
    const arr = [1, 4, 7, 12, 5, 9, 2]
    let result = []
    // result = arr.filter(i => i >5)
    // result = arr.map(i => i*2)
    arr.forEach(i => {
      result.push(i*2)
    })
    console.log(arr, result)
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
.bgr_industry{
  z-index: 1;
  background-image: url("../assets/labaratoriya.jpeg");
  background-size: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  filter: blur(5px);
  position: absolute;
}

.content{
  position: relative;
  top: 300px;
  z-index: 6;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12.5px);
  border-radius: 20px;
}
</style>
