<template>
  <div class="m-auto flex w-full items-center justify-between">
    <div class="flex-1">
      <!-- header -->
      <div class="m-auto flex h-32 w-3/4 items-center justify-between" >
        <div class="ml-8 flex w-3/4 items-center">
          <img src="/public-src/Kullanıcı/Frame137.svg" class="mr-10">
          <h2 class="ml-8 text-4xl font-bold leading-9 text-green-800">
            Araçlarım
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
        <div class="m-auto flex w-3/4 items-center justify-between text-[#717982]">
          <h3 class=" inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">ARAÇ</h3>
          <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">KULLANICI BİLGİLERİ</h3>
          <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">DİĞER BİLGİLER</h3>
          <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">KM/HARCAMALAR</h3>
          <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">BAKIM</h3>
          <h3 class="inline-block rounded-t-lg border-b-2 border-transparent font-bold hover:border-primary hover:text-primary">HGS/CEZA</h3>
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
      <div class="relative m-auto mt-16  flex w-3/4 items-center overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-left text-sm text-GrayLightest">
          <thead class="bg-GrayLightest text-xs uppercase text-Dark900">
          <tr>
            <th scope="col" class="px-6 py-3">
              borçlu
            </th>
            <th scope="col" class="px-6 py-3">
               tebliğ tarİh
            </th>
            <th scope="col" class="px-6 py-3">
              tebliğ türü
            </th>
            <th scope="col" class="px-6 py-3">
              evrak no
            </th>
            <th scope="col" class="px-6 py-3">
              türü
            </th>
            <th scope="col" class="px-6 py-3">
              plaka
            </th>
            <th scope="col" class="px-6 py-3">
              ceza türü
            </th>
            <th scope="col" class="px-6 py-3">
              ceza tutarı
            </th>
            <th scope="col" class="px-6 py-3">
              erken ödeme tutarı
            </th>
            <th scope="col" class="px-6 py-3">
              erken ödeme karı
            </th>
            <th scope="col" class="px-6 py-3">
               ödeme tarihi
            </th>
            <th scope="col" class="px-6 py-3">
              ödeme yeri
            </th>
            <th scope="col" class="px-6 py-3">
              dekont no
            </th>
            <th scope="col" class="px-6 py-3">
              ödenme durumu
            </th>


          </tr>
          </thead>
          <tbody>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              13.12.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gib (görüntü)
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-01 & 2022-12
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              Hız Sınırı İhlali
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺20.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺15.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺5.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              İ.V.D. Sitesinden
            </td>
            <td class="px-6 py-4 text-Dark900">
              01AWB0000053
            </td>
            <td class="px-6 py-4 text-Dark900">
              Ödendi
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              13.12.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gib (görüntü)
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-01 & 2022-12
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              Hız Sınırı İhlali
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺20.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺15.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺5.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              İ.V.D. Sitesinden
            </td>
            <td class="px-6 py-4 text-Dark900">
              01AWB0000053
            </td>
            <td class="px-6 py-4 text-Dark900">
              Ödendi
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              13.12.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gib (görüntü)
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-01 & 2022-12
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              Hız Sınırı İhlali
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺20.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺15.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺5.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              İ.V.D. Sitesinden
            </td>
            <td class="px-6 py-4 text-Dark900">
              01AWB0000053
            </td>
            <td class="px-6 py-4 text-Dark900">
              Ödendi
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              13.12.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gib (görüntü)
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-01 & 2022-12
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              Hız Sınırı İhlali
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺20.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺15.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺5.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              İ.V.D. Sitesinden
            </td>
            <td class="px-6 py-4 text-Dark900">
              01AWB0000053
            </td>
            <td class="px-6 py-4 text-Dark900">
              Ödendi
            </td>
          </tr>
          <tr class="border-b bg-white ">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              13.12.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gib (görüntü)
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-01 & 2022-12
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              Hız Sınırı İhlali
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺20.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺15.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺5.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              İ.V.D. Sitesinden
            </td>
            <td class="px-6 py-4 text-Dark900">
              01AWB0000053
            </td>
            <td class="px-6 py-4 text-Dark900">
              Ödendi
            </td>
          </tr>
          <tr class="border-b bg-gray-50 text-Graydarker">
            <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-Dark900 ">
              Muhammet Mustafa Yaprak
            </th>
            <td class="px-6 py-4 text-Dark900">
              13.12.2023
            </td>
            <td class="px-6 py-4 text-Dark900">
              Gib (görüntü)
            </td>
            <td class="px-6 py-4 text-Dark900">
              2022-01 & 2022-12
            </td>
            <td class="px-6 py-4 text-Dark900">
              Kara Yolları Belgesi
            </td>
            <td class="px-6 py-4 text-Dark900">
              01 AEE 387
            </td>
            <td class="px-6 py-4 text-Dark900">
              Hız Sınırı İhlali
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺20.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺15.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              ₺5.000,00
            </td>
            <td class="px-6 py-4 text-Dark900">
              13.12.2022
            </td>
            <td class="px-6 py-4 text-Dark900">
              İ.V.D. Sitesinden
            </td>
            <td class="px-6 py-4 text-Dark900">
              01AWB0000053
            </td>
            <td class="px-6 py-4 text-Dark900">
              Ödendi
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

export default defineComponent (
    {
      name:"PunisHment",
      components:""
    }
)
</script>