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
  <div class="m-auto mt-0 flex w-full items-center justify-between">
    <div class="flex-1">
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
              class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/repair">BAKIM
          </router-link>
          <router-link
              class=" title-line inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary"
              to="/punishment">HGS/CEZA
          </router-link>
        </div>
      </div>
      <div class="m-auto flex w-9/12 justify-end">
        <div class="mt-16 h-[100px]  w-[599px] rounded-lg border-2 border-solid border-Graydarker  bg-GrayLightest">
          <div class=" ">
            <div class="flex items-center rounded-lg">
              <p class="h-14 w-52 border border-b-Graydarker pl-9 pt-3 text-sm  text-Dark900"></p>
              <p class="h-14 w-52 border border-b-Graydarker pl-9 pt-3 text-sm  text-Dark900">CEZA TUTARI</p>
              <p class="h-14 w-52 border border-b-Graydarker pl-9 pt-3 text-sm  text-Dark900">ERKEN ÖDEME TUTARI</p>
              <p class="h-14 w-52 border border-b-Graydarker pl-9 pt-3 text-sm  text-Dark900">ERKEN ÖDEME KARI</p>
            </div>
            <div class="flex items-center rounded-lg">
              <p class="h-10 w-52 border border-b-Graydarker pl-9 pt-3 text-sm font-bold text-Dark900">TOPLAM</p>
              <p class="h-10 w-52 border border-b-Graydarker pl-9 pt-3 text-sm font-bold text-Dark900">₺56.774,00</p>
              <p class="h-10 w-52 border border-b-Graydarker pl-9 pt-3 text-sm font-bold text-Dark900">₺56.774,00</p>
              <p class="h-10 w-52 border border-b-Graydarker pl-9 pt-3 text-sm font-bold text-Dark900">₺56.774,00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- main -->
      <div class="relative m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg"
           style=" box-shadow: 0px 0px 10px #717982;">
        <div class="w-full ">
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
          label: 'Borçlu',
          field: 'name',
        },
        {
          label: 'Tebliğ Tarihi',
          field: 'notification',
          type: 'data',
        },
        {
          label: 'Tebliğ Türü',
          field: 'notificationtype',
          type: 'number',
        },
        {
          label: 'Evrak No',
          field: 'document',
          type: 'number'

        },
        {
          label: 'Türü',
          field: 'type',

        },
        {
          label: 'Plaka',
          field: 'plate',
          type: 'number'
        },
        {
          label: 'Ceza Türü',
          field: 'punishment',

        },
        {
          label: 'Ceza Tutarı',
          field: 'penaltyamount',
          type: 'number',
        },
        {
          label: 'Erken Ödeme Tutarı',
          field: 'paymenttotal'
        },
        {
          label: 'Erken Ödeme Karı',
          field: 'paymentprofit'
        },
        {
          label: ' Ödeme Tarihi',
          field: 'address',
          type: 'data'
        },
        {
          label: ' Ödeme Yeri',
          field: 'paymentlocation'
        },
        {
          label: ' Dekont',
          field: 'dekont'
        },


      ],
      rows: [
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },
        {
          id: 1,
          name: "Ahmet Yıldız ",
          notification: '13.12.2023',
          notificationtype: 'GİB (Görüntü)',
          document: '2022-01 & 2022-12',
          type: 'Kara Yolları Belgesi',
          plate: '34 HYD 1234',
          punishment: ' Hız Sınır İhlali',
          penaltyamount: '₺20.000,00',
          paymenttotal: '₺15.000,00',
          paymentprofit: '₺5.000,00',
          address: '13.12.2022',
          paymentlocation: 'İ.V.D. Sitesinden',
          dekont: '01AWB0000053',

        },

      ],
    };
  },
};
</script>