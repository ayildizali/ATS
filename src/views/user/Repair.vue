<style scoped>
.title-line {

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
          <router-link to="/dashboard"><img class="mr-5" src="/public-src/Kullanıcı/Frame137.svg"></router-link>
          <h2 class="text-4xl font-bold leading-9 text-green-800">
            <router-link to="/dashboard">Araçlarım</router-link>
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
      <div class="relative  m-auto mt-10  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left text-sm text-GrayLightest">
          <thead class="bg-GrayLightest text-xs uppercase text-Dark900">
          <tr>
            <th class="px-6 py-3" scope="col">
              Araç Kullanıcısı
            </th>
            <th class="px-6 py-3" scope="col">
              tarİh
            </th>
            <th class="px-6 py-3" scope="col">
              fatura
            </th>
            <th class="px-6 py-3" scope="col">
              fatura ünvanı
            </th>
            <th class="px-6 py-3" scope="col">
              plaka
            </th>
            <th class="px-6 py-3" scope="col">
              il
            </th>
            <th class="px-6 py-3" scope="col">
              fatura tutarı
            </th>
            <th class="px-6 py-3" scope="col">
              km
            </th>
            <th class="px-6 py-3" scope="col">
              oto lastik
            </th>
            <th class="px-6 py-3" scope="col">
              bakım türü
            </th>
            <th class="px-6 py-3" scope="col">
              açıklama
            </th>

          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              24.03.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Fatura
            </td>
            <td class="px-6 py-4 text-Dark900">
              Öz Asm Oto
            </td>
            <td class="px-6 py-4 text-Dark900">
              34 HYD 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gaziantep
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺200.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              150,000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              205/55 R 16 (Goodyear)
            </td>
            <td class="px-6 py-4 text-Dark900">
              Periyodik Bakım
            </td>
            <td class="px-6 py-4 text-Dark900">
              4 Adet Lastik Alımı
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              24.03.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Fatura
            </td>
            <td class="px-6 py-4 text-Dark900">
              Öz Asm Oto
            </td>
            <td class="px-6 py-4 text-Dark900">
              34 HYD 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gaziantep
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺200.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              150,000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              205/55 R 16 (Goodyear)
            </td>
            <td class="px-6 py-4 text-Dark900">
              Periyodik Bakım
            </td>
            <td class="px-6 py-4 text-Dark900">
              4 Adet Lastik Alımı
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              24.03.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Fatura
            </td>
            <td class="px-6 py-4 text-Dark900">
              Öz Asm Oto
            </td>
            <td class="px-6 py-4 text-Dark900">
              34 HYD 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gaziantep
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺200.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              150,000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              205/55 R 16 (Goodyear)
            </td>
            <td class="px-6 py-4 text-Dark900">
              Periyodik Bakım
            </td>
            <td class="px-6 py-4 text-Dark900">
              4 Adet Lastik Alımı
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              24.03.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Fatura
            </td>
            <td class="px-6 py-4 text-Dark900">
              Öz Asm Oto
            </td>
            <td class="px-6 py-4 text-Dark900">
              34 HYD 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gaziantep
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺200.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              150,000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              205/55 R 16 (Goodyear)
            </td>
            <td class="px-6 py-4 text-Dark900">
              Periyodik Bakım
            </td>
            <td class="px-6 py-4 text-Dark900">
              4 Adet Lastik Alımı
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              24.03.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Fatura
            </td>
            <td class="px-6 py-4 text-Dark900">
              Öz Asm Oto
            </td>
            <td class="px-6 py-4 text-Dark900">
              34 HYD 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gaziantep
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺200.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              150,000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              205/55 R 16 (Goodyear)
            </td>
            <td class="px-6 py-4 text-Dark900">
              Periyodik Bakım
            </td>
            <td class="px-6 py-4 text-Dark900">
              4 Adet Lastik Alımı
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 " scope="row">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              24.03.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Fatura
            </td>
            <td class="px-6 py-4 text-Dark900">
              Öz Asm Oto
            </td>
            <td class="px-6 py-4 text-Dark900">
              34 HYD 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gaziantep
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺200.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              150,000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              205/55 R 16 (Goodyear)
            </td>
            <td class="px-6 py-4 text-Dark900">
              Periyodik Bakım
            </td>
            <td class="px-6 py-4 text-Dark900">
              4 Adet Lastik Alımı
            </td>
          </tr>

          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "RepAir",
  components: {}
})
</script>