<template>
  <div class=" flex h-full w-full items-center justify-between">
    <div class="  flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to="/management"><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="/management">Araç Yönetimi</router-link>
          </h2>
          <h4 class="ml-8 text-base font-medium text-[#717982]"> / Satılan Araç </h4>
        </div>

        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- content-->

      <div class=" ">
      </div>
      <!-- main -->
      <div class="relative  m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg"
           style=" box-shadow: 0px 0px 10px #717982;">
        <div class="w-full">
          <vue-good-table
              :columns="columns"
              :fixed-header="true"
              :pagination-options="{
                      enabled: true,
                      mode: 'records',
                      perPage: 5,
                      position: 'bottom',
                      perPageDropdown: [10, 20, 30],
                      dropdownAllowAll: false,
                      nextLabel: 'next',
                      prevLabel: 'prev',
                      rowsPerPageLabel: 'Rows per page',
                      ofLabel: 'of',
                      pageLabel: 'page', // for 'pages' mode
                      allLabel: 'All',


                    }"
              :rows="rows"
              :search-options="{
                      enabled: true,
                      mode: 'records'
                      }"
              :select-options="{
                 enabled: true,
              }"
              max-height="500px"
              theme="polar-bear"

          />
        </div>
      </div>
      <!--      <div>-->
      <!--        <div class="mt-14 flex w-11/12 items-center justify-end">-->
      <!--          <div class="flex items-center justify-end">-->
      <!--            <img class="pl-5" src="/public-src/admin/rightRounded.svg">-->
      <!--            <img class="pl-5" src="/public-src/admin/Frame72.svg">-->
      <!--            <img class="pl-5" src="/public-src/admin/LeftRounded.svg">-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Plaka',
          field: 'plate',
          type: 'number'
        },
        {
          label: 'Araç Modeli',
          field: 'vehiclemodel',
        },
        {
          label: ' Son KUllanıcı Adı',
          field: 'username',
        },
        {
          label: 'Zimmet Yeri',
          field: 'location',
        },
        {
          label: 'Birim',
          field: 'birim',
        },
        {
          label: 'Son Km Durumu',
          field: 'km',
          type: 'number'
        },

        {
          label: 'Araç Alış Tarihi',
          field: 'purchasedate',
          type: 'data'

        },
        {
          label: 'Araç Alış Tutarı',
          field: 'purchaseamount',
        },
        {
          label: 'Araç Satış Tarihi',
          field: 'salesdate',
          type: 'number'

        },
        {
          label: 'Araç Satış Tutarı',
          field: 'salesamount'

        },
        {
          label: 'Açıklama',
          field: 'aciklama'
        },

      ],
      rows: [
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          km: '350.000',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          salesdate: '12.10.2024',
          salesamount: '₺3.300.000,00',
          aciklama: ''
        },
      ],
    };
  },
};
</script>