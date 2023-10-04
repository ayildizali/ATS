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
      <div class="relative  m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left text-sm text-GrayLightest">
          <thead class="bg-GrayLightest text-xs uppercase text-Dark900">
          <tr>
            <th class="px-6 py-3" scope="col">
              no
            </th>
            <th class="px-6 py-3" scope="col">
              plaka
            </th>
            <th class="px-6 py-3" scope="col">
              araç modeli
            </th>
            <th class="px-6 py-3" scope="col">
              son kullanıcı adı
            </th>
            <th class="px-6 py-3" scope="col">
              zimmet yeri
            </th>
            <th class="px-6 py-3" scope="col">
              birim
            </th>
            <th class="px-6 py-3" scope="col">
              son km durumu
            </th>
            <th class="px-6 py-3" scope="col">
              araç alış tarihi
            </th>
            <th class="px-6 py-3" scope="col">
              araç alış tutarı
            </th>
            <th class="px-6 py-3" scope="col">
              araç satış tarihi
            </th>
            <th class="px-6 py-3" scope="col">
              araç satış tutarı
            </th>
            <th class="px-6 py-3" scope="col">
              açıklama
            </th>
          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              01
            </th>
            <td class="px-6 py-4 text-Dark900">
              34 hyd 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              sdlkfj
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              01
            </th>
            <td class="px-6 py-4 text-Dark900">
              34 hyd 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              sdlkfj
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              01
            </th>
            <td class="px-6 py-4 text-Dark900">
              34 hyd 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              sdlkfj
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              01
            </th>
            <td class="px-6 py-4 text-Dark900">
              34 hyd 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              sdlkfj
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th class="whitespace-nowrap px-6 py-4 font-medium text-Dark900" scope="row">
              01
            </th>
            <td class="px-6 py-4 text-Dark900">
              34 hyd 1234
            </td>
            <td class="px-6 py-4 text-Dark900">
              DACİA DUSTER OTOMOBİL COMF
            </td>
            <td class="px-6 py-4 text-Dark900">
              Muhammet Mustafa Yaprak
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez - İstanbul
            </td>
            <td class="px-6 py-4 text-Dark900">
              Genel Merkez
            </td>
            <td class="px-6 py-4 text-Dark900">
              300.000 KM
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺3.300.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              sdlkfj
            </td>
          </tr>
          </tbody>
        </table>
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

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "OtherExpeneses",
  components: {}
})
</script>