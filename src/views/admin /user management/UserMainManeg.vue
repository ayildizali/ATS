<template>
  <div class=" flex h-full w-full items-center justify-between">
    <div class="  flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg">
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            Kullanıcı Yönetimi
          </h2>
          <button
              class="mb-2 ml-5 mr-2 mt-3 flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white ring-primary focus:outline-none focus:ring-2"
              type="button">
            <img class="mr-2 hover:text-primary" src="/public-src/Kullanıcı/Frame(13).svg">
            <router-link to="/newuser">Yeni İşlem</router-link>

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
          label: 'T.C.NO',
          field: 'no',
          type: 'number',
        },
        {
          label: 'Telefon',
          field: 'phone',
          type: 'number',
        },
        {
          label: 'E-Mail',
          field: 'email',
          type: 'E-Mail'

        },
        {
          label: 'Plaka',
          field: 'plate',
          type: 'number'
        },
        {
          label: 'Araç Modeli',
          field: 'model',

        },

        {
          label: 'Bağlı Olduğu Birim',
          field: 'unit',

        },
        {
          label: 'İkamet Ettiği İl',
          field: 'address'
        },

      ],
      rows: [
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Kadir ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Yusuf ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Ahmet ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Hamza ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
        {
          id: 1,
          name: "Emin ",
          no: '88888888888',
          phone: '+90 888 888 88 88',
          email: 'ornekmailadresi@hayratyardim.com',
          plate: '34 HYD 1234',
          model: 'Opel',
          unit: ' ',
          address: 'Sakarya'

        },
      ],
    };
  },
};
</script>