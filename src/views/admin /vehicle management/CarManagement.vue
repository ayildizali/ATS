<template>
  <div class=" flex h-full w-full items-center justify-between">
    <!--    <popup-modal ref="aracsatis">-->
    <!--      <div class=" z-50 h-[700px] w-[530px] ">-->
    <!--        <router-link to="/management">-->
    <!--          <div class="flex w-[520px] items-center justify-end">-->
    <!--            <img src="/public/Frame(200).svg">-->
    <!--          </div>-->
    <!--        </router-link>-->
    <!--        <h1 class=" mt-3 flex items-center justify-center text-3xl font-bold text-primary">Araç Satış</h1>-->
    <!--        <div class=" ml-9 mt-7 ">-->
    <!--          <div class="mt-4">-->
    <!--            <input-tag-->
    <!--                :required="true"-->
    <!--                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg "-->
    <!--                label="Plaka"-->
    <!--                placeholder="    Plaka Giriniz..."-->
    <!--                rowclass=""-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="mt-4">-->
    <!--            <input-tag-->
    <!--                :required="true"-->
    <!--                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg "-->
    <!--                label="Son Km Durumu "-->
    <!--                placeholder="   Son Km Durumu Giriniz..."-->
    <!--                rowclass=""-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="mt-4">-->
    <!--            <input-tag-->
    <!--                :required="true"-->
    <!--                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg "-->
    <!--                label="Araç Satış Tarihi"-->
    <!--                placeholder="    Araç Satış Tarihi Giriniz..."-->
    <!--                rowclass=""-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="mt-4">-->
    <!--            <input-tag-->
    <!--                :required="true"-->
    <!--                inputclass="w-[450px] h-[40px] border-2 border-Dark800 rounded-lg"-->
    <!--                label="Araç Satış Tutarı"-->
    <!--                placeholder="    Araç Satış Tutarı Giriniz..."-->
    <!--                rowclass=""-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="mt-4">-->
    <!--            <input-tag-->
    <!--                :required="true"-->
    <!--                inputclass="w-[450px] h-[135px] border-2 border-Dark800 rounded-lg"-->
    <!--                label="Açıklama"-->
    <!--                placeholder="    Açıklama Giriniz..."-->
    <!--                rowclass=""-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <router-link to="/management">-->
    <!--          <button class=" ml-9 mt-10 h-[37px] w-[450px] rounded-lg border-2 border-primary bg-primary text-white ">-->
    <!--            Tamamla-->
    <!--          </button>-->
    <!--        </router-link>-->

    <!--      </div>-->
    <!--    </popup-modal>-->
    <div class="flex-1">
      <!-- header -->

      <div class="m-auto flex h-32 w-3/4 items-center justify-between">

        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Araç Yönetimi
          </h2>
          <button
              class="mb-2 ml-5 mr-2 mt-3 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white ring-primary focus:outline-none focus:ring-2"
              type="button">
            <img class="mr-2 hover:text-primary" src="/public-src/Kullanıcı/Frame(13).svg">
            <router-link to="/newcar">Yeni Araç</router-link>
          </button>
          <button
              class="mx-2 mb-2 mt-3 rounded-lg border-2 border-primary px-5 py-2.5 text-center text-sm font-medium text-primary focus:outline-none ">
            <router-link to="/vehiclesold">Satılan Araç</router-link>
          </button>
        </div>
        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- main -->
      <div class="relative  m-auto  mt-16 flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg"
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
          label: 'KUllanıcı Adı',
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
          label: 'Araç Alış Tarihi',
          field: 'purchasedate',
          type: 'data'

        },
        {
          label: 'Araç Alış Tutarı',
          field: 'purchaseamount',
        },
        {
          label: 'KM Tutarı',
          field: 'km',
          type: 'number'

        },
        {
          label: 'HGS-KGS Ödeme Mükellifi',
          field: 'mukellif'

        },
        {
          label: 'Taşıt Tanıma Durumu',
          field: 'tasittanima'
        },
        {
          label: 'Proje Kodları',
          field: 'proje'
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
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
        {
          id: 1,
          plate: " 34 HYD 123 ",
          vehiclemodel: 'DACİA DUSTER OTOMOBİL COMF',
          username: ' Ali AY',
          location: 'Sakarya',
          birim: 'Temsilci',
          purchasedate: '10.12.2023',
          purchaseamount: '₺3.300.000,00',
          km: '350.000',
          mukellif: 'Kendisi',
          tasittanima: '',
          proje: '2023-EMR-GEN-TR-102'


        },
      ],
    };
  },
};
</script>