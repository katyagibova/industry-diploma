<template>
  <v-container>
    <v-row>
      <v-col 
      v-for="item in equipment" 
      :key="item.equipmentId"
      cols="12"
      sm="4">
        <v-card
        class="mx-auto"
        max-width="344"
        >
          <v-img
            :src="require('../assets/equipment/' + item.mainPhoto)"
            height="200px"
          ></v-img>

          <v-card-title>
            {{item.equipmentTitle}}
          </v-card-title>

          <v-card-actions>
            <v-btn
            color="#1E5EFF"
            text
            :to="'/standart-excursion/' + item.equipmentId"
            >
              Подробнее
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              icon
              @click="item.showMore = !item.showMore"
            >
              <v-icon>{{ item.showMore ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="item.showMore">
              <v-divider></v-divider>

              <v-card-text>
                {{item.equipmentMiniDescription}}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdvancedExcursion',
  data(){
    return {
      equipment:[
        {
          equipmentId: 1,
          equipmentTitle: 'Учебный фрезерный стэнд',
          equipmentDescription: '',
          equipmentMiniDescription: 'Современное оборудование для работы с металлом, которое оснащается числовым программным управлением и имеет лазерный сканер для максимально точной работы устройства. При помощи этого стенда можно выполнять гравировку, делать разрезы и углубления в металлических изделиях и заготовках.',
          characteristic: [],
          mainPhoto: 'trainingStandF1.jpeg',
          photos: [],
          showMore: false
        },
        {
          equipmentId: 2,
          equipmentTitle: 'Учебный токарный стэнд',
          equipmentDescription: '',
          equipmentMiniDescription: 'Обрабатывающий стенд, на котором выполняется нарезка резьбы, выточка деталей различной формы, работа с заготовками разнообразных размеров.',
          characteristic: [],
          mainPhoto: 'trainingStandT1.jpeg',
          photos: [],
          showMore: false
        },
        {
          equipmentId: 3,
          equipmentTitle: 'Учебный робот манипулятор',
          equipmentDescription: '',
          equipmentMiniDescription: 'Стенд предназначен для выполнения сборочных операций при помощи програмивания движения осей и схвата.',
          characteristic: [],
          mainPhoto: 'trainingStandR4.jpeg',
          photos: [],
          showMore: false
        },
        {
          equipmentId: 4,
          equipmentTitle: 'Интеллектуальный стенд сборочных операций «Active Assist»',
          equipmentDescription: '',
          equipmentMiniDescription: 'Стенд предназначен для выполнения ручных сборочных операций с отслеживанием сборки в интерактивной среде Active Assist.',
          characteristic: [],
          mainPhoto: 'table.jpg',
          photos: [],
          showMore: false
        },
        {
          equipmentId: 5,
          equipmentTitle: 'Фрезерный станок',
          equipmentDescription: '',
          equipmentMiniDescription: '',
          characteristic: [],
          mainPhoto: 'frez.jpeg',
          photos: [],
          showMore: false
        },
        {
          equipmentId: 6,
          equipmentTitle: 'Токарный станок',
          equipmentDescription: '',
          equipmentMiniDescription: '',
          characteristic: [],
          mainPhoto: 'tok.jpg',
          photos: [],
          showMore: false
        },
      ]
    }
  },
}
</script>
