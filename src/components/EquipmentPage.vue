<template>
<v-container>
    <v-row class="mt-4">
        <v-col cols="7">
            <p class="text-h4 mb-5">{{item.equipmentTitle}}</p>
            <p class="text-h6 font-weight-medium mb-4">Описание стенда</p>
            <p class="text-subtitle-1 font-weight-regular" style="white-space: pre-line; text-align: justify;">{{item.equipmentDescription}}</p>
        </v-col>
        <v-col cols="5">
            <v-carousel hide-delimiters>
                <v-carousel-item
                v-for="(photo,i) in item.photos"
                :key="i"
                :src="require('../assets/equipment/' + photo)"
                ></v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <p class="text-h6 font-weight-medium mb-4">Технические характеристики</p>
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Наименование параметра
                    </th>
                    <th class="text-left">
                        Значение
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="element in item.characteristic"
                    :key="element.name"
                    >
                    <td>{{ element.name }}</td>
                    <td>{{ element.value }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-col>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-center">
            <v-btn color="#1E5EFF" elevation="0" dark class="">
                Перейти в AR
            </v-btn>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</v-container>
</template>

<script>

export default {
  name: 'EquipmentPage',
  components: {},
  data(){
    return {
      equipment:[
        {
          equipmentId: 1,
          equipmentTitle: 'Учебный фрезерный стэнд',
          equipmentDescription: 'Современное оборудование для работы с металлом, которое оснащается числовым программным управлением и имеет лазерный сканер для максимально точной работы устройства. При помощи этого стенда можно выполнять гравировку, делать разрезы и углубления в металлических изделиях и заготовках.',
          characteristic: [],
          mainPhoto: 'trainingStandF1.jpeg',
          photos: ['trainingStandF1.jpeg', 'trainingStandF2.jpeg', 'trainingStandF3.jpeg', 'trainingStandF4.jpeg'],
          showMore: false
        },
        {
          equipmentId: 2,
          equipmentTitle: 'Учебный токарный стэнд',
          equipmentDescription: 'Обрабатывающий стенд, на котором выполняется нарезка резьбы, выточка деталей различной формы, работа с заготовками разнообразных размеров.',
          characteristic: [],
          mainPhoto: 'trainingStandT1.jpeg',
          photos: ['trainingStandT1.jpeg', 'trainingStandT2.jpeg', 'trainingStandT3.jpeg', 'trainingStandT4.jpeg'],
          showMore: false
        },
        {
          equipmentId: 3,
          equipmentTitle: 'Учебный робот манипулятор',
          equipmentDescription: 'Стенд предназначен для выполнения сборочных операций при помощи програмивания движения осей и схвата.',
          characteristic: [],
          mainPhoto: 'trainingStandR4.jpeg',
          photos: ['trainingStandR4.jpeg', 'trainingStandR3.jpeg', 'trainingStandR2.jpeg', 'trainingStandR1.jpeg'],
          showMore: false
        },
        {
          equipmentId: 4,
          equipmentTitle: 'Интеллектуальный стенд сборочных операций «Active Assist»',
          equipmentDescription: 'Стенд имеет 4 основные составляющие: \n - Монитор, на котором осуществляется выбор для сборки детали, отображение состояния текущего этапа сборки и оповещение об ошибках; \n - Проектор, который транслирует на поверхность стола интерфейс, с которым взаимодействует оператор. На нём отображается деталь, которую необходимо взять на определённом этапе сборки, а также элементы управления; \n - Лотки, на которых хранятся детали для сборки; - Панель управления столом. \n \n Каждое действие рабочего, а также положение всех необходимых для сборки узлов контролируется системой компьютерного зрения, состоящая из камеры и программного обеспечения “Handtracking”. Перед началом сборки изделия происходит подача компонентов по контейнерам в требуемом технологическим процессом порядке. Система отслеживает действия оператора и в случае неверного шага будет оповещать оператора звуковым сигналом. Пока оператор и система не подтвердят исправление ошибки переход к следующему этапу сборки будет заблокирован. Для подтверждения завершения определённого шага, оператору необходимо нажать на кнопку справа, после чего система осуществит проверку и в случае успехе перейдёт к следующему этапу.',
          characteristic: [
            {
              name: 'Габаритные размеры РТК - Длина, мм',
              value: '1500'
            },
            {
              name: 'Габаритные размеры РТК - Ширина, мм',
              value: '1350'
            },
            {
              name: 'Габаритные размеры РТК - Высота, мм',
              value: '2400'
            },
            {
              name: 'Напряжение питающей цепи, В',
              value: '~ 220'
            },
            {
              name: 'Частота номинальная, Гц',
              value: '50±2%'
            },
            {
              name: 'Напряжение управления, В',
              value: '24'
            },
            {
              name: 'Температура окружающего воздуха',
              value: '+18⁰C ÷ +45⁰ С'
            },
            {
              name: 'Место работы',
              value: 'закрытое помещение'
            },
            {
              name: 'Относительная влажность воздуха',
              value: 'до 80% (при t = +25° С)'
            },
          ],
          mainPhoto: 'table.jpg',
          photos: ['table1.jpeg', 'table2.jpeg', 'table3.jpeg', 'table4.jpeg'],
          showMore: false
        },
        {
          equipmentId: 5,
          equipmentTitle: 'Фрезерный станок',
          equipmentDescription: '',
          equipmentMiniDescription: '',
          characteristic: [],
          mainPhoto: 'frez.jpeg',
          photos: ['frez.jpeg'],
          showMore: false
        },
        {
          equipmentId: 6,
          equipmentTitle: 'Токарный станок',
          equipmentDescription: '',
          equipmentMiniDescription: '',
          characteristic: [],
          mainPhoto: 'tok.jpg',
          photos: ['tok.jpg'],
          showMore: false
        },
      ],
      item: {}
    }
  },
  watch: {},
  mounted() {
    this.item = this.equipment.find(i => i.equipmentId == this.equipmentId)
  },
  created(){
    
  },
  computed:{
    equipmentId() {
      return this.$route.params.equipmentId;
    },
  },
  methods: {}
}
</script>

<style lang="scss">

</style>
