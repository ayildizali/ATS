<template>
  <div class=" flex h-full w-full items-center justify-between">
    <div class="  flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Diğer Harcamalar
          </h2>
          <button
              class="mb-2 ml-5 mr-2 mt-3 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white ring-primary hover:bg-PrimaryLight hover:text-primary focus:outline-none focus:ring-2"
              type="button">
            <img class="mr-2 hover:text-primary" src="/public-src/Kullanıcı/Frame(13).svg">
            <router-link to="/spend">Yeni İşlem</router-link>

          </button>
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
      <div class="m-auto flex w-9/12 justify-end">
        <div class="mt-16 h-36  w-64 rounded-lg border-2 border-solid border-b-Graydarker  bg-GrayLightest"
             style=" box-shadow: 0px 0px 10px #717982;">
          <div class=" ">
            <p class="ml-8 mt-7 flex items-center font-bold text-Dark900">TOPLAM TUTAR</p>
            <p class=" mx-3 mt-5 flex items-center border-b-2 border-b-Graydarker"></p>
            <p class="ml-8 mt-5 flex items-center font-bold text-Dark900 ">₺56.774,00</p>
          </div>
        </div>
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
                      setCurrentPage: 1,
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
              theme="polar-bear"

          />
        </div>
      </div>
      <div>
        <div class="mt-14 flex w-11/12 items-center justify-end">
          <div class="flex items-center justify-end">
            <img class="pl-5" src="/public-src/admin/rightRounded.svg">
            <img class="pl-5" src="/public-src/admin/Frame72.svg">
            <img class="pl-5" src="/public-src/admin/LeftRounded.svg">
          </div>
        </div>
      </div>
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
          label: 'Araç Kullanıcısı',
          field: 'name',
        },
        {
          label: 'Tarih',
          field: 'history',
          type: 'data',
        },
        {
          label: 'Fatura',
          field: 'fatura',
          type: 'number',
        },
        {
          label: 'Plaka',
          field: 'plate',
          type: 'number'
        },
        {
          label: 'Harcama Türü',
          field: 'spending',

        },
        {
          label: 'İL',
          field: 'province'
        },
        {
          label: 'Fatura Tutarı',
          field: 'amount',
          type: 'number'
        },

        {
          label: 'Açıklama',
          field: 'explanation',
        },


      ],
      rows: [
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          plate: '34 HYD 1234',
          spending: 'Yakıt',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          explanation: ''

        },
      ],
    };
  },
};
</script>