<style scoped>
.title-line {
  color: #1E724A;
  border-bottom-color: #1E724A;
  opacity: 5;
  transform: scaleX(1);
  transform-origin: left;
}
</style>
<template>
  <div class=" m-auto mt-0 flex h-full w-full items-center justify-between">
    <div class="  flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between">
        <div class="ml-5 flex w-3/4 items-center">
          <router-link to=""><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="">Araçlarım</router-link>
          </h2>
          <h4 class="ml-8 text-base font-medium text-[#717982]"> / 34 HYD 1234 VOLKSWAGEN POLO </h4>
        </div>

        <div class="flex items-center">
          <nav class="pr-3">
            <img src="/public-src/Kullanıcı/Frame(12).svg">
          </nav>
          <p class="text-sm font-semibold text-gray-500">Muhammed Ali Ay </p>
        </div>
      </div>
      <!-- content-->
      <div class="m-auto flex h-20 w-3/4 items-center rounded-xl border-2 border-solid border-primary">
        <div class="m-auto flex w-3/4 items-center justify-between text-Dark800">
          <RouterLink
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/vehicle">ARAÇLARIM
          </RouterLink>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/userinfo">KULLANICI BİLGİLERİ
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/otherinfo">DİĞER BİLGİLER
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/expenses">KM/HARCAMALAR
          </router-link>
          <router-link
              class=" title-line inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/repair">BAKIM
          </router-link>
          <router-link
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/punishment">HGS/CEZA
          </router-link>
        </div>
      </div>
      <div class="m-auto flex w-9/12 justify-end">
        <div class="mt-16 h-36  w-64 rounded-lg border-2 border-solid border-b-Graydarker  bg-GrayLightest">
          <div class=" ">
            <p class="ml-8 mt-7 flex items-center font-bold text-Dark900">TOPLAM TUTAR</p>
            <p class=" mx-3 mt-5 flex items-center border-b-2 border-b-Graydarker"></p>
            <p class="ml-8 mt-5 flex items-center font-bold text-Dark900 ">₺56.774,00</p>
          </div>
        </div>
      </div>

      <!-- main -->
      <div class="relative  m-auto mt-10  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg"
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
          label: 'Fatura Unvanı',
          field: 'invoicetitle'
        },
        {
          label: 'Plaka',
          field: 'plate',
          type: 'number'
        },
        {
          label: 'İL',
          field: 'province'
        },
        {
          label: 'Fatura Tutarı',
          field: 'invoiceamount',
          type: 'number'

        },
        {
          label: 'KM',
          field: 'km',
        },
        {
          label: 'Oto Lastik',
          field: 'Tire'
        },
        {
          label: ' Bakım Türü',
          field: 'Maintenancetype',
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
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          invoicetitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          invoiceamount: '₺200.000,00',
          km: '200.000',
          Tire: '205/55 R 16 (Goodyear)',
          Maintenancetype: 'Periyodik Bakım',
          explanation: '4 Adet Lastik Alımı',

        },
      ],
    };
  },
};
</script>